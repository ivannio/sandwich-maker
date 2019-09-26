import cheese from "./components/cheese.js";
// import order from "./components/order.js";

console.log("main.js is linked");

const init = () => {
    cheese.cheesePrinter();
    order.printOrderButton();
}

init();