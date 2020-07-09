//phone up button handler
const upBtnPhone = document.getElementById("plusPhone");
upBtnPhone.addEventListener("click", function () {
    const phoneCount = document.getElementById("phoneCount").value;
    const phoneCountValue = parseInt(phoneCount);
    document.getElementById("phoneCount").value = phoneCountValue + 1;
    const phonePrice = document.getElementById("phonePrice").innerHTML;
    const phonePriceValue = parseInt(phonePrice) + 1219;
    document.getElementById("phonePrice").innerHTML = phonePriceValue;
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseFloat(subtotal) + 1219;
    document.getElementById("subtotal").innerHTML = subtotalValue;
    document.getElementById("tax").innerHTML = subtotalValue * 1 / 10;
    const tax = document.getElementById("tax").innerHTML;
    const taxValue = parseFloat(tax);
    document.getElementById("total").innerHTML = subtotalValue + taxValue;
})

//phone down button handler
const downBtnPhone = document.getElementById("minusPhone");
downBtnPhone.addEventListener("click", function () {
    const phoneCount = document.getElementById("phoneCount").value;
    const phoneCountValue = parseInt(phoneCount);
    if (phoneCountValue > 1) {
        document.getElementById("phoneCount").value = phoneCountValue - 1;
        const phonePrice = document.getElementById("phonePrice").innerHTML;
        const phonePriceValue = parseInt(phonePrice) - 1219;
        document.getElementById("phonePrice").innerHTML = phonePriceValue;
        const subtotal = document.getElementById("subtotal").innerHTML;
        const subtotalValue = parseInt(subtotal) - 1219;
        document.getElementById("subtotal").innerHTML = subtotalValue;
        document.getElementById("tax").innerHTML = subtotalValue * 1 / 10;
        const tax = document.getElementById("tax").innerHTML;
        const taxValue = parseFloat(tax);
        document.getElementById("total").innerHTML = subtotalValue + taxValue;

    }

})

//cover up button handler
const upBtnCover = document.getElementById("plusCover");
upBtnCover.addEventListener("click", function () {
    const coverCount = document.getElementById("coverCount").value;
    const coverCountValue = parseInt(coverCount);
    document.getElementById("coverCount").value = coverCountValue + 1;
    const coverPrice = document.getElementById("coverPrice").innerHTML;
    const coverPriceValue = parseInt(coverPrice) + 59;
    document.getElementById("coverPrice").innerHTML = coverPriceValue;
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal) + 59;
    document.getElementById("subtotal").innerHTML = subtotalValue;
    document.getElementById("tax").innerHTML = subtotalValue * 1 / 10;
    const tax = document.getElementById("tax").innerHTML;
    const taxValue = parseFloat(tax);
    document.getElementById("total").innerHTML = subtotalValue + taxValue;
})

//cover down button handler
const downBtnCover = document.getElementById("minusCover");
downBtnCover.addEventListener("click", function () {
    const coverCount = document.getElementById("coverCount").value;
    const coverCountValue = parseInt(coverCount);
    if (coverCountValue > 1) {
        document.getElementById("coverCount").value = coverCountValue - 1;
        const coverPrice = document.getElementById("coverPrice").innerHTML;
        const coverPriceValue = parseInt(coverPrice) - 59;
        document.getElementById("coverPrice").innerHTML = coverPriceValue;
        const subtotal = document.getElementById("subtotal").innerHTML;
        const subtotalValue = parseInt(subtotal) - 59;
        document.getElementById("subtotal").innerHTML = subtotalValue;
        document.getElementById("tax").innerHTML = subtotalValue * 1 / 10;
        const tax = document.getElementById("tax").innerHTML;
        const taxValue = parseFloat(tax);
        document.getElementById("total").innerHTML = subtotalValue + taxValue;
    }

})

//checkout button handler
const checkoutBtn = document.getElementById("checkout");
checkoutBtn.addEventListener("click", function () {
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = "none";
    const confirmationArea = document.getElementById("confirmation-area");
    confirmationArea.style.display = "block";
})

//item1 remove handler
const remove1Btn = document.getElementById("remove1");
remove1Btn.addEventListener("click", function () {
    const item1 = document.getElementById("item1");
    const phonePrice = document.getElementById("phonePrice").innerHTML;
    const phonePriceValue = parseInt(phonePrice);
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal);
    const subtotalValueAfterRemoval = subtotalValue - phonePriceValue;
    document.getElementById("subtotal").innerHTML = subtotalValueAfterRemoval;
    const taxValue = subtotalValueAfterRemoval * 1 / 10;
    document.getElementById("tax").innerHTML = taxValue;
    document.getElementById("total").innerHTML = subtotalValueAfterRemoval + taxValue;
    item1.style.display = "none";
})

//item2 remove handler
const remove2Btn = document.getElementById("remove2");
remove2Btn.addEventListener("click", function () {
    const item2 = document.getElementById("item2");
    const coverPrice = document.getElementById("coverPrice").innerHTML;
    const coverPriceValue = parseInt(coverPrice);
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal);
    const subtotalValueAfterRemoval = subtotalValue - coverPriceValue;
    document.getElementById("subtotal").innerHTML = subtotalValueAfterRemoval;
    const taxValue = subtotalValueAfterRemoval * 1 / 10;
    document.getElementById("tax").innerHTML = taxValue;
    document.getElementById("total").innerHTML = subtotalValueAfterRemoval + taxValue;
    item2.style.display = "none";
})