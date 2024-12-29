/* document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  let valu = document.querySelector(".value");
  let bttn = document.querySelectorAll(".btn");

  bttn.forEach((item) => {
    item.addEventListener("click", (e) => {
      let tag = e.currentTarget.classList;

      if (tag.contains("decrase")) {
        count--;
        valu.textContent = count;
      } else if (tag.contains("increase")) {
        count++;
        valu.textContent = count;
      } else if (tag.contains("reset")) {
        count = 0;
        valu.textContent = count;
      }
      if (count > 0) {
        valu.style.color = "green";
      } else if (count < 0) {
        valu.style.color = "red";
      } else {
        valu.style.color = "black";
      }
    });
  });
});
 */
//----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const buttons = document.querySelectorAll(".btn");
  const valueDisplay = document.querySelector(".value");
  valueDisplay.textContent = count;

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const classes = e.currentTarget.classList;

      if (classes.contains("increase")) {
        count++;
      } else if (classes.contains("decrase")) {
        count--;
      } else if (classes.contains("reset")) {
        count = 0;
      }

      valueDisplay.textContent = count;

      if (count > 0) {
        valueDisplay.style.color = "green";
      } else if (count < 0) {
        valueDisplay.style.color = "red";
      } else {
        valueDisplay.style.color = "black";
      }
    });
  });
});

//----------------------------------------------------------------------

/* 
document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  let valu = document.querySelector(".value");
  let interval;
  let bttn = document.querySelectorAll(".btn");

  bttn.forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      let tag = e.currentTarget.classList;

      interval = setInterval(() => {
        if (tag.contains("decrase")) {
          count--;

          valu.textContent = count;
        } else if (tag.contains("increase")) {
          count++;

          valu.textContent = count;
        } else if (tag.contains("reset")) {
          count = 0;

          valu.textContent = count;
        }
        if (count > 0) {
          valu.style.color = "green";
        } else if (count < 0) {
          valu.style.color = "red";
        } else {
          valu.style.color = "black";
        }
      }, 100);
    });
    item.addEventListener("mouseup", () => {
      clearInterval(interval);
    });
    item.addEventListener("mouseleave", () => {
      clearInterval(interval);
    });
  });
}); */
