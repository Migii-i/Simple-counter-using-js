let counterValue = 0;

const counter = document.getElementsByClassName("number-badhega")[0];
const plus = document.getElementsByClassName("dabba-2")[0];
const minus = document.getElementsByClassName("dabba-1")[0];
const resetbtn = document.getElementById("reset");
minus.addEventListener("click", () => {
  if (counterValue > 0) counterValue--;
  

  counter.innerHTML = counterValue;
});
plus.addEventListener("click", () => {
  counterValue++;
  counter.innerHTML = counterValue;
});
resetbtn.addEventListener("click", () => {
  counterValue = 0;
  counter.innerHTML = counterValue;
});
