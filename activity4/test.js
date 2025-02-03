const array0 = [1, 4, 9, 16];
// Pass a function to map
const map0 = array0.map(function(x) 
{return x * 3});
console.log(map0);


const numbers = [4, 9, 16, 25];
const map2 = numbers.map(Math.sqrt);
console.log(map2);


const array1 = [1, 4, 9, 16];
const map3 = array1.map(function(x) {
  return x * 2;
});
console.log(map3);


const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(function(celsius) {
  return (celsius * 9/5) + 32;
});
console.log(fahrenheitTemperatures);


const fruits = ["apple", "banana", "cherry", "date"];
const uppercaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercaseFruits);


const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 }
  ];
  const productNames = products.map(function(product) {
    return product.name;
  });
  console.log(productNames);

  const sentences = ["Hello World", "How are you?", "I am fine."];
const words = sentences.map(function(sentence) {
  return sentence.split(" ");
});
console.log(words);


const names = ["John", "Jane", "Bob", "Alice"];
const listItems = names.map(function(name) {
  return `<li>${name}</li>`;
});
console.log(listItems);


const wordss = ["apple", "banana", "cherry", "date"];
const lengths = wordss.map(function(word) {
  return word.length;
});
console.log(lengths);


const dates = [new Date("2022-01-01"), new Date("2022-02-02"), new Date("2022-03-03")];
const formattedDates = dates.map(function(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
});
console.log(formattedDates);


function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
  }
  
  const persons = [
    {firstname: "Malcom", lastname: "Reynolds"},
    {firstname: "Kaylee", lastname: "Frye"},
    {firstname: "Jayne", lastname: "Cobb"}
  ];
  
  const map1 = persons.map(getFullName);
  console.log(map1);
  