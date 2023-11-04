let billAmountElement = document.getElementById("billAmount");
let percentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage="Please Enter avalid Input.";

function calculateTip() {
    let billAmountElementValue = billAmountElement.value;
    let percentageTipInputValue = percentageTipElement.value;
    if (billAmountElementValue === "") {
        errorMessageElement.textContent = "please Enter a valid Input";
    } else if (percentageTipInputValue=== "") {
        errorMessageElement.textContent = "please enter a valid Input";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountElementValue);
        let percentageTip = parseInt(percentageTipInputValue);
        let calculateTip = (percentageTip / 100) * billAmount;
        let calculateTotal = billAmount + calculateTip;
        tipAmountElement.value = calculateTip;
        totalAmountElement.value = calculateTotal;
    }
}
