let displayBox = document.querySelector(".display");
let keyPad = document.querySelector(".keypad");

let operators = [".","+","-","*","/","%","="];


function filter(value){
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    if (current.length>=30) {
        return false;
    }
    for(i=0;i<displayBox.innerText.length;i++){
        if (displayBox.innerText[i]=="."&&value == ".") {
            return false;
        }  
    }
    if (current == "0" && value != ".") {
            deleteLeast();        
    }

    if (operators.includes(value) && operators.includes(lastChar)) {
      
            return false;
        
    }
    return true;
}

function showInDisplay(value) {
    if(filter(value)){
        return displayBox.innerText += value;
    }
    
}
function calc(){
    if (!operators.includes(displayBox.innerText[displayBox.innerText.length-1])) {
        displayBox.innerText = eval(displayBox.innerText);
    }
    
}
function clearAll() {
    displayBox.innerText = "0";
}
function deleteLeast() {
   let text = displayBox.innerText;
   
   if (text.length!=1) {
    displayBox.innerText = text.substring(0,text.length-1);
   }else{
    displayBox.innerText = "";
   }
}

keyPad.addEventListener("click",function(){
    if (displayBox.innerText.length>10) {
        displayBox.style.fontSize = 30+"px";
    }else if(displayBox.innerText.length>5){
        displayBox.style.fontSize = 45+"px";
    }
})