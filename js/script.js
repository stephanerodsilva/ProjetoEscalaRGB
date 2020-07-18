var rangeRed = document.querySelector('#range_red');
var rangeGreen = document.querySelector('#range_green');
var rangeBlue = document.querySelector('#range_blue');
var inputRed = document.querySelector('#input_red');
var inputGreen = document.querySelector('#input_green');
var inputBlue = document.querySelector('#input_blue');

window.addEventListener('load',start); //quando a página carregar executa a função start

function start()  {
    document.querySelector('#input_red').disabled = true;
    document.querySelector('#input_green').disabled = true;
    document.querySelector('#input_blue').disabled = true;
    const inputs = document.querySelectorAll('input')
    inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => { 
        moveRanges();
    })
  })
}

function moveRanges(){      
    inputRed.value = rangeRed.value;
    inputGreen.value = rangeGreen.value;
    inputBlue.value = rangeBlue.value;
    changeColor()
}

function changeColor()
{
    function rgb(r, g, b){
        return `rgb(${r}, ${g}, ${b})`
    }
    var divSquar = document.getElementById('squar');  
    divSquar.style.backgroundColor = rgb(inputRed.value,inputGreen.value,inputBlue.value);
 
}