// TODO: finish making Pic link

const button = document.getElementById('addCard')
const mcard = document.getElementById('mcard')
const links = document.getElementById('links')

button.addEventListener('click', function() {
  //console.log('button was clicked!!!')

  const div = mcard.appendChild(document.createElement('div'));
  div.className = ('card container-fluid');

  //const divH = div.appendChild(document.createElement('div'));
  //divH.className = ('card container-fluid'); 

  // const divB = div.appendChild(document.createElement('div'));
  //divB.className = ('card container-fluid');

  //const divBP = divB.appendChild(document.createElement('div'));
  //divBP.className = ('card container-fluid');

  const mForm = div.appendChild(document.createElement('form'));
  mForm.id = 'mForm';
  mForm.className = 'form-inline'
  mForm.action = '/cards';
  mForm.method = 'POST';

  const cardHead = mForm.appendChild(document.createElement('input'));
  cardHead.placeholder = ('Head')
  cardHead.id = 'title';
  cardHead.className = 'form-control'
  cardHead.name = 'card[title]'
  
  const fDiv = mForm.appendChild(document.createElement('div'));
  fDiv.className = ('card container-fluid'); 

  const addLink = div.appendChild(document.createElement('button'));
  addLink.textContent = ('Add Link');
  addLink.className = 'btn'

  const addText = div.appendChild(document.createElement('button'));
  addText.textContent = ('Add Text');
  addText.id = 'addTextBtn';
  addText.className = 'btn'

  const addList = div.appendChild(document.createElement('button'));
  addList.textContent = ('Add List');
  addList.className = 'btn'

  const addForm = div.appendChild(document.createElement('button'));
  addForm.textContent = ('Add Form');
  addForm.className = 'btn'

  const addPic = div.appendChild(document.createElement('button'));
  addPic.textContent = ('Add Picture');
  addPic.className = 'btn'

  const createCard = mForm.appendChild(document.createElement('button'));
  createCard.innerHTML = ('Create Card!')
  createCard.className = 'btn btn-primary'
     
  addLink.addEventListener('click', function () {
    console.log('link added!!!')
    const nLink = mForm.appendChild(document.createElement('input'));
    nLink.type = 'url';
    nLink.id = 'addLink';
    nLink.name = 'card[link]';
    nLink.placeholder = ('example.com')
    const linkText = mForm.appendChild(document.createElement('input'));
    linkText.id = 'linkText';
    linkText.name = 'card[linkT]'
    linkText.placeholder = 'linkText';
    div.removeChild(addLink)
  });

  addText.addEventListener('click', function () {
    console.log('text area added!!!');
    const nText = document.createElement('textarea');
    div.removeChild(addText)
    fDiv.appendChild(nText);
    nText.id = 'addText'
    nText.name = 'card[body]';
    nText.className = 'form-control'
    nText.placeholder = ('Enter new Text Here')
  })

  // TODO: turn addList into an array of inputs instead of a text box
  addList.addEventListener('click', function () {
    console.log('List added!!!');
    const liDiv = document.createElement('div');
    fDiv.appendChild(liDiv);
    const nList = document.createElement('input');
    const nListB = document.createElement('button')
    div.removeChild(addList)
    liDiv.appendChild(nList);
    mForm.appendChild(nListB);
    nListB.textContent = ('Add Item')
    nListB.type = ('Button')
    nList.id = 'addListM'
    nList.name = 'card[list]';
    nList.placeholder = ('Enter New List')
    nListB.addEventListener('click', function () {
      const addItem = document.createElement('input')
      liDiv.appendChild(addItem)
      addItem.placeholder = ('Enter New List')
    })
  })

  addForm.addEventListener('click', function () {
    console.log('Form added!!!')
    const nForm = document.createElement('input');
    div.removeChild(addForm)
    mForm.appendChild(nForm);
    nForm.placeholder = ('Enter new Form')
  });
 // const buttonE = document.getElementById('editButt')

  //button.addEventListener('click', function() {

  //  console.log('CARD IN EDIT MODE!!!')

  //})
})
