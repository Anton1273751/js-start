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

// const data = [
//   { username: "Ivan", age: 48, gender: "male" },
//   { username: "Danil", age: 29, gender: "male" },
//   { username: "Oleg", age: 58, gender: "male" },
//   { username: "Yuri", age: 32, gender: "male" },
//   { username: "Alex", age: 38, gender: "male" },
//   { username: "Isabella", age: 35, gender: "female" },
//   { username: "Oksana", age: 26, gender: "female" },
//   { username: "Igor", age: 24, gender: "male" },
//   { username: "Vladislav", age: 22, gender: "male" },
//   { username: "Valentina", age: 48, gender: "female" },
//   { username: "Sofia", age: 13, gender: "female" },
//   { username: "Danil", age: 80, gender: "male" },
//   { username: "Vitaliy", age: 17, gender: "male" },
// ];

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

// let squareOfTheNumber = (num) => num **2
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

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// // 1. Создайте массив с элементами 'a', 'b' и 'c'.
// Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.

// let arr = ["a", "b", "c"];

// // alert(arr);

// console.log(arr);

// 2. Cоздайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

// let arr = ["a", "b", "c"];

// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// 3. Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'.
// Выведите с его помощью на экран строку 'a+b+c+d'.

// let array = ["a", "b", "c", "d"];

// alert(array.join('+'))

// 4. Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

// let getArraySum = () => {
//   let sum = 0;
//   for (i of arr) {
//     sum += i;
//   }
//   return sum
// };

// console.log(getArraySum());

// 5. Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
//  Результаты сложите, присвойте переменной result.Выведите на экран значение этой переменной.

// let arr = [2, 5, 3, 9];

// let getArrayMultipliCation = () => {
//   let result = 1;
//   for (n of arr) {
//     result *= n;
//   }
//   return result;
// };
// console.log(getArrayMultipliCation());

// 6. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// let arr = [1, 23, 4, 346, 125, 46, 125, 125, 1236, 125, 6346, 125]

// console.log(arr.length);

// 7. Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.

// let arr = [1, 23, 4, 346, 125, 46, 125, 125, 1236, 125, 6346, 125];

// console.log(arr.splice(-1));

// 8. Создайте массив с элементами 'a', 'b', 'c'.
// Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// let arr = ["a", "b", "c"];

// arr.splice(0, 3, 1, -2, -3);

// console.log(arr);

// 9. Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.

// let arr = [25, 20, 4, 7, 265];

// let getSumInArray = (arr) => {
//   for (index = 0; index < arr.length; index++) {
//     arr[index] += 3;
//   }
//   return arr;
// };

// console.log(getSumInArray(arr));

// console.log(getSumInArray(arr));

// 10. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// let array = [2, 5, 12, 57, 23, 68, 18];

// let getArray = (array) => {
//   for (index = 0; index < array.length; index++) {
//     array[index]++;
//   }
//   return array;
// };

// console.log(getArray(array));

//  Дано некоторое число:
// 12345

// let num = 12345;

// let str = num.toString();

// let arr = str.split("");

// const getsum = (arr) => {
//   let sum = 0;

//   for (let index = 0; index < arr.length; index++) {
//     sum += +arr[index];
//   }
//   return sum;
// };

// console.log(getsum(arr));

//Заполните массив целыми числами от 1 до 10.

// const arr = [];

// for (let index = 1; index <= 10; index++) {
//   arr.push(index);
// }

// console.log(arr);

// Заполните массив четными числами из промежутка от 1 до 100.

// const arr = [];

// for (let index = 1; index <= 100; index++) {
//   if (index % 2 === 0) {
//     arr.push(index);
//   }
// }

// console.log(arr);

// Округлите эти дроби до одного знака в дробной части.

// const arr = [1.456, 2.155, 3.56, 4.1, 5.34];

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index].toFixed(1));
// }

// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// const fruits = ["apple", "banana", "http://grapes", "mango", "http://orange"];

// // console.log(fruits[2].substring(0, 7));
// const arrFilter = (arr) => {
//   return arr.filter((elem) => elem.substring(0, 7) === "http://");
// };

// console.log(arrFilter(fruits));

// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html. ??????

// const fruits = ["apple", "bananahtml.", "grapes", "mangohtml.", "orange"];

// console.log(fruits[1].substring(fruits[1].length - 5));

// const arrFilter = (arr) => {
//   return arr.filter((elem) => elem.substring(elem.length - 5) === "html");
// };

// console.log(arrFilter(fruits));

// const num = [200, 100, 50, 40, 700, 1200];

// console.log(num.map((elem) => (elem * 10) / 100 + elem));

// Заполните массив случайными числами из промежутка от 1 до 100.

// const arr = [];

// // for (let index = 1; index <= 100; index++) {
// //   arr.push(Math.round(Math.random() * 100));
// // }

// // console.log(arr);

// function sliceIntoChunks(arr, chunkSize) {
//   const res = [];
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     res.push(chunk);
//   }
//   return res;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(sliceIntoChunks(arr, 2));

// Вам будет предоставлено слово.Ваша задача — вернуть средний символ слова.
//  Если длина слова нечетная, верните средний символ.Если длина слова четная, верните 2 средних символа. ????????

// const str = "test";

// // console.log(str.substring(1, str.length / 2 + 1));

// console.log(str.substr(str.length - 1 / 2), 2 - (str.length % 2));

// // const getMiddle = (str) => {
// //   return str.substr((str.length - 1) / 2, 2 - (str.length % 2));
// // };

// // console.log(getMiddle(str));

// const arr = [1, 2, -3, -4, 5];

// // const invert = (arr) => {
// //   return arr.map((elem) => (elem > 0 ? elem * -1 : elem * -1));
// // };

// const invert = (array) => array.map((num) => -num);
// console.log(invert(arr));

// const num = 50;

// const numberToString = (num) => {
//   return num.toString();
// };

// console.log(typeof(numberToString(num)));

// Вам нужно удвоить целое число и вернуть его.

// const doubleInteger = (i) => {
//   return i * 2;
// };

// console.log(doubleInteger(num));

// Банкоматы допускают использование 4- или 6-значных PIN-кодов, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

// Если функции передана действительная строка PIN-кода, верните true, иначе верните false.?????

// const pin = "873676".toUpperCase;
// const num = +pin;

// //   console.log(num.toString().length);
// const validatePIN = (pin) => {
//     const num = +pin;
//   if (num===NaN) {

//   }

//   if (num.toString().length === 4 || num.toString().length === 6) {
//     return true;
//   }
//   if (num.toString() < 0) {
//     return false;
//   }
// };

// console.log(validatePIN(pin));

// const str = 'jlfsd';
// const makeUpperCase = (str) => {
//   return str.toUpperCase();
// };

// console.log(makeUpperCase(str));
// const arr = [1, 2, 3, 4];
// let sum = 0;
// for (let index = 0; index < arr.length; index++) {
//   sum *= arr[index];
// }

// const grow = (arr) => {
//   let result = 1;
//   for (let index = 0; index < arr.length; index++) {
//    console.log((result *= arr[index]));
//   }
//   return result;
// };
// console.log(grow(arr));

// const grow = (x) => x.reduce((a, b) => a * b);

// const a = "xyaabbbccccdefww";
// const b = "xxxxyyyyabklmopq";

// const longest = (a, b) => {
//   const arr = a.concat(b).split("").sort();
//   const c = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });
//   return c.join("");
// };

// console.log(longest(a, b));

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");// альтернатива

// function longest(s1, s2) {
//   let whole = "";
//   let f = "";
//   if (s1.includes("a")) {
//     whole += "a";
//   }
//   if (s1.includes("b")) {
//     whole += "b";
//   }
//   if (s1.includes("c")) {
//     whole += "c";
//   }
//   if (s1.includes("d")) {
//     whole += "d";
//   }
//   if (s1.includes("e")) {
//     whole += "e";
//   }
//   if (s1.includes("f")) {
//     whole += "f";
//   }
//   if (s1.includes("g")) {
//     whole += "g";
//   }
//   if (s1.includes("h")) {
//     whole += "h";
//   }
//   if (s1.includes("i")) {
//     whole += "i";
//   }
//   if (s1.includes("j")) {
//     whole += "j";
//   }
//   if (s1.includes("k")) {
//     whole += "k";
//   }
//   if (s1.includes("l")) {
//     whole += "l";
//   }
//   if (s1.includes("m")) {
//     whole += "m";
//   }
//   if (s1.includes("n")) {
//     whole += "n";
//   }
//   if (s1.includes("o")) {
//     whole += "o";
//   }
//   if (s1.includes("p")) {
//     whole += "p";
//   }
//   if (s1.includes("q")) {
//     whole += "q";
//   }
//   if (s1.includes("r")) {
//     whole += "r";
//   }
//   if (s1.includes("s")) {
//     whole += "s";
//   }
//   if (s1.includes("t")) {
//     whole += "t";
//   }
//   if (s1.includes("u")) {
//     whole += "u";
//   }
//   if (s1.includes("v")) {
//     whole += "v";
//   }
//   if (s1.includes("w")) {
//     whole += "w";
//   }
//   if (s1.includes("x")) {
//     whole += "x";
//   }
//   if (s1.includes("y")) {
//     whole += "y";
//   }
//   if (s1.includes("z")) {
//     whole += "z";
//   }

//   if (s2.includes("a")) {
//     whole += "a";
//   }
//   if (s2.includes("b")) {
//     whole += "b";
//   }
//   if (s2.includes("c")) {
//     whole += "c";
//   }
//   if (s2.includes("d")) {
//     whole += "d";
//   }
//   if (s2.includes("e")) {
//     whole += "e";
//   }
//   if (s2.includes("f")) {
//     whole += "f";
//   }
//   if (s2.includes("g")) {
//     whole += "g";
//   }
//   if (s2.includes("h")) {
//     whole += "h";
//   }
//   if (s2.includes("i")) {
//     whole += "i";
//   }
//   if (s2.includes("j")) {
//     whole += "j";
//   }
//   if (s2.includes("k")) {
//     whole += "k";
//   }
//   if (s2.includes("l")) {
//     whole += "l";
//   }
//   if (s2.includes("m")) {
//     whole += "m";
//   }
//   if (s2.includes("n")) {
//     whole += "n";
//   }
//   if (s2.includes("o")) {
//     whole += "o";
//   }
//   if (s2.includes("p")) {
//     whole += "p";
//   }
//   if (s2.includes("q")) {
//     whole += "q";
//   }
//   if (s2.includes("r")) {
//     whole += "r";
//   }
//   if (s2.includes("s")) {
//     whole += "s";
//   }
//   if (s2.includes("t")) {
//     whole += "t";
//   }
//   if (s2.includes("u")) {
//     whole += "u";
//   }
//   if (s2.includes("v")) {
//     whole += "v";
//   }
//   if (s2.includes("w")) {
//     whole += "w";
//   }
//   if (s2.includes("x")) {
//     whole += "x";
//   }
//   if (s2.includes("y")) {
//     whole += "y";
//   }
//   if (s2.includes("z")) {
//     whole += "z";
//   }

//   if (whole.includes("a")) {
//     f += "a";
//   }
//   if (whole.includes("b")) {
//     f += "b";
//   }
//   if (whole.includes("c")) {
//     f += "c";
//   }
//   if (whole.includes("d")) {
//     f += "d";
//   }
//   if (whole.includes("e")) {
//     f += "e";
//   }
//   if (whole.includes("f")) {
//     f += "f";
//   }
//   if (whole.includes("g")) {
//     f += "g";
//   }
//   if (whole.includes("h")) {
//     f += "h";
//   }
//   if (whole.includes("i")) {
//     f += "i";
//   }
//   if (whole.includes("j")) {
//     f += "j";
//   }
//   if (whole.includes("k")) {
//     f += "k";
//   }
//   if (whole.includes("l")) {
//     f += "l";
//   }
//   if (whole.includes("m")) {
//     f += "m";
//   }
//   if (whole.includes("n")) {
//     f += "n";
//   }
//   if (whole.includes("o")) {
//     f += "o";
//   }
//   if (whole.includes("p")) {
//     f += "p";
//   }
//   if (whole.includes("q")) {
//     f += "q";
//   }
//   if (whole.includes("r")) {
//     f += "r";
//   }
//   if (whole.includes("s")) {
//     f += "s";
//   }
//   if (whole.includes("t")) {
//     f += "t";
//   }
//   if (whole.includes("u")) {
//     f += "u";
//   }
//   if (whole.includes("v")) {
//     f += "v";
//   }
//   if (whole.includes("w")) {
//     f += "w";
//   }
//   if (whole.includes("x")) {
//     f += "x";
//   }
//   if (whole.includes("y")) {
//     f += "y";
//   }
//   if (whole.includes("z")) {
//     f += "z";
//   }
//   return f;
// }

// const arr = [36, 7, 57, 12, 7, 9, 342, 23, 89];

// const bublesort = (arr) => {
//   for (let index = 0; index < arr.length; index++) {
//     for (let index = 0; index < arr.length - 1 - index; index++) {
//       if (arr[index] > arr[index + 1]) {
//         const tmp = arr[index];
//         arr[index] = arr[index + 1];
//         arr[index + 1] = tmp;
//       }
//     }
//   }
//   console.log(arr);
// };

// bublesort(arr);

// const str = "This is an example!";

// const reverseWords = (str) => {
//   const arr = str.split(" ");
//   return arr.map((elem) => elem.split("").reverse().join("")).join(" ");
// };

// console.log(reverseWords(str));

// const arr = ["a", "b", "c"];

// const number = (array) => {
//   return array.map((elem, index) => `${index + 1}: ` + elem);
// };

// console.log(number(arr));

// const n = 11;

// const testEven = (n) => (n % 2 === 0 ? true : false);

// console.log(testEven(n));

// const str = "!!!sdi!!!fsdf!!!";

// const removeExclamationMarks = (s) => s.replace(/!/g, ""); //короткий пример

// console.log(removeExclamationMarks(str));

// const removeExclamationMarks = (str) => {
//   return str
//     .split("")
//     .filter((elem) => elem != "!")
//     .join("");
// };

// console.log(removeExclamationMarks(str));

// const arr = [
//   ("english", "Welcome"),
//   ("czech", "Vitejte"),
//   ("danish", "Velkomst"),
//   ("dutch", "Welkom"),
//   ("estonian", "Tere tulemast"),
//   ("finnish", "Tervetuloa"),
//   ("flemish", "Welgekomen"),
//   ("french", "Bienvenue"),
//   ("german", "Willkommen"),
//   ("irish", "Failte"),
//   ("italian", "Benvenuto"),
//   ("latvian", "Gaidits"),
//   ("lithuanian", "Laukiamas"),
//   ("polish", "Witamy"),
//   ("spanish", "Bienvenido"),
//   ("swedish", "Valkommen"),
//   ("welsh", "Croeso"),
// ];

// // console.log(arr[4]);

// const greet = (str) => {
//   switch (str) {
//     case "english":
//       return "Welcome";
//     case "czech":
//       return "Vitejte";
//     case "danish":
//       return "Velkomst";
//     case "dutch":
//       return "Welkom";
//     case "english":
//       return "Welcome";
//     case "estonian":
//       return "Tere tulemast";
//     case "finnish":
//       return "Tervetuloa";
//     case "flemish":
//       return "Welgekomen";
//     case "french":
//       return "Bienvenue";
//     case "german":
//       return "Willkommen";
//     case "irish":
//       return "Failte";
//     case "italian":
//       return "Benvenuto";
//     case "lithuanian":
//       return "Laukiamas";
//     case "polish":
//       return "Witamy";
//     case "spanish":
//       return "Bienvenido";
//     case "swedish":
//       return "Valkommen";
//     case "welsh":
//       return "Croeso";
//     case "latvian":
//       return "Gaidits";
//     default:
//       return "Welcome";
//   }
// };
// console.log(greet("lithuanian"));

// function greet(language) {
//   const greeting = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso",
//   };

//   return greeting[language] ?? greeting.english;
// }

// Your order, please

// // Ваша задача — отсортировать заданную строку.
// Каждое слово в строке будет содержать одно число.Это число обозначает позицию, которую слово должно занимать в результате.

// // Примечание. Числа могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).

// // Если входная строка пуста, верните пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.

// const str = "is2 Thi1s T4est 3a";

// console.log(str.split("/").)

// const arr = [5, 8, 6, 3, 4, 7];

// const sortArray = (arr) => {
//   const odds = arr.filter((x) => x % 2).sort((a, b) => a - b);

//   return arr.map((x) => (x % 2 ? odds.shift() : x));
// };

// console.log(sortArray(arr));

// const str = "CfgjdiHlkB.....$";

// const arr = str.split("")
// const res = []

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i].toUpperCase()) {
//     res.push(i)
//   }
// }

// console.log(res);

const recipties = [
  {
    name: "Pelmeni (Meat dumplings)",
    ingridiensts: [
      "3,5 glasses of flour",
      "5 eggs",
      "2 teaspoons of salt",
      "pepper",
      "1 kg of meat",
      "500g of onions",
    ],
  },
  {
    name: "Apple crumble",
    ingridiensts: [
      "3 big apples",
      "300 g of flour",
      "100 g of sugar",
      "200 g of butter",
      "a bit of cream",
      "water",
    ],
  },
  {
    name: "Sandwiches",
    ingridiensts: [
      "wheat French bread or sliced",
      "liver (300 grams)",
      "mushrooms (200 grams)",
      "butter (100 grams)",
      "vanilla (4 grams)",
      "baking powder (2 teaspoons)",
      "vegetable oil for frying",
    ],
  },
];

// recipties.forEach((elem) => {
//   const newH3 = document.createElement("h3");
//   newH3.className = "resiptie__title";
//   newH3.textContent = el.name;
//   document.body.append(newH3);
//   const newUl = document.createElement("ul");
//   newH3.append(newUl);
//   const newli = document.createElement("li");
//   newli.textContent = elem.ingridiensts;
//   newUl.className = "resiptie__list";
//   newUl.append(newli);
// });

// function createCard({ name, ingridiensts }) {
//   const cardNode = document.createElement("div");
//   const cardTitleNode = document.createElement("h3");
//   const cardListNode = document.createElement("ul");

//   cardTitleNode.className = "resiptie__title";
//   cardListNode.className = "resiptie__list";

//   cardTitleNode.textContent = name;

//   ingridiensts.forEach((ingridient) => {
//     const cardliNode = document.createElement("li");
//     cardliNode.textContent = ingridient;
//     cardListNode.append(cardliNode);
//   });

//   cardNode.append(cardTitleNode, cardListNode);

//   return cardNode;
// }

// function renderRecipies(arr) {
//   arr.forEach((recip) => {
//     const card = createCard(recip);
//     document.body.append(card);
//   });
// }

// renderRecipies(recipties);

// const articles = [
//   {
//     title: "Заголовок статьи 1",
//     date: "22-01-2024",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis enim magnam laboriosam alias magni dicta cumque nulla voluptatibus! Sunt voluptas nobis error, amet molestias tempora veniam optio dignissimos quia",
//   },
//   {
//     title: "Заголовок статьи 2",
//     date: "20-11-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis enim magnam laboriosam alias magni dicta cumque nulla voluptatibus! Sunt voluptas nobis error, amet molestias tempora veniam optio dignissimos quia",
//   },
//   {
//     title: "Заголовок статьи 3",
//     date: "02-05-2019",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis enim magnam laboriosam alias magni dicta cumque nulla voluptatibus! Sunt voluptas nobis error, amet molestias tempora veniam optio dignissimos quia",
//   },
//   {
//     title: "Заголовок статьи 4",
//     date: "22-01-2001",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis enim magnam laboriosam alias magni dicta cumque nulla voluptatibus! Sunt voluptas nobis error, amet molestias tempora veniam optio dignissimos quia",
//   },
// ];

// const createCard = ({ title, date, description }) => {
//   const cardNode = document.createElement("div");

//   const cardTitleNode = document.createElement("h3");
//   const cardDateNode = document.createElement("time");
//   const cardTextNode = document.createElement("p");
//   cardTitleNode.textContent = title;
//   cardDateNode.textContent = date;
//   cardTextNode.textContent = description;

//   cardNode.append(cardTitleNode, cardDateNode, cardTextNode);
//   return cardNode;
// };
// const createCard = ({ title, date, description }) => {
//   const cardNode = document.createElement("div");
//   cardNode.innerHTML = `
//                         <h1>${title}</h1>
//                         <time>${date}</time>
//                         <p>${description}</p>
//                         `;

//   return cardNode;
// };

// // document.body.append(createCard(articles[0]));

// const renderCards = (arr, wrapper) => {
//   arr.forEach((element) => {
//     const card = createCard(element);
//     wrapper.append(card);
//   });
// };

// renderCards(articles, document.body);

// const newH3 = document.createElement("h3"); //Пример
// const newLi = document.createElement("li");
// document.body.append(newH3);
// newH3.append(newLi);
// recipties.forEach((element) => {
//   newH3.append(element.name);
// });
// newH3.append(newLi);
// recipties.forEach((element) => {
//   newLi.append(element.ingridiensts);
// });

// const str = "areiobusbtr";

// const arr = str
//   .split("")
//   .filter(
//     (elem) =>
//       elem === "a" ||
//       elem === "e" ||
//       elem === "i" ||
//       elem === "o" ||
//       elem === "u"
//   ).length;
// console.log(arr);

// const getCount = (str) => {
//   const arr = str
//     .split("")
//     .filter(
//       (elem) =>
//         elem === "a" ||
//         elem === "e" ||
//         elem === "i" ||
//         elem === "o" ||
//         elem === "u"
//     ).length;
//   return arr;
// };

// console.log(getCount(str));

// function getCount(str) { //короткий пример
//   return (str.match(/[aeiou]/gi) || []).length;
// }

// const a = 1;
// const b = 6;

// const between = (a, b) => {
//   const arr = [];
//   for (let index = a; index <= b; index++) {
//     arr.push(index);
//   }
//   return arr;
// };

// console.log(between(1, 6));

// const rowSumOddNumbers = (n) => {
//   return n * n * n;
// };

// console.log(rowSumOddNumbers(4));

// const str = "sam harris";

// const arr = str.replace(" ", "").split("");
// console.log(arr);
// const result = arr.filter((elem) => elem === elem.toUpperCase());
// console.log(result.join("."));

// const abbrevName = (str) => {
//   const arr = str
//     .split("")
//     .filter((elem) => elem === elem.toUpperCase())
//     .join("")
//     .replace(" ", ".");
//   return arr;
// };
// console.log(abbrevName(str));

// function abbrevName(name) {
//   return (
//     name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
//   );
// }

// const x = [1, 2, 3];

// const maps = (arr) => {
//   return arr.map((elem) => elem + elem);
// };

// console.log(maps(x));

// const sumStr = (a, b) => {
//   const result = Number(a) + Number(b);
//   return result.toString();
// };

// console.log(sumStr("4", "5"));

// const arr = [
//   "Keep",
//   "Remove",
//   "Keep",
//   "Remove",
//   "Keep",
//   "Remove",
//   "Keep",
//   "Remove",
//   "Keep",
// ];

// const removeEveryOther = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     arr.splice(i, 1);
//   }
//   return arr;
// };

// console.log(removeEveryOther(arr));

// const arr = [1, 5.2, 4, 0, -1];

// const sum = (numbers) => {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   return numbers.reduce(function (a, b) {
//     return a + b;
//   });
// };

// console.log(sum(arr));

// function sum(numbers) { //Альтернатива
//   return numbers.reduce((a, b) => a + b, 0);
// }

// const countBy = (x, n) => {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// };

// console.log(countBy(1, 10));

// let boll = true;

// const booleanToString = (b) => String(b);

// const arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];

// console.log(arr[0].length);
// const sortByLength = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j + 1].length < arr[j].length) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }
// };

// console.log(sortByLength(arr));

// function sortByLength(array) {
//   return array.sort((a, b) => a.length - b.length);
// }

// const square = (num) => num * num;

// console.log(ge);

// const arr = [34, -345, -1, 100];

// const findSmallestInt = (args) => args.reduce((a, b) => Math.min(a, b));

// console.log(findSmallestInt(arr));

// const str = "String";

// // console.log(arr);

// for (let i = 0; i <= str.length; i++) {
//   str[i] + str[i];
// }

// console.log(str);
// const doubleChar = (str) => {
//   let char = str.split("").forEach((elem) => elem + elem);
//   return char;
// };

// console.log(doubleChar(str));
