// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const type = e.currentTarget.classList;
        if (type.contains("decrease")) {
        count--;
        } else if (type.contains("increase")) {
        count++;
        } else {
        count = 0;
        }

        if (count > 0) {
        value.style.color = "green";
        }
        if (count < 0) {
        value.style.color = "red";
        }
        if (count === 0) {
        value.style.color = "#222";
        }
        value.textContent = count;
    });
});
