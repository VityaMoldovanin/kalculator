function run(){
    let data = document.querySelector(".data");
    let rez = document.querySelector(".rez");
    let number = data.value;
    number = 16*Math.log(number) +31;
    
    number = Math.floor(number);
    rez.value = number;
}
let button = document.querySelector('.btn');
button.addEventListener('click', run);