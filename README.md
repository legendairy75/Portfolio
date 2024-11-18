# Portfolio
The newer version of my website
Go to the **databassing** branch for more up to data code

## New Card
curintly to get to the new card feature you must enter the '/card' rout, after that you must click on the 'add card' link at the bottom of the page. This will take you to the new card form.
The way I am currently trying to write the form is for there to be a box to enter the title of the card and a drop down menu that has a list of things to add to the card. When you click on an item in the list it should append that item to the web page.
current todo:
1. [] figure out how to append new parts to a form
2. [] use the modified form to make a coustome card
---
I also want to figure out if I can make a new card by writing the cards html within the webpage.
### Divs
Deviding into dives is bugged

# Problems
~~when creating a list the 'ad list' button being inside the form, submits the form~~
~~* how to stop button in form from submitting form~~
## restructuring
### new.js
the **functions** in new.js need to be **removed** and added to **external file** ( minimising code in the file itself )
I have **already tried** this with text.js in the models.edit folder exporting it to app.js and passing it throught to new.js but **console returns an error** `Document not defined`. this has something to do with line 2 of text.js
