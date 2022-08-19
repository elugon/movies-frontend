# Movies frontend 🎬

Well well well if it isn't your first full-stack MERN application little ironhacker... 😏 Couldn't be more proud of you! 

![](homer.gif)

Anyway, let's get to work!

This app was created with `create-react-app`, and it already has everything installed, so you just need to run:

```bash
npm install
npm start
```

## Iteration 1: navigation 🛳

Create a navbar with the following `NavLink`s:

- Home
- New
- Go back

> 🚧 **We don't need a link** for the movie detail view, because it's dynamic (it needs an ID) and we will click on the movie itself to see the details. The same happens with the edit view. 🚧

Whenever the user is changing the link, it should display the class `selected` (you already have it ready in the `App.css` file).

Remember to import it in the `App.js` file.

---

## Iteration 2: Home 🏠

The `Home` view:

- When the view `Home` first renders, it should make a call to the API, to the endpoint that gets all the movies. **Make sure your backend is running for this to work**.
- It should save the data into a state.
- It should display a list of Cards. Each Card should only display the image of the movie and the title, and the title should be a link to the detail ('/movie/id').

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
- Have a `onSubmit` event that will make a call to the API and create the new movie. Then, the user will be redirected to the movie's detail view.

---

## BONUS: Edit movie? 🧐

Try to figure out the Edit page to be the master full-stack super-programmer of Excalibur. 

Think about the process as we did on module 2: it was a view that had a form, with the information already filled, but then when the user changed it, it sent the new information to the database and the user was redirected to the detail's view again. You know how to do each one of these steps, you've just never done them together.

Happy codi.. I mean, *with much love*,

*Ale*


