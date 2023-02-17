let number = document.querySelector("label");

const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");

let count = 0;

increase.addEventListener("click", increaseFunc);
function increaseFunc() {
  count++;
  number.textContent = count;
}

decrease.addEventListener("click", decreaseFunc);
function decreaseFunc() {
  count--;
  if (count < 0) {
    count = 0;
  }
  number.textContent = count;
}

reset.addEventListener("click", resetFunc);
function resetFunc() {
  count = 0;
  number.textContent = count;
}
