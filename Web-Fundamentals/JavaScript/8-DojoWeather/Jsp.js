
function massageAlert0() {
    alert("Burbank");
}

function massageAlert1() {
    alert("Chicago");
}

function massageAlert2() {
    alert("Dallas");
}

var pick = document.querySelector(".footer");
function btnRomve() {
    pick.remove();
}

var temp = document.querySelector(".h3blue").values;
counter = temp + (32);
function tempChange() {
temp.innerText = counter;
}