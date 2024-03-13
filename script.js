let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let multiply = document.querySelector('.multiply');
let devide1 = document.querySelector('.devide1');
let result = document.querySelector('.result');
function plus12(){
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    result.value = Math.round(num1.value /1 + num2.value /1 ) /1 ;
   
}
plus.addEventListener('click',plus12)
function minus12(){
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let number = 0;
    number = num1.value - num2.value;
    result.value = number;
   
}
minus.addEventListener('click',minus12)
function multiply12(){
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let number = 0;
    number = num1.value * num2.value;
    result.value = number;
   
}
multiply.addEventListener('click',multiply12)
function devide12(){
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let number = 0;
    number = num1.value / num2.value;
    result.value = number;
   
}
devide1.addEventListener('click',devide12)
