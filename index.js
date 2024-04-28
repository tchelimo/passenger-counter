// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
const incrementBtn = document.querySelector("#increment-btn");
const saveEl = document.querySelector("#save-el");
const countEl = document.querySelector("#count-el");
function increment() {
  count++;
  countEl.textContent = count;
}

incrementBtn.addEventListener("click", increment);

function save() {
  let save_dash = ` ${count} -`;
  saveEl.textContent += save_dash;
  count = 0;
  countEl.textContent = count;
}
document.querySelector("#save-btn").addEventListener("click", save);
