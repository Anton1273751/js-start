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

// let array = [4, 2, 5, 19, 13, 0, 10, 125];

// let getSumCubes = (arr) => {
//   let sum = 0;
//   for (let i of arr) {
//     sum += i ** 3;
//   }
//   return sum;
// };

// let getSumCubes = (arr) => {
//   let sum = 0;
//   arr.forEach((element) => (sum += element ** 3));/// метод forEeach ничего не возрвашает.
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

// const numb = 587;

// const getSquareRoot = (num) => {
//   let result = Math.sqrt(num);
//   return result;
// };

// const getRoundObj = (num) => {
//   return {
//     floor: Math.ceil(num),
//     ceil: Math.floor(num),
//   };
// };

// console.log(getRoundObj(getSquareRoot(numb)));

// 6
// // Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let numbMax = Math.max(4, -2, 5, 19, -130, 0, 10);
// let numbMin = Math.min(4, -2, 5, 19, -130, 0, 10);

// console.log(numbMax);
// console.log(numbMin);

// 7
// Выведите на экран случайное целое число от 1 до 100.

// const generateRandomArr = (length, maxNum) => {
//   const arr = [];
//   for (let i = 0; i < length; i++) {
//     arr.push(Math.round(Math.random() * maxNum));
//   }
//   return arr;
// };

// console.log(generateRandomArr(10, 500));
// let numbRandom = Math.floor(Math.random() * 100) + 1;
// console.log(Math.round(numbRandom));

// 8
// С помощью цикла заполните массив 10-ю случайными целыми числами.

// let array = [];

// for (let index = 0; index < 10; index++) {
//   array.push(Math.round(Math.random() * 100));
// }

// console.log(array);

// Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные на экран.

// let userName = "Антон";
// let userSurname = "Чесноков";

// console.log(userName[0]);

// Создайте переменную str и присвойте ей строку '!!!'. Выведите значение этой переменной на экран.

// let str = "!!!";

// alert(str);
// console.log(str);

// Создайте переменную с текстом 'java' и переменную с текстом 'script'.
// С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.

// let text = "java";
// let secondtext = "script";

// console.log(text + secondtext);
// Создайте переменную с текстом 'hello' и переменную с текстом 'world'.
// С помощью этих переменных и операции сложения строк выведите на экран строку 'hello world'.

// let text = "hello";
// let secondtext = " world";

// console.log(text + secondtext);

// Запишите в переменную какую-нибудь строку. Выведите на экран длину вашей строки.

// let text = "dsafisdfjisdjfisjdfijsdf123214124j";

// console.log(text.length);

// Перепишите следующий код через вставку переменных:
// let str1 = "xxx";
// let str2 = "yyy";
// // let txt  = 'aaa ' + str1 + ' bbb ' + str2 + ' ccc';

// let txt = `aaa` + ` ${str1} ` + `bbb` + ` ${str2}` + ` ccc`;

// console.log(txt);

// Запишите в переменную str строку, состоящую из символов 'a', 'b', 'c',
// причем после каждого символа, кроме последнего, должен стоять перенос строки.

// let str1 = `a
// n
// b`;

// console.log(str1);

// // Дана строка 'js'. Сделайте из нее строку 'JS'.

// let str = "js";
// console.log(str.toUpperCase());

// Дана строка 'JS'. Сделайте из нее строку 'js'.

// let str = "JS";

// console.log(str.toLowerCase());

//  Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

// let text = 'я учу javascript!'
// console.log(text.length);

// Дана строка 'я учу javascript!'.
// Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами(через substr, substring, slice)

// let text = 'я учу javascript!'

// console.log(text.substr(2, 4));
// console.log(text.substring(2,5));
// console.log(text.slice(2,5));

// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

// let text = "я учу javascript!";

// let posishionStr = text.slice(2, 5);

// console.log(posishionstr.length);

// 13 Дана переменная str, в которой хранится какой - либо текст.
// Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n,
// то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
// В противном случае в переменную result запишем содержимое переменной str.?

// let str = "Some text";

// let getText = (text) => {
//   let num = 5;

//   if (text.length > num) {
//     return (result = text.slice(0, num) + "...");
//   } else return (result = text);
// };

// console.log(getText(str));

// 14. Создайте переменную str и присвойте ей значение 'abcde'.
// Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

// let str = "abcde";

// console.log(str[0]);
// console.log(str[2]);
// console.log(str[4]);

// 15. Создайте переменную num и присвойте ей значение '12345'.
// Найдите произведение(умножение) цифр этого числа. ??

// let num = "12345";

// let getNum = (numb) => {
//   let nNum = 1;
//   for (let i = 0; i < numb.length; i++) {
//     nNum *= numb[i];
//   }
//   return nNum;
// };

// console.log(getNum(num));

// 16. В переменной day лежит какое - то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число(в первую, вторую или третью).

// let day = Math.round(Math.random() * 31);

// let getDecade = (day) => {
//   if (day <= 10) {
//     return `Первая декада дня ${day}`;
//   } else if (day > 10 && day <= 20) {
//     return `Вторая декада дня ${day}`;
//   } else if (day > 20) {
//     return `Третья декада дня ${day}`;
//   }
// };
// console.log(getDecade(day));

//  В переменной month лежит какое - то число из интервала от 1 до 12.
//  Определите в какую пору года попадает этот месяц(зима, лето, весна, осень).

// let month = Math.floor(Math.random() * 12) + 1;
// console.log(month);

// let getMoth = (month) => {
//   switch (month) {
//     case 1:
//       return "Зима";
//     case 2:
//       return "Зима";
//     case 3:
//       return "Весна";
//     case 4:
//       return "Весна";
//     case 5:
//       return "Весна";
//     case 6:
//       return "Лето";
//     case 7:
//       return "Лето";
//     case 8:
//       return "Лето";
//     case 9:
//       return "Осень";
//     case 10:
//       return "Осень";
//     case 11:
//       return "Осень";
//     case 12:
//       return "Зима";
//   }
// };
// let getMoth = (month) => {
//   const calendar = {
//     1: 'January',
//     2: 'Feb',
//     3: "Marth"
//   }

//   return calendar[month]
// };

// console.log(getMoth(2));

// 18. Дана строка, состоящая из символов, например, 'abcde'.
//     Проверьте, что первым символом этой строки является буква 'a'.Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = "abcde";

// const getStr = (str, firstLetter) => {
//     let result = str.startsWith(firstLetter)
//   return result ? 'Yes' : 'No';
// };

// const getStr = (str) => {
//   if (str[0] === "a") {
//     console.log("да");
//   } else console.log("нет");
// };

// console.log(getStr(str));
// Дана строка с цифрами, например, '12345'
// Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = "12345";

// let getFirstSimbol = (str) => {
//   if (str[0] === "1" || str[0] === "2" || str[0] === "3") {
//     console.log("да");
//   } else console.log("нет");
// };

// getFirstSimbol(num);

// *** Задача на циклы / массивы / функции.

// Написать функцию, которая принимает строку вида: "    SoMe      WORD  and mORE SOme WORDs   with            some SPAcEs    "

// Возвращает строку вида: "#SomeWordAndMoreSomeWordsWithSomeSpaces"
// Функция берет любую строку, и генерирует хештег. Примеры выше.
// Если длинна выходных данных получается больше 140 символов, или меньше 2х символов - функция вернет false

// Методы которые могут пригодиться - .trim(), .split(), .join(), .toUpperCase, .toLowerCase(), .push(), .slice()
// Посмотреть документацию на методы можно тут -

// const str = "dsfsdpgsg";

// const generateHashTag = (str) => {
//   let arr = str.trim().split(" ");
//   arr = arr.filter((elem) => elem.length);
//   arr = arr.map((elem) => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
//   arr = arr.join("");

//   const result = "#" + arr;
//   if (result.length > 140 || result.length < 2) {
//     return false;
//   }

//   return arr;
// };

// console.log(generateHashTag(str));

// console.log("".length); // 0 -> false

// 20. Дана строка из 3 - х цифр.
// Найдите сумму этих цифр.
// То есть сложите как числа первый символ строки, второй и третий.

// const numStr = "567";

// const getNumSum = (str) => {
//   let sum = 0;
//   arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }
//   return sum;
// };

// console.log(getNumSum(numStr));

// 21. Дана строка из 6 - ти цифр.Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
//  Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = "999999";
// const CheckingArraySums = (str) => {
//   let arr = str.split("");
//   let firstArr = arr.slice(0, 3);
//   let secondArr = arr.slice(3, 6);
//   let sum1 = firstArr.reduce((acc, elem) => {
//     return (acc += +elem);
//   }, 0);

//   let sum2 = secondArr.reduce((acc, elem) => {
//     return (acc += +elem);
//   }, 0);
//   if (sum1 === sum2) {
//     console.log("да");
//   } else console.log("нет");
// };

// console.log(CheckingArraySums(num));

// const arr = [1, 3, 3, 7, 5];

// const even = (elem) => elem % 2 === 0;

// console.log(arr.some(even));

// function isBiggerThan10(element, index, array) {
//   return element > 10;
// }
// [2, 5, 8, 1, 4].some(isBiggerThan10); // false
// [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// [2, 5, 8, 1, 4].some((elem) => elem > 10); // false
// [12, 5, 8, 1, 4].some((elem) => elem > 10); // tru

// Задание 1:
// Написать функцию getFullNameFromArray,
// которая принимает массив пользователя и возвращает строку с полным именем
// Примеры:
// const user = ["Вася", "Пупкин"]
// getFullNameFromArray(user) // "Вася Пупкин"

// const user = ["Вася", "Пупкин"];
// const getFullNameFromArray = (arr) => {
//   return arr.join(' ')
// };

// console.log(getFullNameFromArray(user));

// Задание 2:
// Написать функцию getLength, которая возвращает длину переданного массива
// Примеры:
// getLength([1,2,3]) // 3

// const arr = [1, 2, 3];

// let getLength = (arr) => {
//   return result = arr.length;
// };

// console.log(getLength(arr));

// Задание 3:
// Написать функцию getLength, getFullLength, которая принимает два массива и
//  возвращает их общую длину(сумму длин) используйте функцию из предыдущего задания в решении
// Примеры:
// getFullLength([1,2], [3,4]) // 4

// let arr1 = [24, 25, 45];
// let arr2 = [94, 35, 75];

// const getFullLength = (arr1, arr2) => {
//   let array = arr1.concat(arr2);
//   return array.length;
// };

// console.log(getFullLength(arr1,arr2));

// Задание 4:
// Написать функцию getLast, которая возвращает последний элемент переданного массива
// но не изменяет исходный массив
// Примеры:
// getLast([1,2,3]) // 3
// getLast([1,2,3,4,5]) // 5

// const arr = [5, 7, 237,56];
// const getLast = (arr) => {
//   return arr.pop();
// };

// console.log(getLast(arr));

// Задание 5:
// Написать функцию sumLastNumbers,
//  которая принимает два массива
//   и возвращает сумму их последних элементов используйте функцию из предыдущего задания в решении
// Примеры:
// sumLastNumbers([1,2], [3,4]) // 6
// sumLastNumbers([1,2,3], [3,4,6]) // 9

// const arr1 = [23, 67, 800];
// const arr2 = [23, 67, 600];

// const sumLastNumbers = (arr1, arr2) => {
//   let sum = 0;
//   return (sum = arr1.pop() + arr2.pop());
// };

// Задание №1
// Напишите функцию, возвращающую строку str с заглавным первым символом

// let str = "hello";

// const getUpper = (str) => {
//   return str[0].toUpperCase() + str.slice(1);
// };

// console.log(getUpper(str));

//  Задание №2
// Напишите функцию усечения строки. Она принимает строку и максимальное
// количество символов. Если символов в строке больше чем максимальное, то
// строка обрезается до максимума и в конце добавляется символ многоточия.

// let str = "Some text";

// const getStr = (str, num) => {
//     let arr = str.split("");
//   if (str.length > num) {
//     return arr.shift() + "...";
//   } else console.log(`Длинна строки ${str} больше второго числа`);
// };

// console.log(getStr(str, 4));

// Задание №3
// Напишите функцию которая будет убирать из строки знаки $ и ₽
// а так-же убирает лишние пробелы по краям, и возвращает только число.
// Например "100₽" => 100, "$150" => "150", " $ 175 " => "175"

// const str = "200$";

// // const getTrimText = (str) => {
//   let arr = str.trim().split("");
//  arr.map((elem)=>)
// // };

// Задание № 4 Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире(-) между словами.
// При этом все символы строки необходимо перевести в верхний регистр.

// let str = "Anton";

// // const insert_dash = (str) => {
// //   let result = str.split("").join('-').toUpperCase();
// //   return result;
// // };

// // console.log(insert_dash(str));
// Задание № 5 Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// let str1 = "aNTon";
// let str2 = "Antonh";
// const comparison = (str1, str2) => {
//   if (str1.toLowerCase() === str2.toLowerCase()) {
//     return console.log("Строки равны");
//   } else return console.log("Строки не равны");
// };

// console.log(comparison(str1, str2));
