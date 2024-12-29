

document.addEventListener("DOMContentLoaded", () => {
  let colors = ["red", "blue", "green"];

  let btnn = document.querySelector("#bttn");
  let color = document.querySelector(".color");
  let bg = window.getComputedStyle(document.body).backgroundColor;
  console.log(bg);

  color.textContent = bg;
  btnn.addEventListener("click", () => {
    let rang = randomrang();

    document.body.style.backgroundColor = colors[rang];

    color.textContent = colors[rang];
  });

  function randomrang() {
    return Math.floor(Math.random() * colors.length);
  }
});
