function getTextId(textId) {
    const inputText = document.getElementById(textId);
    const input = inputText.value;
    // const input = parseFloat(inputTextString);
    return input;
}
// 
function getInputId(inputId) {
    const inputItem = document.getElementById(inputId);
    const inputIdString = inputItem.innerText;
    const input = parseFloat(inputIdString);
    return input;
}
// 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
// 
function AddCalculateItem(calculateId, itemName) {
    const calculate = document.getElementById(calculateId);
    const count = calculate.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `
    ${count + 1}. ${itemName}
    `;
    calculate.appendChild(p);
}


function applyAttribute(){
    const couponButton = document.getElementById("coupon-button");
    const couponText = getTextId('coupon-code');
    if ((couponText === "SELL200")) {
        couponButton.removeAttribute('disabled');
    }
    else{
        couponButton.setAttribute('disabled', true);
    }
}


function attribute(){
    const deleteButton = document.getElementById('make-purchase');
    const sumOfTotalPrice = getInputId('total-price');
    
    if(sumOfTotalPrice > 0){
        deleteButton.removeAttribute('disabled');
    }

    else{
        deleteButton.setAttribute('disabled', true);
    }
}