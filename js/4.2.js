// Копирование объектов и ссылки

// let user = { name: "John" };

// let admin = user; // копируется ссылка

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // новый пустой объект

// // давайте скопируем все свойства user в него
// for (let key in user) {
//   clone[key] = user[key];
// }

// // теперь clone это полностью независимый объект с тем же содержимым
// clone.name = "Pete"; // изменим в нём данные

// alert( user.name ); // все ещё John в первоначальном объекте