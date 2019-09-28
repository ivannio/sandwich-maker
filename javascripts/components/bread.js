import utilities from "../helpers/utilities.js";

const breads = [
    {id:"bread1", name: "Italian", price: 40},
    {id:"bread2", name: "Wheat", price: 50},
    {id:"bread3", name: "Sourdough", price: 60}
];

const getSelectedBreads = () => {
    let selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName("bread");
    for (let i = 0; i < breadCheckboxes.length; i++) {
        for (let j = 0; j < breads.length; j++) {
            if (breadCheckboxes[i].checked && breadCheckboxes[i].id === breads[j].id) {
                selectedBreads.push(breads[j]);
            }
          }
        }
    return selectedBreads;
};

const breadPrinter = () => {
    let stringToPrint = '<h3>Bread</h3>';
    for (let i = 0; i < breads.length; i++) {
        stringToPrint += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input bread" id="${breads[i].id}">
        <label class="form-check-label" for="exampleCheck1">${breads[i].name}</label>
      </div>`;
    }    
    utilities.printToDom(stringToPrint, "bread-counter");
};


export default { breadPrinter, getSelectedBreads };