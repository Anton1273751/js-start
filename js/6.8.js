//Планирование: setTimeout и setInterval

//setTimeout позволяет вызвать функцию один раз через определённый интервал времени.

//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.

const printHello = (text) => {
  console.log(text);
};

let timeID = setTimeout(printHello, 3000, "hello");

clearTimeout(timeID);
