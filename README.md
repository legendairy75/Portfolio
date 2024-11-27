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

#### The ```/new``` Rout

  the new card page is in a bit of dissaray, I coppied the renderd form from the edit page and pasted it into new.ejs, but afew things still must be done. **First** the items div must be removed and instead place the buttons to append items, **then** the functionality of those buttons must be emplamented **including list**.
If not the validator will throw an error for list not being an aray.
  Next I Never setup verification for /new so after the form is properly set up I will have to figure out how to connect the validator.

#### Adding Pictures

  After all  of that I will add elements to the form to alow files to be uploaded, I will then install the multer package and connect to it. After i will put in my cloudinary crudentials to connect to cloudinary & link cloudinary to mongo. Once that is done all i have to do is get the card to display the image & delete the image (from mongo & cloudinary).

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
