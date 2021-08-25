# Project Overview

## Project Name

[ChoreBox](https://github.com/eileen813/chorebox)

## Project Description

ChoreBox is an Airtable and React build where the user can keep track of his or her chores.  From the homepage, the user has the ability to view the current chore list, edit, and delete a chore.  The navigation bar will include a link to add a new chore, and another link to learn more about the inspiration of the website.

## Wireframes

The wireframes below display the homepage with the chore list and description for ChoreBox in the desktop and mobile formats. The homepage contains the name of the website, a navigation bar with two clickable links; "Add A Chore", and "About".  When a user clicks on a chore, the homepage displays a container holding its description with the option to edit or delete the chore all together. The "Add a Chore" link route's to a new page within the website that contains an input form followed by the "Add A Chore" button.  This will submit the new chore onto the homepage sidebar with the current chores.  The "About" link will have content about why the creator built the app.  The wireframe also contains a footer that will have clickable logos to the creator's GitHub and LinkedIn profiles. 

<img src = "client/Assets/Chores WireFrame.png">

## Component Hierarchy

<img src = "client/Assets/Component Hierarchy.png">

## API and Data Sample

```json
{
    "records": [
        {
            "id": "recKc5rFNOxdy4ae1",
            "fields": {
                "name": "fold laundry",
                "description": "Locate the clean clothes basket on the laundry table.  Fold and/or hang all clothes, even if it is not yours.  Teamwork makes the dream work!  Enjoy your crisp clean clothes for the week!"
            },
            "createdTime": "2021-08-19T19:52:21.000Z"
        },
        {
            "id": "recMZgaYznExZTsBm",
            "fields": {
                "name": "vacuum",
                "description": "Be sure floor area is picked up and cleared of any small debris, hanging shoe laces, wires, etc. prior to vacuuming."
            },
            "createdTime": "2021-08-19T19:08:24.000Z"
        },
        {
            "id": "recTxQEL3FmvLcfez",
            "fields": {
                "name": "bathroom",
                "description": "Locate the bathroom cleaning solution, sponge, paper towels, and any other cleaning supplies you may need.  Scrub sink, toilet, and shower, paying careful attention to any stubborn stains.  Be sure to clean around the bottom of the toilet as well.  Windex the mirror, and enjoy your sparkling clean bathroom!"
            },
            "createdTime": "2021-08-19T19:16:16.000Z"
        },
        {
            "id": "recgYkDKmKn74jxvM",
            "fields": {
                "name": "sweep and mop",
                "description": "Sweep entire downstairs area to include guest room and bathroom.  Once complete, fill mop bucket with hot water and mix in mop solution.  Turn on your favorite tunes and start mopping, paying careful attention to scuff marks/sticky areas (if any)."
            },
            "createdTime": "2021-08-19T19:08:24.000Z"
        },
        {
            "id": "recnTk3O9zBQn7ZuM",
            "fields": {
                "name": "skim pool",
                "description": "Locate the long pool pole with attached net.  Carefully skim the top of the pool water to remove any and all debris.  Empty net in the lawn area after each pass."
            },
            "createdTime": "2021-08-19T19:08:24.000Z"
        }
    ]
}
```

### MVP/PostMVP

#### MVP 

- Build a working, interactive React app.
- Have at least six separate, rendered components; App, Chore, Form, NavBar, Sidebar, and About.
- Ensure all functionality of the React components. 
- Application of Axios needs to take place to obtain data from Airtable, and GET/render that data in components.
- Use the POST/create Axios request to add a new chore.
- The PUT/update Axios request will be implemented for the user to delete a chore.

#### PostMVP

- Include a points based system upon chore completion leading up to a weekly allowance amount.
- Implement a third party API to generate random motivational quotes onto the homepage.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|August 19| Prompt / Wireframes / Component Hierarchy / Airtable Setup / README | Complete
|August 20| Finish README & Get Project Approval | Incomplete
|August 21| Core Application Structure (add component folders & files) | Incomplete
|August 22| Pseudocode / import items / GET Request | Incomplete
|August 23-24| POST/PUT/DELETE via axios  | Incomplete
|August 24| Reach MVP by days end | Incomplete
|August 25| Styling; flex/grid, media queries | Incomplete
|August 26| Post MVP | Incomplete
|August 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Airtable & New Repo Setup | H | 2 hrs| 2 hrs | 2 hrs |
| Adding component folders & files / Pseudocode | H | 1 hr| 1 hr | 1 hr |
| Add Nav., Form, & Search Bar | H | 3 hr| 3 hr | 3 hr |
| GET/render Airtable data | H | 5 hrs| 5 hrs | 5 hrs |
| POST/create new data on Airtable | H | 5 hr| 5 hr | 5 hr |
| POST & DELETE to Airtable | H | 5 hr| 5 hr | 5 min |
| Adding Flexbox/grid & Media Query | H | 6 hrs| 6 hr | 6 hr |
| Style with CSS, Styled Components, CSS-in-JS | H | 6 hrs| 6 hrs | 6 hrs |
| Final Touches/Debug | H | 5 hrs| 5 hrs | 5 hrs |
| Total | H | 38 hrs| 38 hrs | 38 hrs |

## SWOT Analysis

### Strengths:
I have good knowledge of the functionality of my website and its design layout. The wireframes, project schedule, and timeframes will assist in me staying on track to the final deadline of presentation day. If I stumble along the way, I will revert back to the labs and previously recorded lectures.

### Weaknesses: 

Routing the components to implement MVP often confuses me.  Once I get one component working, I believe it should be fairly easy for me to set up the remaining components to their respective functionalities.

### Opportunities:

I can see how React can be very efficient with the ability to keep your code more organized in creating components for each aspect of a website.  I'm excited to see my website come to life not only with the functionality, but also the styling as well.  It gives me motivation as I already have other website ideas I would like to create using React and CRUD.

### Threats:

I notice when I hit a roadblock, I spend more time than needed on researching the solution, or trying to work it out myself.  A prior instructor once told me if I find myself still in the roadblock within 20-40 minutes in, then it's time to ask for help.  I can see this being beneficial and a great way to maximize my time management.  As long as I know I tried my best to get out of the roadblock myself, it's okay to ask for help.  Asking questions is how we learn, followed by practice.