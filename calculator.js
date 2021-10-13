const add = function(a,b) {
  return a + b;
	
};



const subtract = function(a,b) {
  return a - b;
	
};

//function that goes into the array method reduce i.e. what will happen to the data in the array
const reducer = (total, next) => total + next;


const sum = function(nums) {
  const result = nums.reduce(reducer,0)
  return result;
	
};




const multiply = function(arr) {
  const product = arr.reduce((total, next)=>{
    return total * next; 
  }, 1);

  return product;

  

};

const power = function(a,b) {
  return a ** b;
	
};
// using recursion to calculate factorial.
const factorial = function(a) {
  if (a === 0){
    return 1;
  }

  else{
    return a * factorial(a - 1)
  }
};



                                                           

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
