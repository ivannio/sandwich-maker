import utilities from "../helpers/utilities.js";

const meats = [
    {id:"meat1", name: "Turkey", price: 50},
    {id:"meat2", name: "Ham", price: 50},
    {id:"meat3", name: "Chicken", price: 60},
    {id:"meat4", name: "Steak", price: 90}    
];

const getSelectedMeats = () => {
    let selectedMeats = [];
    const meatCheckboxes = document.getElementsByClassName("meat");
    for (let i = 0; i < meatCheckboxes.length; i++) {
        for (let j = 0; j < meats.length; j++) {
            if (meatCheckboxes[i].checked && meatCheckboxes[i].id === meats[j].id) {
                selectedMeats.push(meats[j]);
            }
          }
        }
    return selectedMeats;
};

const meatPrinter = () => {
    let stringToPrint = '';
    for (let i = 0; i < meats.length; i++) {
        stringToPrint += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input meat" id="${meats[i].id}">
        <label class="form-check-label" for="exampleCheck1">${meats[i].name}</label>
      </div>`;
    }    
    utilities.printToDom(stringToPrint, "meat-counter");
};


export default { meatPrinter, getSelectedMeats };