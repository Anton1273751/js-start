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
// }
// if (a == 2) {
//   alert("Вторник");
// }
// if (a == 3) {
//   alert("Среда");
// }
// if (a == 4) {
//   alert("Четверг");
// }
// if (a == 5) {
//   alert("Пятница");
// }
// if (a == 6) {
//   alert("Суббота");
// }
// if (a == 7) {
//   alert("Восcресенье");
// } else alert("Теперь вы знаете порядок дней недели.");
