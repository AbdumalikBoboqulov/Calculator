// const input = document.getElementById("inputBox");
// const button = document.querySelectorAll("button");
// let string = "";
// let arr = Array.from(buttons);
// arr.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.taeget.innerHTML == "=") {
//       string = eval(string);
//       input.value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       input.value = string;
//     } else if ((e.target, innerHTML == "DEL")) {
//       string = string.substring(o, string.length - 1);
//       input.value = string;
//     } else {
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });
const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    if (buttonText === "=") {
      try {
        const result = eval(inputBox.value);
        inputBox.value = result;
      } catch (error) {
        inputBox.value = "Error";
      }
    } else if (buttonText === "Ac") {
      inputBox.value = "";
    } else if (buttonText === "Del") {
      inputBox.value = inputBox.value.slice(0, -1);
    } else {
      inputBox.value += buttonText;
    }
  });
});
