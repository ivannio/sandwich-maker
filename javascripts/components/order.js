import utilities from "../helpers/utilities.js";
import bread from "./bread.js";
import cheese from "./cheese.js";
import condiments from "./condiments.js";
import meat from "./meat.js";
import veggies from "./veggies.js";

const createFinalOrder = arr => {
  let domString = "";
  for (let i = 0; i < arr.length; i++) {
    domString += `<div class="container">
        <div class="row">
          <div class="col d-flex justify-content-start">
            <h6>${arr[i].name}</h6>
          </div>
          <div class="col d-flex justify-content-end">
            <h6>$${(arr[i].price / 100).toFixed(2)}</h6>
          </div>
        </div>
        </div>
        `;
  }
  domString += `<div class="row d-flex justify-content-center">`
  let cost = 0;
  for (let j = 0; j < arr.length; j++) {
    cost += arr[j].price;
  }
  domString += `<p>Final Cost: $${(cost / 100).toFixed(2)}</p>`;
  domString += `</div>`;
  utilities.printToDom(domString, "final-order");
};

const createOrderEvent = () => {
  const selectedBreads = bread.getSelectedBreads();
  const selectedMeats = meat.getSelectedMeats();
  const selectedCheese = cheese.getSelectedCheeses();
  const selectedVeggies = veggies.getSelectedVeggies();
  const selectedCondiments = condiments.getSelectedCondiments();
  let selectedIngredients = selectedBreads.concat(
    selectedMeats,
    selectedCheese,
    selectedVeggies,
    selectedCondiments
  );
  createFinalOrder(selectedIngredients);
};

const printOrderButton = () => {
  let stringToPrint = "";
  stringToPrint = `<button id="order-button" class="btn btn-secondary">Make Sandwich</button>`;
  utilities.printToDom(stringToPrint, "button-zone");
  document
    .getElementById("order-button")
    .addEventListener("click", createOrderEvent);
};

export default { printOrderButton };
