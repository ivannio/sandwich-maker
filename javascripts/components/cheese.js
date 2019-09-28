import utilities from "../helpers/utilities.js";

const cheeses = [
    {id:"cheese1", name: "Cheddar", price: 50},
    {id:"cheese2", name: "Provolone", price: 40},
    {id:"cheese3", name: "Mozzarella", price: 50},
    {id:"cheese4", name: "Swiss", price: 60}    
];

const getSelectedCheeses = () => {
    let selectedCheeses = [];
    const cheeseCheckboxes = document.getElementsByClassName("cheese");
    for (let i = 0; i < cheeseCheckboxes.length; i++) {
        for (let j = 0; j < cheeses.length; j++) {
            if (cheeseCheckboxes[i].checked && cheeseCheckboxes[i].id === cheeses[j].id) {
                selectedCheeses.push(cheeses[j]);
            }
          }
        }
    return selectedCheeses;
};

const cheesePrinter = () => {
    let stringToPrint = '<h3>Cheese</h3>';
    for (let i = 0; i < cheeses.length; i++) {
        stringToPrint += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[i].id}">
        <label class="form-check-label" for="exampleCheck1">${cheeses[i].name}</label>
      </div>`;
    }    
    utilities.printToDom(stringToPrint, "cheese-counter");
};


export default { cheesePrinter, getSelectedCheeses };