//phone up button handler
const upBtnPhone = document.getElementById("plusPhone");
upBtnPhone.addEventListener("click", function () {
    const phoneCountValue = productCounterValueFetcher("phoneCount");
    document.getElementById("phoneCount").value = phoneCountValue + 1;
    const phonePrice = document.getElementById("phonePrice").innerHTML;
    const phonePriceValue = parseInt(phonePrice) + 1219;
    document.getElementById("phonePrice").innerHTML = phonePriceValue;
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseFloat(subtotal) + 1219;
    document.getElementById("subtotal").innerHTML = subtotalValue;
    calculateTax_UpadateTotal("tax", "total", subtotalValue);
})

//phone down button handler
const downBtnPhone = document.getElementById("minusPhone");
downBtnPhone.addEventListener("click", function () {
    const phoneCountValue = productCounterValueFetcher("phoneCount");
    if (phoneCountValue > 1) {
        document.getElementById("phoneCount").value = phoneCountValue - 1;
        const phonePrice = document.getElementById("phonePrice").innerHTML;
        const phonePriceValue = parseInt(phonePrice) - 1219;
        document.getElementById("phonePrice").innerHTML = phonePriceValue;
        const subtotal = document.getElementById("subtotal").innerHTML;
        const subtotalValue = parseInt(subtotal) - 1219;
        document.getElementById("subtotal").innerHTML = subtotalValue;
        calculateTax_UpadateTotal("tax", "total", subtotalValue);
    }
})

//cover up button handler
const upBtnCover = document.getElementById("plusCover");
upBtnCover.addEventListener("click", function () {
    const coverCountValue = productCounterValueFetcher("coverCount");
    document.getElementById("coverCount").value = coverCountValue + 1;
    const coverPrice = document.getElementById("coverPrice").innerHTML;
    const coverPriceValue = parseInt(coverPrice) + 59;
    document.getElementById("coverPrice").innerHTML = coverPriceValue;
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal) + 59;
    document.getElementById("subtotal").innerHTML = subtotalValue;
    calculateTax_UpadateTotal("tax", "total", subtotalValue);
})

//cover down button handler
const downBtnCover = document.getElementById("minusCover");
downBtnCover.addEventListener("click", function () {
    const coverCountValue = productCounterValueFetcher("coverCount");
    if (coverCountValue > 1) {
        document.getElementById("coverCount").value = coverCountValue - 1;
        const coverPrice = document.getElementById("coverPrice").innerHTML;
        const coverPriceValue = parseInt(coverPrice) - 59;
        document.getElementById("coverPrice").innerHTML = coverPriceValue;
        const subtotal = document.getElementById("subtotal").innerHTML;
        const subtotalValue = parseInt(subtotal) - 59;
        document.getElementById("subtotal").innerHTML = subtotalValue;
        calculateTax_UpadateTotal("tax", "total", subtotalValue);
    }
})

function productCounterValueFetcher(productId) {
    const count = document.getElementById(productId).value;
    const value = parseInt(count);
    return value;
}

function calculateTax_UpadateTotal(taxId, totalId, subtotalValue) {
    const taxValue = subtotalValue * 1 / 10;
    document.getElementById(taxId).innerHTML = taxValue;
    document.getElementById(totalId).innerHTML = subtotalValue + taxValue;
}

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
    const phonePrice = document.getElementById("phonePrice").innerHTML;
    const phonePriceValue = parseInt(phonePrice);
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal);
    const subtotalValueAfterRemoval = subtotalValue - phonePriceValue;
    document.getElementById("subtotal").innerHTML = subtotalValueAfterRemoval;
    calculateTax_UpadateTotal("tax", "total", subtotalValueAfterRemoval);
    const item1 = document.getElementById("item1");
    item1.style.display = "none";
})

//item2 remove handler
const remove2Btn = document.getElementById("remove2");
remove2Btn.addEventListener("click", function () {
    const coverPrice = document.getElementById("coverPrice").innerHTML;
    const coverPriceValue = parseInt(coverPrice);
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal);
    const subtotalValueAfterRemoval = subtotalValue - coverPriceValue;
    document.getElementById("subtotal").innerHTML = subtotalValueAfterRemoval;
    calculateTax_UpadateTotal("tax", "total", subtotalValueAfterRemoval);
    const item2 = document.getElementById("item2");
    item2.style.display = "none";
})