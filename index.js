const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

function capTest(stringie) {
  const arr1 = stringie.split(" ");

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);

  }
  const str2 = arr1.join(" ");
  return str2; 
}; 

const titleCased = function() {
  const loopArr =  tutorials.map(capTest); 
  return loopArr
}