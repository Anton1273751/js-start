// ### Задача №1 🟢

// Напишите программу, в которой создаются три переменные a, b, c, на экран выводится их произведение. Значение переменных произвольные.

// let a, b, c;

// a = 43123;
// b = 23125;
// c = 252;

// alert(`Сумма 3 чисел равна: ${a + b + c} `);

// ### Задача №2 🟢

// С клавиатуры в отдельных строках вводятся целые числа a и b. Напишите программу, которая вычислит их сумму и выведет её на экран

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");
// alert(`Сумма двух чисел равна: ${a + b}`);

// ### Задача №3 🟢

// С клавиатуры вводится целое число a. Напишите программу, выводящую это число, увеличенное на 1.

// let a = +prompt("Введите целое число");
// alert(++a);

// ### Задача №4 🟢

// С клавиатуры вводятся два целых числа a и b. Напишите программу, которая вычислит и выведет на отдельных строках:

// 1. разность;
// 2. произведение;
// 3. сумму.

// let a = +prompt("Введите первое число");
// let b = +prompt("Введите второе число");

// alert(`Разность двух чисел равна: ${a - b}`)
// alert(`Произведение двух чисел равна: ${a * b}`);
// alert(`Сумма двух чисел равна: ${a + b}`);

// ### Задача №5🟢

// В данный момент часы показывают 23:26:05. Используя арифметические выражения, выведите на экран количество секунд, которое прошло с начала суток до данного момента.

// let a, b, c;

// a = 23 * 3600; //82800
// b = 26 * 60; //1560
// c = 5;

// alert(
//   `На данный момент часы показывают 23:26:05.C начала суток прошло ${
//     a + b + c
//   } секунд`
// );

// if else

// Задача №-1 🟢

// Дано целое число a. Требуется прибавить к нему 1, если оно является положительным, и не изменять его в противном случае.

// let a = +prompt("Введите число");

// if (a > 0) {
//   a++;
//   alert(`Теперь число равно: ${a}`);
// }
// if (a < 0) {
//   alert(`Число ${a} отрицательное`);
// }

// ### Задача №0🟢

// Дано целое число d. Требуется вывести строку – название d-го дня недели.

// let a = +prompt("Введите номер дня недели от 1 до 7");

// if (a == 1) {
//   alert("Понедельник");
// } else if (a == 2) {
//   alert("Вторник");
// } else if (a == 3) {
//   alert("Среда");
// } else if (a == 4) {
//   alert("Четверг");
// } else if (a == 5) {
//   alert("Пятница");
// } else if (a == 6) {
//   alert("Суббота");
// } else if (a == 7) {
//   alert("Восcресенье");
// } else alert("Вводите что-то другое");

// Вы смотрите на дерево. С клавиатуры вводится целое число:

// 0 – вы видите только дерево

// 1 – вы видите на ветке обезьяну

// let monkey = +prompt("Вы смотрите на дерево");

// if (monkey == 0) {
//   alert("Не хочу больше смотреть на дерево");
// } else if (monkey == 1) {
//   alert("Кажется, на ветке обезьяна");
//   alert("Не хочу больше смотреть на дерево");
// }

// ### Задача №2 🟢

// Дано целое число m, задающее номер месяца года. Выведите строку — название времени года, соответствующего данному месяцу.

// let month = +prompt("Введите номер месяца");

// if (month == 12 || month == 1 || month == 2) {
//   alert("Зима");
// } else if (month == 3 || month == 4 || month == 5) {
//   alert("Весна");
// } else if (month == 6 || month == 7 || month == 8) {
//   alert("Лето");
// } else if (month == 9 || month == 10 || month == 11) {
//   alert("Осень");
// } else alert("Такого месяца нет");

// ### Задача №3 🟢

// Дано целое число k. Выведите строку-описание оценки по пятибалльной шкале, соответствующей числу k. Если k не лежит в диапазоне от 1 до 5, то требуется вывести сообщение об ошибке.

// let ServiceRating = +prompt("Оцените нашу работу по пятибальной шкале");

// if (ServiceRating == 1) {
//   alert("Плохо");
// } else if (ServiceRating == 2) {
//   alert("Неудовлетворительно");
// } else if (ServiceRating == 3) {
//   alert("удовлетворительно");
// } else if (ServiceRating == 4) {
//   alert("хорошо");
// } else if (ServiceRating == 5) {
//   alert("отлично");
// } else alert("ошибка");

// ### Задача №4 🟢

// С клавиатуры вводится, сколько лет Игнат работает за компьютером.

// Если опыт работы за компьютером больше 10 лет, то Игнат "эксперт".

// Если от 4 (включительно) до 10 (включительно), то "уверенный пользователь".

// Если меньше или равен 3, то "любитель".

// Напечатайте на экран, какой статус пользователя соответствует навыку Игната.

// let experience = +prompt("Сколько лет вы работаете в компании?");

// if (experience > 10) {
//   alert("Вы эксперт и хорошо понимаете все тонкости рабочего процесса");
// } else if (experience >= 4 && experience <= 10) {
//   alert("Вы уверенный пользователь");
// } else if (experience <= 3) {
//   alert("Вы любитель,вам предстоит много всего узнать");
// } else alert("error");

// ### Задача №5 🟢

// Даны три числа a, b, c. Требуется возвести положительные числа в квадрат, а отрицательные оставить без изменений и вывести числа в том же порядке.

// **Формат входных данных**

// let a, b, c;

// a = +prompt("Введите число A");
// if (a > 0) {
//   a **= 2;
// } else if (a <= 0) {
//   a == a;
// }

// b = +prompt("Введите число B");
// if (b > 0) {
//   b **= 2;
// } else if (b <= 0) {
//   b == b;
// }

// c = +prompt("Введите число C");
// if (c > 0) {
//   c **= 2;
// } else if (c <= 0) {
//   c == c;
// }

// alert(`A равно ${a}, B равно ${b}, C равно ${c}`);

// ### Задача №7 🟠

// Отправь гуся, нарисованного с помощью console.log().

// console.log("░░░░░ЗАПУСКАЕМ░ПТИЧКУ░░░░░░░░░░░░");
// console.log("░░░░░░▄▀▀▀▄░░░░░░░░░░░░░░░░░░░");
// console.log("▄███▀░◐░░░▌░░░░░░░░░░░░░░░░░");
// console.log("░░░░▌░░░░░▐░░░░░░░░░░░░░░░░░░░");
// console.log("░░░░▐░░░░░▐░░░░░░░░░░░░░░░░░░░");
// console.log("░░░░▌░░░░░▐▄▄░░░░░░░░░░░░░░░░░");
// console.log("░░░░▌░░░░▄▀▒▒▀▀▀▀▄░░░░░░░░░░░░");
// console.log("░░░▐░░░░▐▒▒▒▒▒▒▒▒▀▀▄░░░░░░░░░░░");
// console.log("░░░▐░░░░▐▄▒▒▒▒▒▒▒▒▒▒▀▄░░░░░░░░░");
// console.log("░░░░▀▄░░░░▀▄▒▒▒▒▒▒▒▒▒▒▀▄░░░░░░░");
// console.log("░░░░░░▀▄▄▄▄▄█▄▄▄▄▄▄▄▄▄▄▄▀▄░░░░░");
// console.log("░░░░░░░░░░░▌▌░▌▌░░░░░░░░░░░░░░░");
// console.log("░░░░░░░░░░░▌▌░▌▌░░░░░░░░░░░░░░░");
// console.log("░░░░░░░░░░░▌▌░▌▌░░░░░░░░░░░░░░░");
// console.log("░░░░░░░░░░░▌▌░▌▌░░░░░░░░░░░░░░░");
// console.log("░░░░░░░░░▄▄▌▌▄▌▌░░░░░░░░░░░░░░░");

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
//   return `Уважаем${obj.gender === "male" ? "ый" : "ая"} ${obj.username}, тебе ${
//     obj.age
//   } лет`;
// }

// function showStrings(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     if (element.age <= 18) {
//       console.log(getStr(element));
//     }
//   }
// }

// showStrings(data);

// const arrOfSalaries = [
//   { name: "John", salary: 23000 },
//   { name: "Ivan", salary: 120000 },
//   { name: "Anton", salary: 50000 },
//   { name: "Danil", salary: 160000 },
// ];

// // // for (let el of arrOfSalaries) {
// // //   console.log(el);
// // // }

// function getSumSalary(arr) {
//   let sum = 0;
//   for (let el of arrOfSalaries) {
//     sum += el.salary;
//   }
//   return sum;
// }

// console.log(getSumSalary(arrOfSalaries));

// function getSumSalary(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].salary;
//   }
//   return sum;
// }

// console.log(getSumSalary(arrOfSalaries));

//ФУНКЦИИ

// Task 1
// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

// function squareOfTheNumber(num) {
//   return (num **= 2);
// }
// console.log(squareOfTheNumber(25));

// let squareOfTheNumber = (num) => num *= 2
// console.log(squareOfTheNumber(23));

// Task 2
// Сделайте функцию, которая возвращает сумму двух чисел.

// function getSum(num1,num2) {
//   return num1+num2
// }

// let getSum = (num1, num2) => num1 + num2;
// console.log(getSum(5125125,62241));

//// Task 3
// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

// function getNum(num1,num2,num3) {
//   return (num1-num2)/num3
// }

// let getNum = (num1, num2, num3) => (num1 - num2) / num3;
// console.log(getNum(12512521,500,87))

// Task 4
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function DaysOfTheWeek(num) {
//   switch (num) {
//     case 1:
//       return "Понедельник";

//     case 2:
//       return "Вторник";

//     case 3:
//       return "Среда";

//     case 4:
//       return "Четверг";

//     case 5:
//       return "Пятница";

//     case 6:
//       return "Суббота";

//     case 7:
//       return "Восскресенье";

//     default:
//       return "Введите число от 1 до 7";
//   }
// }

// console.log(DaysOfTheWeek(5));

// let daysOfTheWeek = (num) => {
//   switch (num) {
//     case 1:
//       return "Понедельник";

//     case 2:
//       return "Вторник";

//     case 3:
//       return "Среда";

//     case 4:
//       return "Четверг";

//     case 5:
//       return "Пятница";

//     case 6:
//       return "Суббота";

//     case 7:
//       return "Восскресенье";

//     default:
//       return "Введите число от 1 до 7";
//   }
// };
// console.log(daysOfTheWeek(6));

// Task 5

// // Сделайте функцию isNumberInRange, которая параметром принимает число
//  и проверяет, что оно больше нуля и меньше 10.
//  Если это так - пусть функция возвращает true, если не так - false.

// function isNumberInRange(num) {
//   if (num > 0 && num < 10) {
//     alert(true);
//   } else alert(false);
// }
// console.log(isNumberInRange(5));

// let isNumberInRange = (num) => {
//   if (num > 0 && num < 10) {
//     return true;
//   }else return false;
// }
// console.log(isNumberInRange(10));

// // Task 6
// // Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
// Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(num) {
//   if (num % 2 == 0) {
//     alert("Четное");
//   } else alert("Нечетное");
// }
// console.log(isEven(21));

// let isEven = (num) => {
//   if (num % 2 === 0) {
//     return "Четное";
//   } else return "Нечетное";
// };

// console.log(isEven(40));

// ***
// // Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
//  И так, пока сумма не станет однозначным числом(9 и менее).

// function getNum(num) {
//   let sum = num+num
//   if (sum > 9) {
//     alert("Складываем еще раз");
//   } else if (sum < 9) {
//     alert(`Сумма равна ${sum}`);
//   }
// }

// console.log(getNum(5))
