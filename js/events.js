const btnNode = document.querySelector("#btn");
const formNode = document.querySelector("form");
const divNode = document.getElementById("square");

function getColor() {
  const colors = [
    "#49A16C",
    "#064236",
    "#ED6742",
    "#F498AD",
    "#1A5AD7",
    "#AFC9DA",
    "#FFD829",
    "#282A2E",
    "#5E6064",
    "#E6E6E6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

btnNode.addEventListener("click", function (e) {
  e.preventDefault();
  divNode.style = `background-color: ${getColor()};`;
});

formNode.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submit");
});
btnNode.addEventListener("click", (e) => {
  console.log(e);
  console.log("Click");
});
