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