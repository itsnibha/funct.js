// Functions in js
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let temp=5;
  console.log("The temp in celsius is",toCelsius(temp))

function avg(x,y){
    return (x+y)/2
  }
  let a=10;
  let b=0;
  let c=20;
  console.log("Avg of a and b is", avg(a,b))
  console.log("Avg of a and cis", avg(a,c))   
  console.log("Avg of b and c is", avg(b,c))