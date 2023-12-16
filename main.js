const counter = document.querySelector(".counter");
const number = document.querySelector(".number");
const btnInc = document.querySelector(".btn-inc");
const btnDec = document.querySelector(".btn-dec");
const btnClr = document.querySelector(".btn-clr");

let count = 0;

btnInc.addEventListener("click", () => {
  if (count < 9) {
    count++;
    updateNumber();
  }
});

btnDec.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateNumber();
  }
});

btnClr.addEventListener("click", () => {
  count = 0;
  updateNumber();
});

function updateNumber() {
  number.textContent = count;
}
