const printToDom = (toPrint, divID) => {
    document.getElementById(divID).innerHTML = toPrint;
}

export default { printToDom };