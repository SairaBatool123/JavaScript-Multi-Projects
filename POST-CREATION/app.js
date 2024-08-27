//taking input from both input field to add placeholder
let input1 = document.getElementById('input1');
input1.placeholder = "Email"
let input2 = document.getElementById('input2');
input2.placeholder = "Password"

//sign in form hidden
function submitHidden() {
    let container = document.getElementById('container')
    container.style.display = "none"
}

// let newupload;
// photo.scr=newupload

function uploadimg() {
    var photo = document.getElementById('photo')
    let file = document.getElementById('file').value
    photo.src = file.src
}

//Dark Mode Effect
var modes = document.getElementById('light');
const body = document.querySelector('body');

modes.addEventListener('click', function () {
    this.classList.modes('bi-moon');
})



let inputName = document.getElementById('inputname');
inputName.placeholder = "Anonymous";
inputName.style.color = "black"; //after filling box
