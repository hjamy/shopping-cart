//phone up button handler
const upBtnPhone = document.getElementById("plusPhone");
upBtnPhone.addEventListener("click", function () {
    const phoneCount = document.getElementById("phoneCount").value;
    const phoneCountValue = parseInt(phoneCount);
    document.getElementById("phoneCount").value = phoneCountValue + 1;
    const phonePrice = document.getElementById("phonePrice").innerHTML;
    const phonePriceValue = parseInt(phonePrice);
    document.getElementById("phonePrice").innerHTML = phonePriceValue + 1219;
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal);
    document.getElementById("subtotal").innerHTML = subtotalValue + 1219;
})

//phone down button handler
const downBtnPhone = document.getElementById("minusPhone");
downBtnPhone.addEventListener("click", function () {
    const phoneCount = document.getElementById("phoneCount").value;
    const phoneCountValue = parseInt(phoneCount);
    if (phoneCountValue > 1) {
        document.getElementById("phoneCount").value = phoneCountValue - 1;
        const phonePrice = document.getElementById("phonePrice").innerHTML;
        const phonePriceValue = parseInt(phonePrice);
        document.getElementById("phonePrice").innerHTML = phonePriceValue - 1219;
        const subtotal = document.getElementById("subtotal").innerHTML;
        const subtotalValue = parseInt(subtotal);
        document.getElementById("subtotal").innerHTML = subtotalValue - 1219;
    }

})

//cover up button handler
const upBtnCover = document.getElementById("plusCover");
upBtnCover.addEventListener("click", function () {
    const coverCount = document.getElementById("coverCount").value;
    const coverCountValue = parseInt(coverCount);
    document.getElementById("coverCount").value = coverCountValue + 1;
    const coverPrice = document.getElementById("coverPrice").innerHTML;
    const coverPriceValue = parseInt(coverPrice);
    document.getElementById("coverPrice").innerHTML = coverPriceValue + 59;
    const subtotal = document.getElementById("subtotal").innerHTML;
    const subtotalValue = parseInt(subtotal);
    document.getElementById("subtotal").innerHTML = subtotalValue + 59;
})

//cover down button handler
const downBtnCover = document.getElementById("minusCover");
downBtnCover.addEventListener("click", function () {
    const coverCount = document.getElementById("coverCount").value;
    const coverCountValue = parseInt(coverCount);
    if (coverCountValue > 1) {
        document.getElementById("coverCount").value = coverCountValue - 1;
        const coverPrice = document.getElementById("coverPrice").innerHTML;
        const coverPriceValue = parseInt(coverPrice);
        document.getElementById("coverPrice").innerHTML = coverPriceValue - 59;
        const subtotal = document.getElementById("subtotal").innerHTML;
        const subtotalValue = parseInt(subtotal);
        document.getElementById("subtotal").innerHTML = subtotalValue - 59;
    }

})