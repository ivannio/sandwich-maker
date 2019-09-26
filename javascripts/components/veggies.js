import utilities from "../helpers/utilities.js";

const veggies = [
    {id:"veggie1", name: "Lettuce", price: 30},
    {id:"veggie2", name: "Tomatoes", price: 50},
    {id:"veggie4", name: "Spinach", price: 60},
    {id:"veggie5", name: "Sprouts", price: 50},
    {id:"veggie6", name: "Pickles", price: 40},
    {id:"veggie7", name: "Onions", price: 60},
    {id:"veggie8", name: "Jalapenos", price: 50},
];

const getSelectedVeggies = () => {
    let selectedVeggies = [];
    const veggieCheckboxes = document.getElementsByClassName("veggie");
    for (let i = 0; i < veggieCheckboxes.length; i++) {
        for (let j = 0; j < veggies.length; j++) {
            if (veggieCheckboxes[i].checked && veggieCheckboxes[i].id === veggies[j].id) {
                selectedVeggies.push(veggies[j]);
            }
          }
        }
    return selectedVeggies;
};

const veggiePrinter = () => {
    let stringToPrint = '';
    for (let i = 0; i < veggies.length; i++) {
        stringToPrint += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input veggie" id="${veggies[i].id}">
        <label class="form-check-label" for="exampleCheck1">${veggies[i].name}</label>
      </div>`;
    }    
    utilities.printToDom(stringToPrint, "veggie-counter");
};


export default { veggiePrinter, getSelectedVeggies };
