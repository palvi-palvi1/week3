const ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

const adults = ages.filter(checkAdult);
console.log("Adults:", adults);


const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const longWords = words.filter(function (word) {
  return word.length > 6;
});

console.log("Long words:", longWords);


function isBigEnough(value) {
    return value >= 10;
  }
  
  const filteredNumbers = [12, 5, 8, 130, 44].filter(isBigEnough);
  console.log("Filtered numbers:", filteredNumbers);


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers);


function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }
  
  const wordss = ['level', 'hello', 'radar', 'world', 'racecar'];
  
  const palindromes = wordss.filter(isPalindrome);
  console.log("Palindromes:", palindromes);


  const wordssix = ['apple', 'banana', 'orange', 'pineapple', 'grape'];

const filteredWords = wordssix.filter(function (word) {
  return word.includes('apple');
});

console.log("Words containing 'apple':", filteredWords);


const products = [
    { id: 1, name: 'Apple', price: 1.99 },
    { id: 2, name: 'Banana', price: 0.99 },
    { id: 3, name: 'Orange', price: 2.49 },
    { id: 4, name: 'Grape', price: 3.99 }
  ];
  
  const expensiveProducts = products.filter(function (product) {
    return product.price > 2.0;
  });
  
  console.log("Expensive products:", expensiveProducts);


  const values = [1, null, 2, undefined, 3, 4, null, 5, undefined];

const nonNullUndefinedValues = values.filter(function(value) {
  return value !== null && value !== undefined;
});

console.log("Non-null and non-undefined values:", nonNullUndefinedValues);


const numbersn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbersn = numbersn.filter(function(num) {
  return num % 2 === 0;
});

console.log("Even numbers:", evenNumbersn);
