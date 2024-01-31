
const display = document.getElementById('textbox');

function append(input){
    display.value += input;
}

function result(){
    try{
    display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}
function jap(){
    display.value = '';
}
function bye(){
    display.value = "Turned Off"
}