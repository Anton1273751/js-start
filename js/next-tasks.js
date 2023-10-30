// 1
// Возведите 2 в 10 степень.

// let num = 2 ** 10;

// console.log(num);

// 2
// Найдите квадратный корень из 245.

// let numb = 245;

// console.log(Math.sqrt(numb));

// 3
// Дан следующий массив:
// [4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let array = [4, 2, 5, 19, 13, 0, 10];

// let getSumCubes = (arr) => {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i ** 3;
//   }
//   return sum;
// };

// console.log(getSumCubes(array));

// 4
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let num = Math.sqrt(379);

// console.log(num.toFixed());
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));

// 5
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let numb = 587;

// let getSquareRoot = (num) => {
//   let result = Math.sqrt(num);
//   return result;
// };

// console.log(Math.ceil(getSquareRoot(numb)));
// console.log(Math.floor(getSquareRoot(numb)));

// 6
// // Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let numbMax = Math.max(4, -2, 5, 19, -130, 0, 10);
// let numbMin = Math.min(4, -2, 5, 19, -130, 0, 10);

// console.log(numbMax);
// console.log(numbMin);

// 7
// Выведите на экран случайное целое число от 1 до 100.

// let numbRandom = Math.random() * 100;
// console.log(Math.round(numbRandom));

// 8
// С помощью цикла заполните массив 10-ю случайными целыми числами.

// let array = [];

// for (let index = 0; index < 10; index++) {
//   array.push(Math.round(Math.random() * 100));
// }

// console.log(array);

