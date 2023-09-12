// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const list = document.querySelector("#list");
const inputProduct = document.querySelector("#product");
const inputQuantity = document.querySelector("#qty");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const qty = inputQuantity.value;
  const product = inputProduct.value;
  const listItem = document.createElement("li");

  listItem.innerText = qty + product;
  list.appendChild(listItem);

  // reset inputs
  inputProduct.value = "";
  inputQuantity.value = "";
});
