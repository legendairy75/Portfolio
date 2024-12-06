# Portfolio

## Update

- **Renamed** */card* to to */edit*
- Made **new rout** */edit/:id*
- Full **CRUD** capability
- **Added** bootstrap to all pages
- **List** can now be added to a card

## Next

- **Add**
  [x] ~~Authentication~~
  [x] ~~Authorization~~
  [x] ~~Error handling~~
  [o] Pictures

<!-- ### Authentication -->
<!--   I'm thinking  for authentication I will make a rout that will render a login page with the usual username & password, but to access it you would have to type in the rout in the address bar (minimizing the likely hood that someone else sees the page). -->

### Pictures

  I've uncommented the ```/new``` rout while I work out how to upload immages to mongo.

  Pictures are able to be uploaded to cloudinary and render on the /edit page. but when you add the picture functionality you get an error that says the map for the img array cannot be empty, the issue is thet the files information is not being passed in so the array is zero, Ive removed all of the code for adding and removing images out of purer frustration hoping that going back over the lectures nextweek and rebuilding will help.

## renovations

  This is a list of things that could use renovating

### Home page

  On the cards in the home page (and edit page) they all render  the link button weather you atach a link to it when creating it or not. So something must be done to only allow this button to show IF therre is a link attached to it

### edit page

  Same with the Home page, the link button must be fixed, apart from that I think that the creat new card button should be deactivated if you are already in the middle of creatingf a new card.

### edit ID

  This page eventualy needs to be turned into a js file that renders new information to a card on the edit page instead of going to a whole new page.

### error

errpr presintation should be fixed eventualy, like rerouting viewers to the home page if they try to go anywhaere they are not alowed or rendering a 404 page if the page they are looking fore does not exist.

### Routes

The routes could be refactored for a more organized look & the functionality can be moved to a different file
