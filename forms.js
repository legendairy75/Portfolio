const formE = document.querySelector('#emailForm');
const inputE = document.querySelector('#emailInp');
formE.addEventListener('submit', function(e){
    e.preventDefault();
    const emailInp = (inputE.value);
    const newLI = document.createElement('LI');
    newLI.innerText = emailInp;
    console.log(newLI);
});