import bread from "./components/bread.js";
import cheese from "./components/cheese.js";
import condiments from "./components/condiments.js";
import meat from "./components/meat.js";
import veggies from "./components/veggies.js";
import order from "./components/order.js";


console.log("main.js is linked");

const init = () => {
    cheese.cheesePrinter();
    bread.breadPrinter();
    meat.meatPrinter();
    veggies.veggiePrinter();
    condiments.condimentPrinter();
    order.printOrderButton();
}

init();