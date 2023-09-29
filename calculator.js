let str = "";
let memory = 0;
let btns = document.querySelectorAll(".button");

Array.from(btns).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str);
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      document.querySelector("input").value = str;
    } else if (e.target.innerHTML == "←") {
      // Handle backspace button
      str = str.slice(0, -1);
      document.querySelector("input").value = str;
    } else {
      str += e.target.innerHTML;
      document.querySelector("input").value = str;
    }
  });
});
