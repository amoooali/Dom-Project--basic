document.addEventListener("DOMContentLoaded", () => {
  let hexcollor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"];

  const btnn = document.querySelector("#bttn");
  const color = document.querySelector(".color");

  window.getComputedStyle(document.body).backgroundColor
  btnn.addEventListener("click", () => {
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex = hex + hexcollor[getrandomcolor()];
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
  });

  function getrandomcolor() {
    return Math.floor(Math.random() * hexcollor.length);
  }
});
