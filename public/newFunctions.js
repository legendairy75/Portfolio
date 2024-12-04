
const addText = document.getElementById('addTextBtn');
const addLink = document.getElementById('addLinkBtn')
const addList = document.getElementById('addListBtn')
const fDiv = document.getElementById('fDiv');
const div = document.getElementById('div');

addText.addEventListener('click', function () {
    // console.log('text area added!!!');
    const nText = document.createElement('textarea');
    div.removeChild(addText)
    fDiv.appendChild(nText);
    nText.id = 'addText'
    nText.name = 'card[body]';
    nText.className = 'form-control'
    nText.placeholder = ('Enter new Text Here')
    nText.required = true
  })

addLink.addEventListener('click', function () {
    // console.log('link added!!!')
    const nLink = fDiv.appendChild(document.createElement('input'));
    nLink.type = 'url';
    nLink.id = 'addLink';
    nLink.name = 'card[link]';
    nLink.placeholder = ('example.com')
    const linkText = fDiv.appendChild(document.createElement('input'));
    linkText.id = 'linkText';
    linkText.name = 'card[linkT]'
    linkText.placeholder = 'linkText';
    div.removeChild(addLink)
  });

addList.addEventListener('click', function () {
    // console.log('List added!!!');
    const liDiv = document.createElement('div');
    fDiv.appendChild(liDiv);
    const nList = document.createElement('input');
    const nListB = document.createElement('button')
    div.removeChild(addList)
    liDiv.appendChild(nList);
    mForm.appendChild(nListB);
    nListB.textContent = ('Add Item')
    nListB.type = ('Button')
    nListB.className = 'btn'
    nList.id = 'addListM'
    nList.name = 'card[list]';
    nList.placeholder = ('Enter New List')
    nListB.addEventListener('click', function () {
      const addItem = document.createElement('input')
      liDiv.appendChild(addItem)
      addItem.placeholder = ('Enter New List')
      addItem.name = 'card[list]';
    })
  });

