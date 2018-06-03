module.exports = {
  categories: [
    {
      title: "Frontend Development",
      sub : [
        {
          title: "Setup Theming",
          description: "This category contains activities for: Setup of the initial theme / sub-theme structure, including initial file structure and dev workflow for front end.",
          tips: "- Is the theme going to be using a starter / baseline theme like Nimbus OR a more advanced framework like Bootstrap?\n- Will the Sass file be setup using SMACSS or a deviation?\n- Consider the level of experience if a framework like bootstrap is being used, as learning a new one will have impacts to time."
        },
        {
          title: "Front-end Build Tools",
          description: "This category contains activities for: Set up the build tools provided with base theme or create custom build tools required for the project. (Note: This is normally not required in PS builds which utilize Acquia Nimbus, this line item only applies to non-standard theming.)",
          tips: "- How will the CSS compile with Sass (Gulp, Grunt, etc)?\n- Will we be using all included gulp tasks? Can we remove unused ones?\n- What all are we going to be linting? JS? SASS? Both? Do we need to add our custom module paths to our JS linter?\n- What other custom gulp tasks will be needed?"
        },
        {
          title: "Global Theming",
          description: "This category contains activities for: Global container layout tasks that will cover requirements across the site. Things like style guides, global theming of navigations, default blocks, panels, views, etc. Includes all of the styles that all elements will inherit by default.",
          tips: "- How will designs be provided?\n- When will they be signed off?\n- How complete are they?\n- Is global theming going to impact administrative UI at all? If so, how?\n- How many different types of layouts will be needed to maintain the UI for the site?\n- Will the layout be dictacted by the standared block layout (sidebar, content) or custom Panel Layouts?\n- What are the responsive rules for this layout with Tablet and Mobile, along with DOM stacking for these sizes (content first / sidebar first for mobile)?\n- Where will each node / entity be displayed?\n- Will these entities need their own page layout?\n- Will these entities be displayed in a view? Does it require a custom field layout or can we create a re-usable view mode?\n- Will these entities be displayed as a referenced entity attached to another entity? Custom view mode needed?\n- Is responsive theming going to be mobile-first or desktop-first?\n- How many breakpoints and devices will need to be supported?\n- Is there sufficient comps for each required device and breakpoint?\n- Is there device-specific functionality that would be required for only that breakpoint (example: mobile menu)?\n- What is the timeline of matching responsive comps in comparision with desktop?"
        },
        {
          title: "Component Theming",
          description: "This category contains activities for: Theming and functionality for styled components (ie. custom blocks / beans / panes). Global theming covers the defaults and Component Theming are individual components on the site that require targeted theming in these areas.",
          tips: "- What are total amount global components and will they be placed in a consistent manner regardless of (panelizer versus block system)?\n- Identify the states of each functional component (open/closed, hover/focus, clicked/blur). Will the functionality of each component be provided in wireframes or documentation?\n- Will the style or functionality vary depending on the location that it is placed on the page?\n- Will the components be provided in a list of referenced from a centralized reference point from the comps/wireframes?"
        },
        {
          title: "Theme Libraries & Assets",
          description: "This category contains activities for: Contrib or custom libraries and assets for the theme. These include third party javascript libraries for supporting UI/UX and any custom libraries that are reusable for custom UI/UX.",
          tips: "- Do we have custom text fonts?  Are there too many? Can we standardize?\n- Are we using an icon font? Are there more than one being used? Can we consolidate and standardize?\n- Do icons use custom images? Are they sprited? Are there enough that we should automate spriting using a front-end spriting tool?\n- Can we use SVGs and scalable assets?\n- Can we set manage this asset as a library?\n- Is this functionality already available in a core library? Do we really need it?\n- Can we combine related scripts / plug-ins into a library?\n- Will this library need to be loaded on every page? Can we just attach it to a specific component in a render array?\n- Which libraries will need their own custom stylesheets? Can we build those out of existing sass partials?\n- How do we get and maintain these libraries? NPM? Bower? Download from some sketchy dudes website?\n- Are there conflicts with core libraries? Can we remove that core library without breaking other things."
        }
      ]
    },
    {
      title: "Backend Development Categories",
      sub : [
        {
          title: "Setup Infrastructure",
          description: "This category contains activities for: Drupal (Bolt) installation, Lightning, GIT setup, JIRA setup, and any other setup and configuration required for the project/platform.",
          tips: "- Assume we're using Bolt\n- Are we using our GIT?\n- Are we using CI (Travis)?\n- Are we using our JIRA and do we know the workflow?"
        },
        {
          title: "Content Types",
          description: "This category contains activities for: Defines the various content types and their fields for managing content on the site. Articles, Blogs, Photo Galleries, etc.",
          tips: "- Do we have a list of all of the content types?\n- Do we know all of the fields that should exist for each content type?\n- How many of those content types have items manually created vs imported from somewhere?\n- Who can create nodes of those content types?"
        },
        {
          title: "Content Administration",
          description: "This category contains activities for: Administration activities related to content creation. Includes node cloning, url redirects, content notifications, content scheduling, wysiwyg editors, etc.",
          tips: "- Assumes common out of the box and contrib module administration.\n- Does content allows full html?\n- What WYSIWYG elements need to exist?\n- Can content be scheduled for publishing?\n- Are there any URL aliasing or vanity URL requirements?\n- Will there be content moderations? (see Content & Editorial Workflow category)\n- Will notifications be required for content changes? e.g, when a node is published, email a select list of users?\n- Are there any actions that trigger events when things happen to content?"
        },
        {
          title: "Taxonomy",
          description: "This category contains activities for: Various taxonomies and any term definitions for the vocabulary.",
          tips: "- Do we have a list of the vocabularies we need?\n- Do we know vocabs will require us to re-define terms?\n- Do any vocabularies require additional field support on them?"
        },
        {
          title: "Content & Editorial Workflow",
          description: "This category contains activities for: Various content states and moderation requirements for content and editorial workflow (draft, review, published, etc). In addition, define Content Staging and approval workflow requirements.",
          tips: "- What are the various workflow states for each content type?\n- Are there different workflow states between content types?\n- What user roles have permissions to transitions various states?\n- Are there any revisioning requirements outside of core revisioning?"
        },
        {
          title: "Navigation",
          description: "This category contains activities for: Metatags, sitemaps, etc. Any SEO requirements that should be documented as part of the build.",
          tips: "- What SEO requirements does the site have?\n- Does metags contrib module provide everything we need?"
        },
        {
          title: "Localization",
          description: "This category contains activities for: Any localization/translation required for the site, which includes content, menus, or any other translation requirements for the site.",
          tips: "- Are there any language specific pages, content, or otherwise?\n- If YES, what are all of the languages required for support?\n- How does multilingual affect content import, content workflow and content display (for example, how will navigation items be impacted which displaying a German version vs English)?\n- 3rd party translation services, testing and Translation Workflow requirements?"
        },
        {
          title: "Site Search",
          description: "This category contains activities for: Any site-search functionality and requirements for searching content on the site. May include Acquia Search, Solr, etc.",
          tips: "- Are we using Acquia Search?\n- Are there going to be more than 1 index?\n- Are there any facets that would be searchable?\n- Is search only pulling from one source (not blending with other sources)\n- Are there any multi-lengual search requirements?\n- Is there going to be autocomplete or auto-suggest based searching?\n- What types of things are being searched? (strings, integers, attachments, etc)"
        },
        {
          title: "Page Building Elements",
          description: "Blocks, rotators, views, panels, and other page elements that are part of building out a page with all of it's components.",
          tips: "- What kinds of blocks need to be developed?\n- Are there any rotators? If so, what content drives them?\n- Do content editors need panels-type building tools?\n- Will pages change UI/UX (theme) at between them?\n- Are components individual to pages or reusable between pages? How should workflow of those components work?"
        },
        {
          title: "Roles & Permissions",
          description: "This category contains activities for: User roles and role-specific permissions required for the site (administrators, content editors, content approvers, managers, etc).",
          tips: "- What roles are needed for the site?\n- Are there any specific permissions that should be considered for each role?"
        },
        {
          title: "Integrations",
          description: "This category contains activities for: Any third-party integrations that provide services over API (Salesforce, etc)",
          tips: "- For each intergation, is there an API ready for integration?\n- What is the means of accessing the API? (REST, Soap)\n- Does the API require any authentication to connect and access?\n- Does the API require multiple requests to different endpoints to get data out (e.g call API-A to get auth info, call API-B with auth info from API-A)?\n- What is the response type of the API? (JSON, XML)\n- Have we seen an example response from the API?\n- What CRUD opperarations are we performing? (Create, Read, Update, Delete)\n- Are there any other types of integrations like iframes, or interfaces that Drupal should create to be consumed by other platforms.\n- What are we doing with the data from the API?\n- How do we handle bad responses (500, 404, etc). Is a 'graceful failure' state defined?\n- How are API endpoints ponits monitored and maintained? SLA of third-party services or in house applications.\n- What API service endpoints need to be defined in the Drupal Solution?\n- Performce of integrations? Cachability, rate limits and scalability"
        },
        {
          title: "Integrations - Social",
          description: "This category contains activities for: Social sharing, social feeds and any other social components for social channels like Facebook, LinkedIn, G+, etc.",
          tips: "- Which social channels will be supported?\n- Are we sharing content? If so, which content?\n- Is there any social integration with videos (e.g, share in-video)?\n- Are we importing/reading in any content from social channels?\n- Do we have all of the customer's social URLs for integration?\n- Is there any social login functionality\n- Do we understandrequirments of social stream displays and social walls?"
        },
        {
          title: "Integrations - Analytics",
          description: "This category contains activities for: Any analytics (custom or third-party) for tracking user behavior. This can include services like Google Analytics, Adobe Site Catalyst, Telium, etc.",
          tips: "- Is there SSO (single sign on)? iDP provider?\n- Will there be any entitlement (LDAP/AD) integration?\n- Who will manages users on the site?\n- Will site users have accounts and profiles?\n- What fields should users have on their profiles?\n- Will user profiles connect to any third-party services like facebook? OpenID systems?\n- Will users have sign up and opt in capabilities?"
        },
        {
          title: "Administration & Settings",
          description: "This category contains activities for: Any custom adminstrative forms, settings, etc that provide functionality for the site.",
          tips: "- What do the various settings of each administration screen do?\n- Are there any validation criteria needed to be defined for each of the setting fields?\n- What permissions or level of access does the administrative setting for require?"
        },
        {
          title: "Accessibility",
          description: "This category contains activities for: Accessibility requirements of a site. Inluded, but not limited to, 508 and WCAG."
        },
        {
          title: "Performance",
          description: "This category contains activities for: Caching layers, file aggregation, performance monitoring or any other feature requirements for supporting performance of the application.",
          tips: "- Is there any CDN integration?\n- Akamai, Gigya, etc?\n- What other performance requirements need to be met outside of Drupal's caching layer?"
        },
        {
          title: "Security",
          description: "This category contains activities for: Security audits, IP white listing, SSL, etc. Any development tasks related to security of the site.",
          tips: "- Are there any SSL requirements?\n- AntiSpam?\n- Anti-Virus?\n- additional encription requirements (file, data, key management)\n- Does the organiztion require vunerability scans or pentration testing we will support and remediate prior to launch?"
        },
        {
          title: "Migrations",
          description: "This category contains activities for: Any content migrations required for bring content from another platform into Drupal as part of a site migration.",
          tips: "- What content are we migrating?\n- Do we have access to the source content and where does it come from?\n- Have we seen the content we're migrating?\n- Has a migration questionare been filled out?\n- Will we be migrating assets? (files, etc)\n- Will we be migrating URL's?\n- Is there any manual work that will need to be performed that can not be scripted? "
        },
        {
          title: "Commerce",
          description: "This category contains activities for: Any commerce functionality/integration."
        },
        {
          title: "Documentation",
          description: "This category contains activities for: Any application or developer documentation that is set as a requirement for the build. Does not include standard code-level documentation.",
          tips: "- Outside standard code-level documentation (DocBlock), what documentation will the customer require?\n- What format will documentation be developed AND delivered in?\n- What is the approval cycle and who is responsible for approving delivered documentaion?\n- Will documentation feedback/approval loop cause time impacts?"
        }
      ]
    }
  ]
};
