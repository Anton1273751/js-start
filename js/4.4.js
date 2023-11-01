// Методы объекта, "this"

// let user = {
//   userName: "Anton",
//   age: 33,
//   sayHi: function () {
//     alert("Hi");
//   },
// };

// console.log(user.sayHi());

// // сокращённая запись
// user = {
//   sayHi() { // то же самое, что и "sayHi: function(){...}"
//     alert("Привет");
//   }
// };

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" - это "текущий объект".
//     alert(this.name);
//   }

// };

// user.sayHi(); // John

const data = [
  { username: "Ivan", age: 48, gender: "male" },
  { username: "Danil", age: 29, gender: "male" },
  { username: "Oleg", age: 58, gender: "male" },
  { username: "Yuri", age: 32, gender: "male" },
  { username: "Alex", age: 38, gender: "male" },
  { username: "Isabella", age: 35, gender: "female" },
  { username: "Oksana", age: 26, gender: "female" },
  { username: "Igor", age: 24, gender: "male" },
  { username: "Vladislav", age: 22, gender: "male" },
  { username: "Valentina", age: 48, gender: "female" },
  { username: "Sofia", age: 13, gender: "female" },
  { username: "Danil", age: 80, gender: "male" },
  { username: "Vitaliy", age: 17, gender: "male" },
];

//Написать функцию getStr, которая принимает параметром объект!!!, и возвращает строку ввида - "Уважаемая(ый) username, тебе - age лет."

// getStr({ username: "Vitaliy", age: 17, gender: "male" }); // "Уважаемый Vitaliy, тебе - 17 лет."
// getStr({ username: "Sofia", age: 13, gender: "female" }); // "Уважаемая Sofia, тебе - 13 лет."

// function getStr(obj) {
//   return console.log(
//     `Уважаем${obj.gender === "male" ? "ый" : "ая"} ${obj.username}, тебе ${
//       obj.age
//     } лет`
//   );
// }

//С помощью метода forEach, пройтись по массиву data, и запустить для каждого элемента массива эту функцию, чтобы получить на выходе столько строк, сколько элементов в массиве.

// data.forEach(getStr)
// data.forEach(el => getStr(el))

//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."
//"Уважаемая(ый) username, тебе - age лет."

//Написать функцию findUser(name), которая будет искать объект в массиве data. Параметром принимает строку вида: "Danil" || "D". Функция проходит по массиву data, и возвращает МАСИИВ с объектами, у которых в ключе username, содержится строка из параметра функции. Регистер символов не учитывать!

// Пример:
// findUser('Danil') => [{ username: "Danil", age: 29, gender: "male" },{ username: "Danil", age: 80, gender: "male" }]
// findUser('dan') => [{ username: "Danil", age: 29, gender: "male" },{ username: "Danil", age: 80, gender: "male" }]
// findUser('la') => [{ username: "Isabella", age: 35, gender: "female" },{ username: "Vladislav", age: 22, gender: "male" }]
// findUser('SOFIA') => [{ username: "Sofia", age: 13, gender: "female" }]

// const findUser = (name) => {
//   return data.filter((elem) =>
//     elem.username.toLowerCase().includes(name.toLowerCase())
//   );
// };
// const findUser = (name) => {
//   return data.filter((elem) => {
//     const username = elem.username.toLowerCase()
  
//     return username.includes(name.toLowerCase())
//   });
// };
// const findUser = (name) => {
//   return data.filter(({username}) => username.toLowerCase().includes(name.toLowerCase()));
// };
// const findUser = (name) => {
//   return data.filter((el) => {
//     const { username } = el
//     const userLower = username.toLowerCase()
//     const nameLower = name.toLowerCase()

//     return userLower.includes(nameLower)
//   });
// };

// console.log(findUser("d"));
// console.log(findUser("SOF"));


// .some()
// .every()
// .sort()
// .reduce() **