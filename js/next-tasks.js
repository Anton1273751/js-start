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

// Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные на экран.

// let userName = "Антон";
// let userSurname = " Чесноков";

// console.log(userName + userSurname);

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

// let str1 = "a\nb\nc";

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
