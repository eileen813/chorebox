# Project Overview

## Project Name

[ChoreBox](https://github.com/eileen813/chorebox)

## Project Description

ChoreBox is an Airtable and React build where the user can keep track of his or her chores.  From the homepage, the user has the ability to view the current chore list, edit, and delete a chore.  The navigation bar will include a link to add a new chore, and another link to learn more about the creator of the website, Eileen Olivera.

## Wireframes

The wireframes below display the homepage with the chore list and description for ChoreBox in the desktop and mobile formats. The homepage contains the name of the website, a navigation bar with two clickable links; "Add A Chore", and "About".  When a user clicks on a chore, the homepage displays a container holding its description with the option to edit or delete the chore all together. The "Add a Chore" link route's to a new page within the website that contains an input form followed by the "Add Chore" button.  This will submit the new chore onto the homepage sidebar with the current chores.  The "About" link will have content about why the creator built the app.  The wireframe also contains a footer that will have clickable logos to the creator's GitHub and LinkedIn profiles. 

<img src = "Assets/Chores WireFrame.png">

## Component Hierarchy

<img src = "Assets/Component Hierarchy.png">

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

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

- Be a working, interactive React app, built using create react app.
- Utilize React Router, installed via NPM.
- Have at least six separate, rendered components.
- Implement an organized and understandable React file structure.
- Use functional and class React components appropriately.
- Apply Axios to go through data from Airtable, and GET/render that data in components.
- Implement Axios to POST/create new chore onto Airtable.
- Use Axios to PUT/update a chore and DELETE a chore to Airtable.

#### PostMVP

- Include points upon chore completion leading up to weekly allowance amount.
- Use third party API to generate random motivational quotes on homepage.

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|August 19| Prompt / Wireframes / Component Hierarchy / README | Incomplete
|August 20| Project Approval | Incomplete
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
| Add Nav., Form, & Search Bar | H | 1 hr| 1 hr | 1 hr |
| GET/render Airtable data | H | 3 hrs| 3 hrs | 3 hrs |
| POST/create new data on Airtable | H | 2 hr| 2 hr | 2 hr |
| POST & DELETE to Airtable | H | 2 hr| 2 hr | 2 min |
| Adding Flexbox/grid & Media Query | H | 2 hrs| 1 hr | 1 hr |
| Style with CSS | H | 2 hrs| 2 hrs | 2 hrs |
| Final Touches/Debug | H | 3.5 hrs| 2 hrs | 2 hrs |
| Total | H | 18.5 hrs| 19 hrs | 15 hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats: