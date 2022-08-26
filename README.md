# Movies frontend 🎬

Well well well if it isn't your first full-stack MERN application little ironhacker... 😏 Couldn't be more proud of you! 

![](homer.gif)

Anyway, let's get to work!

This app was created with `create-react-app`, and it already has everything installed, so you just need to run:

```bash
npm install
npm start
```

💡 Make sure your `movies rest-api` is finished and all the routes tested with Postman. The backend must be **running** for the frontend to work.

---

## Iteration 1: navigation 🛳

Complete the Navbar component with the following `NavLink`s:

- Home
- New
- Go back

> 🚧 **We don't need a link** for the movie detail view, because it's dynamic (it needs an ID) and we will click on the movie itself to see the details. The same happens with the edit view. 🚧

Whenever the user is changing the link, it should display the class `selected` (you already have it ready in the `App.css` file).

Remember to import the navbar in the `App.js` file.

---

## Iteration 2: Home 🏠

The `Home` view:

- When the view `Home` first renders, it should make a call to the API, to the endpoint that gets all the movies. **Make sure your backend is running for this to work**.
- It should save the data obtained into a state.
- It should display a list of Cards. Each Card should only display the image of the movie and the title, and the title should be a link to the detail (this route is created as *'/movie/:id'*).

> 💡 Use the Card component that you have in the folder /components for this iteration.

---

## Iteration 3: The movie page 🍿

The `Movie` view:

- Should read the ID that is passed to it via parameters, using the `useParams` hook. It is already imported.
- When it first renders, it should make a call to the API to retrieve information of that particular movie
- It should store the information in a state
- It should display the movie's information with all the details.
- It should have two buttons: 
1. One to **edit** the movie, that will be a link with the ID and it will redirect to the edit view.
2. One to **delete** the movie, that will have an `onClick` event that will fire a `handleDelete` event. When this button is clicked, the movie should be deleted on the database, and then the user should be redirected to the Home view ('/').

---

## Iteration 4: The create movie 🪅

The `New` view should:

- Have a state that will store the data of the new movie
- Have a form, with an input with each one of the fields of the movie.
- Have a `handleSubmit` event that will make a call to the API and create the new movie. Then, the user will be redirected to the movie's detail view.

---

## Iteration 5: Edit movie ✏️

The `Edit view` has all the previous elements together in one view (*final boss*).

- It should receive via params the ID of the movie we are editing 
> Note: this part comes form the Movie.jsx component. If you are not receiving the movie._id, the problem is there.
- You should capture this parameter via the `useParams` hook
- When the view first renders, it should make a call to the API to obtain the information of that particular movie (get single movie). This information should be stored into the state.
- The view should display a form with the information of the movie (obtained from the state).
- The view should have a `handleChange` function that will update the state when the user updates the information.
- The view should have a `handleSubmit` function that will send the new information (stored in the state) to the backend and will redirect the user to the movie's detail view.

💙 Happy codi.. I mean, *with much love*,

*Ale*


