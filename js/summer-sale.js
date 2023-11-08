// -------------------------------------------------------------

// ketchenWear item 1
document.getElementById('kitchenware-item1').addEventListener('click', function () {
    const price1 = getInputId('kitchenware-price1');
    const total1 = getInputId('total-price');
    const totalPrice1 = total1 + price1;

    setElementInnerText('total-price', totalPrice1);
    AddCalculateItem("add-item", "K. Accessories");
    attribute();

})

// ketchenWear item 2
document.getElementById('kitchenware-item2').addEventListener('click', function () {
    const price2 = getInputId('kitchenware-price2');
    const total2 = getInputId('total-price');
    const totalPrice2 = total2 + price2;

    setElementInnerText('total-price', totalPrice2);
    AddCalculateItem("add-item", "K. Accessories");
    attribute();
})

// ketchenWear item 3
document.getElementById('kitchenware-item3').addEventListener('click', function () {
    const price3 = getInputId('kitchenware-price3');
    const total3 = getInputId('total-price');
    const totalPrice3 = total3 + price3;

    setElementInnerText('total-price', totalPrice3);
    AddCalculateItem("add-item", "K. Accessories");
    attribute();
})

// -------------------------------------------------------------


// sportsWear item 1
document.getElementById('sportswear-item1').addEventListener('click', function () {
    const price1 = getInputId('sportswear-price1');
    const total1 = getInputId('total-price');
    const totalPrice1 = total1 + price1;

    setElementInnerText('total-price', totalPrice1);
    AddCalculateItem("add-item", "Sports Back Cap");
    attribute();
})

// sportsWear item 2
document.getElementById('sportswear-item2').addEventListener('click', function () {
    const price2 = getInputId('sportswear-price2');
    const total2 = getInputId('total-price');
    const totalPrice2 = total2 + price2;

    setElementInnerText('total-price', totalPrice2);
    AddCalculateItem("add-item", "Full Jersey Set");
    attribute();
})

// sportsWear item 3
document.getElementById('sportswear-item3').addEventListener('click', function () {
    const price3 = getInputId('sportswear-price3');
    const total3 = getInputId('total-price');
    const totalPrice3 = total3 + price3;

    setElementInnerText('total-price', totalPrice3);
    AddCalculateItem("add-item", "Sports cates");
    attribute();
})


// -------------------------------------------------------------


// Furniture item 1
document.getElementById('furniture-item1').addEventListener('click', function () {
    const price1 = getInputId('furniture-price1');
    const total1 = getInputId('total-price');
    const totalPrice1 = total1 + price1;

    setElementInnerText('total-price', totalPrice1);
    AddCalculateItem("add-item", "Single Relax Chair");
    attribute();
})

// Furniture item 2
document.getElementById('furniture-item2').addEventListener('click', function () {
    const price2 = getInputId('furniture-price2');
    const total2 = getInputId('total-price');
    const totalPrice2 = total2 + price2;

    setElementInnerText('total-price', totalPrice2);
    AddCalculateItem("add-item", "Children play");
    attribute();
})

// Furniture item 3
document.getElementById('furniture-item3').addEventListener('click', function () {
    const price3 = getInputId('furniture-price3');
    const total3 = getInputId('total-price');
    const totalPrice3 = total3 + price3;

    setElementInnerText('total-price', totalPrice3);
    AddCalculateItem("add-item", "Flexible Sofa");
    attribute();
})



// -------------------------------------------------------------


// make purchase button
document.getElementById('make-purchase').addEventListener('click', function () {
    const totalPrice = getInputId("total-price");
    const discount = getInputId("discount");
    const total = getInputId("total");
    
    if (totalPrice > 0) {

        setElementInnerText("discount", discount);
        setElementInnerText("total", totalPrice);
    }

    else{
        
        return;
    }


})



// -------------------------------------------------------------



document.getElementById('coupon-code').addEventListener('keyup', function(){
    applyAttribute();
})


// -------------------------------------------------------------



document.getElementById('coupon-button').addEventListener('click', function () {

    const couponCode = getTextId("coupon-code");
     
    const totalPrice = getInputId("total-price");
    const discount = getInputId("discount");
    const total = getInputId("total");

    if ((couponCode === "SELL200") && (totalPrice >= 200)) {
        applyAttribute();
        const discount = (totalPrice * (20 / 100)).toFixed(2);
        const total = totalPrice - discount;

        setElementInnerText("discount", discount);
        setElementInnerText("total", total);
    }

    else {
        alert('please input a valid coupon number or your purchase amount is lass then 200');
        
    }

});