import React, {Component} from 'react';
import {CardText, CardLink, Col, Card, Row, CardHeader, CardBody} from 'reactstrap';
import config from '../../config';

class Dashboard extends Component {

  state = {projects: []};

  componentDidMount() {
    fetch(config.api_url + 'projects')
      .then(res => res.json())
      .then(projects => this.setState({projects}));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1>Projects</h1>
        <Row>
        {this.state.projects.map((project) => {
          return (
            <Col xs="12" sm="6" md="4">
              <Card>
                <CardHeader>
                  {project.title}
                  <div className="card-actions">
                    <a onClick={this.props.addProject.bind(this, project)} href={`#/project/${project.pid}`}>
                      <small className="text-muted">View</small>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="chart-wrapper">
                    <CardText> {project.description} </CardText>
                    <CardLink onClick={this.props.addProject.bind(this, project)} href={`#/project/${project.pid}`}>View</CardLink>
                    <CardLink onClick={this.props.addProject.bind(this, project)} href={`#/project/${project.pid}/edit`}>Edit</CardLink>
                  </div>
                </CardBody>
              </Card>
            </Col>
          );
        })}
        </Row>
      </div>
    );
  }
}

export default Dashboard;
