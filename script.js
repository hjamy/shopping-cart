//phone up button handler
const upBtnPhone = document.getElementById("plusPhone");
upBtnPhone.addEventListener("click", function () {
    const phoneCount = document.getElementById("phoneCount").value;
    const phoneCountValue = parseInt(phoneCount);
    document.getElementById("phoneCount").value = phoneCountValue + 1;
})

//phone down button handler
const downBtnPhone = document.getElementById("minusPhone");
downBtnPhone.addEventListener("click", function () {
    const phoneCount = document.getElementById("phoneCount").value;
    const phoneCountValue = parseInt(phoneCount);
    if (phoneCountValue > 1) {
        document.getElementById("phoneCount").value = phoneCountValue - 1;
    }

})

//cover up button handler
const upBtnCover = document.getElementById("plusCover");
upBtnCover.addEventListener("click", function () {
    const coverCount = document.getElementById("coverCount").value;
    const coverCountValue = parseInt(coverCount);
    document.getElementById("coverCount").value = coverCountValue + 1;
})

//cover down button handler
const downBtnCover = document.getElementById("minusCover");
downBtnCover.addEventListener("click", function () {
    const coverCount = document.getElementById("coverCount").value;
    const coverCountValue = parseInt(coverCount);
    if (coverCountValue > 1) {
        document.getElementById("coverCount").value = coverCountValue - 1;
    }

})