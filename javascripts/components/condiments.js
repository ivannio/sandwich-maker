import utilities from "../helpers/utilities.js";

const condiments = [
    {id:"condiment1", name: "Mayo", price: 30},
    {id:"condiment2", name: "Mustard", price: 30},
    {id:"condiment3", name: "Ranch", price: 30},
    {id:"condiment4", name: "Honey Mustard", price: 30},
    {id:"condiment5", name: "Chipotle Ranch", price: 30}
];

const getSelectedCondiments = () => {
    let selectedCondiments = [];
    const condimentCheckboxes = document.getElementsByClassName("condiment");
    for (let i = 0; i < condimentCheckboxes.length; i++) {
        for (let j = 0; j < condiments.length; j++) {
            if (condimentCheckboxes[i].checked && condimentCheckboxes[i].id === condiments[j].id) {
                selectedCondiments.push(condiments[j]);
            }
          }
        }
    return selectedCondiments;
};

const condimentPrinter = () => {
    let stringToPrint = '';
    for (let i = 0; i < condiments.length; i++) {
        stringToPrint += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input condiment" id="${condiments[i].id}">
        <label class="form-check-label" for="exampleCheck1">${condiments[i].name}</label>
      </div>`;
    }    
    utilities.printToDom(stringToPrint, "condiment-counter");
};

export default { condimentPrinter, getSelectedCondiments };