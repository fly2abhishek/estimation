import React, {Component} from 'react'
import ResourcePlanList from '../../components/ResourcePlanList'
import AddResourcePlan from '../../components/AddResourcePlan'
import { Button } from 'reactstrap';
import { weeks } from './_defaultWeeks.js';
import { resourceAllocations } from './_defaultAllocations.js'
import { connect } from 'react-redux'
import {
  createProjectPlan,
  fetchProjectResourcePlans,
  fetchProjectResourceAllocations,
  updateProjectResourceAllocations,
  addProjectResourceAllocation
} from '../../actions'

class ResourcePlan extends Component {
  state = {
    add: false,
    discount: 0
  }

  submitResourceForm = (weeks) => {
    const { dispatch, projectRates, isFetching} = this.props
    let rates = [];
    if (!isFetching) {
      projectRates.forEach((rate) => {
        rates[rate.role] = rate.rid;
      })
      const rows = []
      resourceAllocations.forEach((data, index) => {
        let tempRow = {}
        tempRow.role = data.role
        tempRow.rid = rates[data.role]
        data.allocations.forEach((hours, index) => {
          let weekName = hours.week_name + " - (W" + hours.week + ")"
          tempRow[weekName] = hours.hours
          tempRow.weekNumber = hours.week
        })
        tempRow.id = index + 1
        rows.push(tempRow)
      })
      dispatch(createProjectPlan(rows, weeks))
    }
  }

  addNewResource = () => {
    this.setState({
      add: true
    })
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(fetchProjectResourcePlans())
  }

  onAfterInsertRow = (row) => {
    const {dispatch, currResId} = this.props
    dispatch(addProjectResourceAllocation(row, currResId));
  }

  onAfterSaveCell = (row, cellName, cellValue) => {
    const { dispatch } = this.props
    let matches = cellName.match(/\(W(\d+)\)/)
    let week = matches[1]
    let data = {
      resId: row.resId,
      rid: row.rid,
      weekName: cellName,
      hours: cellValue,
      week: week
    }
    dispatch(updateProjectResourceAllocations(data))
  }

  showSelectedResourcePlan = (plan, e) => {
    const { dispatch } = this.props
    dispatch(fetchProjectResourceAllocations(plan.res_id, plan))
    this.setState({
      add: true
    })
  }

  calculateRevenue = (currPlan, discount) => {
    const { projectRates } = this.props
    let rows = []
    let ratesData = []
    projectRates.forEach((rates) => {
      let cost = parseInt(rates.cost, 10)
      let listedRate = parseInt(rates.rate, 10)
      let calculatedDiscount = (listedRate * discount) / 100;
      let sellRate = listedRate - Math.floor(calculatedDiscount);
      ratesData[rates.role] = {
        cost: cost,
        listedRate: listedRate,
        sellRate: sellRate
      }
    })
    currPlan.forEach((allocation) => {
      let temp = {}
      temp.role = allocation.role
      temp.hours = 0;
      Object.keys(allocation).forEach((key) => {
        let matches = key.match(/\(W(\d+)\)/)
        if (matches !== null && matches.length > 0) {
          allocation[key] = (allocation[key] !== '') ? allocation[key] : 0
          temp.hours += parseInt(allocation[key], 10)
        }
      })
      temp.totalCost = temp.hours * ratesData[temp.role].cost
      temp.listRev = temp.hours * ratesData[temp.role].listedRate
      temp.totalRev = temp.hours * ratesData[temp.role].sellRate
      temp.cost = ratesData[temp.role].cost
      temp.listedRate = ratesData[temp.role].listedRate
      temp.sellRate = ratesData[temp.role].sellRate
      rows.push(temp)
    })
    return rows
  }

  calculateTotal = (revenueTotal) => {
    let total = {
      hours: 0,
      cost: 0,
      revenue: 0,
      actual: 0,
      blendedMargin: 0,
    }
    revenueTotal.forEach((revenue) => {
      total.hours += parseInt(revenue.hours, 10)
      total.cost += parseInt(revenue.totalCost, 10)
      total.revenue += parseInt(revenue.listRev, 10)
      total.actual += parseInt(revenue.totalRev, 10)
      total.blendedMargin = Math.round(((total.actual - total.revenue) / total.revenue) * 100) / 100 + '%';
    })

    let rev = ((total.revenue - total.cost) / total.revenue) * 100
    let listRev = ((total.actual - total.cost) / total.revenue) * 100

    rev = (Math.round(rev * 100) / 100);
    listRev = (Math.round(listRev * 100) / 100);

    let rows = [
      // Acquia Resource Hours
      {
        title: "Acquia Hours (billable)",
        listRates: total.hours,
        actuals: total.hours,
        diffList: 0
      },
      {
        title: "Acquia Cost (not incl. travel)",
        listRates: total.cost,
        actuals: total.cost,
        diffList: 0
      },
      {
        title: "Acquia Revenue",
        listRates: total.revenue,
        actuals: total.actual,
        diffList: total.actual - total.revenue
      },
      {
        title: "Acquia Margin",
        listRates: rev + "%",
        actuals: listRev + "%",
        diffList: Math.round((listRev - rev) * 100) / 100 + "%"
      },
      {
        title: "Blended Margin",
        listRates: rev + "%",
        actuals: listRev + "%",
        diffList: Math.round((listRev - rev) * 100) / 100 + "%"
      }
    ];
    return rows
  }

  onDiscountChange = (e) => {
    let val = e.target.value;
    this.setState({
      discount: val
    })
  }


  render = () => {
    const { add, discount } = this.state
    const { projectRates, resourcePlans, currPlan } = this.props
    const rateOptions = []

    projectRates.forEach((rate) => {
      rateOptions[rate.rid] = rate.role
    })

    let revenue = this.calculateRevenue(currPlan, discount);
    let revenueTotal = this.calculateTotal(revenue)

    const column = [{
      Header: 'Role',
      accessor: "role"
    }]
    const rows = currPlan

    weeks.forEach((data) => {
      let temp = {
        Header: data.week_name + " - (W" + data.week + ")",
        accessor: data.week_name + " - (W" + data.week + ")",
        weekNumber: data.week
      }
      column.push(temp)
    })

    const cellEditProp = {
      mode: 'click',
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell  // a hook for after saving cell
    };

    const options = {
      afterInsertRow: this.onAfterInsertRow,
    }

    const noOfWeeks = currPlan.weeks;

    return (
      <div>
        {
          (add) ?
          <AddResourcePlan
            options = {options}
            rateOptions = { rateOptions }
            cellEditProp = { cellEditProp }
            rates={projectRates}
            header={column}
            rows={rows}
            revenue = { revenue }
            noOfWeeks = { noOfWeeks }
            totalRevenue = { revenueTotal }
            onSubmitForm = { this.submitResourceForm.bind(this) }
            onDiscount = { this.onDiscountChange.bind(this) }
          />
          :
          <div>
            <ResourcePlanList
              onClick= {this.showSelectedResourcePlan.bind(this)}
              plans={resourcePlans}>
            </ResourcePlanList>
            <Button onClick={this.addNewResource.bind(this)} color="primary" size="lg" active>Add New Resource Plan</Button>
          </div>
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  const { projectRates, isFetching } = state.projectRates
  const { isFetchingResources, resourcePlans, currPlan, currResId } = state.projectResourcePlans
  return {
    projectRates,
    isFetching,
    isFetchingResources,
    resourcePlans,
    currPlan,
    currResId
  }
}

export default connect(mapStateToProps)(ResourcePlan);
