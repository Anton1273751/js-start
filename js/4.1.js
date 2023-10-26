//Объекты

// let user1 = new Object(); // синтаксис "конструктор объекта"
// const user = {
//   name: "Anton",
//   age: 33,
//   "likes birds": true, // имя свойства из нескольких слов должно быть в кавычках
// }; // синтаксис "литерал объекта"

// alert((user.age = 55));

// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// const user = {};
// user.name = "John";
// user.sername = "Smith";
// user.name = "Pete";
// delete user.name;

// let isEmpty = (obj) => {
//   for (el in obj) {
//     return false;
//   }
//   return true;
// };

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

//Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
let sumSalary = (obj) => {
  for (let n in obj) {
    sum += salaries[n];
  }
  return sum;
};

console.log(sumSalary(salaries));

//Умножаем все числовые свойства на 2

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// let multiplyNumeric = (obj) => {

//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// console.log(multiplyNumeric(menu));
