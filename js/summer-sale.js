function getTextId(textId){
    const inputText = document.getElementById(textId);
    const input = inputText.value;
    // const input = parseFloat(inputTextString);
    return input;
}
// 
function getInputId(inputId){
    const inputItem = document.getElementById(inputId);
    const inputIdString = inputItem.innerText;
    const input = parseFloat(inputIdString);
    return input;
}
// 
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
// 
function AddCalculateItem (calculateId, itemName){
    const calculate = document.getElementById(calculateId);
    const count = calculate.childElementCount;
    const p = document.createElement('p');
    p.innerHTML = `
    ${count + 1}. ${itemName}
    `;
    calculate.appendChild(p);

}
// -------------------------------------------------------------

// ketchenWear
document.getElementById('kitchenware-item1').addEventListener('click', function(){
    const price1 = getInputId('kitchenware-price1');
    const total1 = getInputId('total-price');
    const totalPrice1 = total1 + price1;
    setElementInnerText('total-price', totalPrice1);
    AddCalculateItem ("add-item", "K. Accessories");
})
document.getElementById('kitchenware-item2').addEventListener('click', function(){
    const price2 = getInputId('kitchenware-price2');
    const total2 = getInputId('total-price');
    const totalPrice2 = total2 +price2;
    setElementInnerText('total-price', totalPrice2);
    AddCalculateItem ("add-item", "K. Accessories");
})
document.getElementById('kitchenware-item3').addEventListener('click', function(){
    const price3 = getInputId('kitchenware-price3');
    const total3 = getInputId('total-price');
    const totalPrice3 = total3 +price3;
    setElementInnerText('total-price', totalPrice3);
    AddCalculateItem ("add-item", "K. Accessories");
})



// sportsWear
document.getElementById('sportswear-item1').addEventListener('click', function(){
    const price1 = getInputId('sportswear-price1');
    const total1 = getInputId('total-price');
    const totalPrice1 = total1 + price1;
    setElementInnerText('total-price', totalPrice1);
    AddCalculateItem ("add-item", "Sports Back Cap");
})
document.getElementById('sportswear-item2').addEventListener('click', function(){
    const price2 = getInputId('sportswear-price2');
    const total2 = getInputId('total-price');
    const totalPrice2 = total2 +price2;
    setElementInnerText('total-price', totalPrice2);
    AddCalculateItem ("add-item", "Full Jersey Set");
})
document.getElementById('sportswear-item3').addEventListener('click', function(){
    const price3 = getInputId('sportswear-price3');
    const total3 = getInputId('total-price');
    const totalPrice3 = total3 +price3;
    setElementInnerText('total-price', totalPrice3);
    AddCalculateItem ("add-item", "Sports cates");
})



// Furniture
document.getElementById('furniture-item1').addEventListener('click', function(){
    const price1 = getInputId('furniture-price1');
    const total1 = getInputId('total-price');
    const totalPrice1 = total1 + price1;
    setElementInnerText('total-price', totalPrice1);
    AddCalculateItem ("add-item", "Single Relax Chair");
})
document.getElementById('furniture-item2').addEventListener('click', function(){
    const price2 = getInputId('furniture-price2');
    const total2 = getInputId('total-price');
    const totalPrice2 = total2 +price2;
    setElementInnerText('total-price', totalPrice2);
    AddCalculateItem ("add-item", "Children play");
})
document.getElementById('furniture-item3').addEventListener('click', function(){
    const price3 = getInputId('furniture-price3');
    const total3 = getInputId('total-price');
    const totalPrice3 = total3 +price3;
    setElementInnerText('total-price', totalPrice3);
    AddCalculateItem ("add-item", "Flexible Sofa");
})




document.getElementById('make-purchase').addEventListener('click', function(){
    const totalPrice = getInputId("total-price");
    const discount = getInputId("discount");
    const total = getInputId("total");
    if(totalPrice >= 200){
        const  discount = (totalPrice * (20/100)).toFixed(2);
        const total = totalPrice - discount;
        setElementInnerText("discount", discount);
        setElementInnerText("total", total);
        
    }
    else{
        setElementInnerText("total", totalPrice);
        return discount;
    }
})



document.getElementById('coupon-button').addEventListener('click', function(){
    const couponCode = getTextId("coupon-code");
    console.log(couponCode);

    const couponButton = getInputId("coupon-button");
    const totalPrice = getInputId("total-price");
    const discount = getInputId("discount");
    const total = getInputId("total");
    if(couponCode === "SELL200"){
        const  discount = (totalPrice * (20/100)).toFixed(2);
        const total = totalPrice - discount;
        setElementInnerText("discount", discount);
        setElementInnerText("total", total);
    }
    else{
        setElementInnerText("total", totalPrice);
        
    }
});