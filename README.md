# Blog App

This project was made to write and publish blogs. Published blogs can also be viewed

## Brief intro to the UI

In this project, the Home page will have a search bar follwed by two buttons, which will render CreateBlog(default) and BlogList Components.

BlogList shows all the available blogs, these can be searched via the search bar(SearchBox component)

CreateBlog shows input fields like title and content need to write a blog along with publish button which will automatically publish the blog to db.json

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `json-server --watch db.json --port 3002`

Launches the db.json which will act as a store to store all blogs in json format.


### `npm test -- --coverage`

Launches the tests for the components and displays the test coverage of components

### `npm run storybook`

Launches storybook.js in port 6006 to test components in the storybook sandbox