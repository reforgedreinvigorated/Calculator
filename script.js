const add = (a, b) => (parseInt(a) + parseInt(b)).toString();
const subtract = (a, b) => (parseInt(a) - parseInt(b)).toString();
const multiply = (a, b) => (parseInt(a) * parseInt(b)).toString();
const divide = (a, b) => (parseInt(a) / parseInt(b)).toString();


const numpads = document.querySelectorAll(".numpad");
let mathDisplay = document.getElementById("mathDisplay");
let currNumberStr = document.getElementById("currNumber");
// if currNum is set to -1 to indicate it is empty by default (no number has been inputed)
let currNum = -1;

numpads.forEach(numpad => numpad.addEventListener("click", function(e)
{
    console.log(numpad.textContent);
}));