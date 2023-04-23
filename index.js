document.querySelector("a.ham-icon").addEventListener("click", function(event){
  document.getElementById("sideNavigation").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
});
document.querySelector("a.close-btn").addEventListener("click", function(event){
  document.getElementById("sideNavigation").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
});


let clickCount = 0;
let screen1 = document.querySelector('.screen-1');
let screen2 = document.querySelector('.screen-2');
let convert = document.querySelector('.convert');
let swap = document.querySelector('.swap');


convert.addEventListener('click', function(e) {
  
  let input = document.getElementById('number1').value;
  

  if (clickCount  % 2 === 0) {
    function multiply(number) {
      return (number - 32) * 5/9;
    };
  } else {
    function multiply(number) {
       return number * (9/5) + 32; 
    };
}

multiply(input);
screen2.value += multiply(input)

if (multiply(input)) {
  screen2.value = "";
  screen2.value += multiply(input);
} 

if (input === "") {
  screen2.value = "";
}

});


swap.addEventListener('click', function(e) {
  screen1.value = "";
  screen2.value = "";
  clickCount++;
  
  
  if (clickCount % 2 === 0) {
    document.getElementById('reverse1').innerHTML = "Enter the temperature in fahrenheit below to get value converted to celsius:";
   document.getElementById('reverse2').innerHTML = " degrees fahrenheit  :";
   document.getElementById('reverse3').innerHTML = " results in degrees celsius:";

  } else {
   document.getElementById('reverse1').innerHTML = "Enter the temperature in celsius below to get value converted to fahrenheit:";
   document.getElementById('reverse2').innerHTML = " degrees celsius :";
   document.getElementById('reverse3').innerHTML = " results in degrees fahrenheit:";
  }

 
 });


       
  
    


