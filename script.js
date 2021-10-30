const add = (a, b) => (parseInt(a) + parseInt(b)).toString();
const subtract = (a, b) => (parseInt(a) - parseInt(b)).toString();
const multiply = (a, b) => (parseInt(a) * parseInt(b)).toString();
const divide = (a,b) => 
{
    if (b == 0)
    {
        alert("Error: You are trying to divide by 0");
        return a;
    }
    return (parseInt(a) / parseInt(b)).toString();
}

function callOperation(currNum, nextNum, op)
{
    switch(op)
    {
        case "+":
            return add(currNum, nextNum);
        case "-":
            return subtract(currNum, nextNum);
        case "*":
            return multiply(currNum, nextNum);
        case "/":
            return divide(currNum, nextNum);
    }
}

let clear = () => {
    mathDisplay.textContent = "";
    currNumberStr.textContent = "";
    currNum = "";
    nextNum = "";
    op = "";
}

const numpads = document.querySelectorAll(".numpad");
let mathDisplay = document.getElementById("mathDisplay");
let currNumberStr = document.getElementById("currNumber");
// if currNum is set to -1 to indicate it is empty by default (no number has been inputed)
let currNum = "";
let nextNum = "";
let op = "";

numpads.forEach(numpad => numpad.addEventListener("click", function(e)
{
    switch(numpad.textContent)
    {
        case "Clear":
            clear();
            break;
        case "Enter":
            if (currNum != "" && op != "" && nextNum != "")
            {
                let prevCurr = currNum;
                currNum = callOperation(currNum, nextNum, op);
                currNumberStr.textContent = currNum;
                mathDisplay.textContent = `${prevCurr} ${op} ${nextNum} = `;
                // clear op and nextnum
                op = "";
                nextNum = "";
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (currNum != "" && currNum != 0 && nextNum == "")
            {
                op = numpad.textContent;
                mathDisplay.textContent = `${currNum} ${op} ${nextNum}`;
            }
            // call the math operation if we already have both a currNum and a prev num
            if (nextNum != "")
            {
                currNum = callOperation(currNum, nextNum, op);
                currNumberStr.textContent = currNum;
                op = numpad.textContent;
                mathDisplay.textContent = `${currNum} ${op}`;
                // clear nextnum
                nextNum = "";
            }
            break;
        default:
            if (currNum == "" || currNum == 0)
                currNum = numpad.textContent;
            // if current number has already been set
            else if (currNum != "" && currNum != "0" && op != "" && nextNum == ""){
                nextNum = numpad.textContent; 
                mathDisplay.textContent = `${currNum} ${op} ${nextNum}`;
            }
            else if (nextNum != ""){
                nextNum += numpad.textContent;
                mathDisplay.textContent = `${currNum} ${op} ${nextNum}`;
            }
            else
                currNum += numpad.textContent;
            currNumberStr.textContent = currNum;
           
    }
}));