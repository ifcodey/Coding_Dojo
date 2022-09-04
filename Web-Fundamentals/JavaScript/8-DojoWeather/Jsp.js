
function massageAlert(val) {
    alert(val);
}

var pick = document.querySelector(".footer");
function btnRomve() {
    pick.remove();
}

var elem = document.querySelectorAll(".h3blue");
var elem1 = document.querySelectorAll(".h3red");
var temp = document.getElementById("temp");

function tempChange() {

    if (temp.value === 'F') {


        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = Math.round((parseInt(elem[i].innerText * (9 / 5)) + 32));
            elem1[i].innerText = Math.round((parseInt(elem1[i].innerText * (9 / 5)) + 32));
        }
    }
    else if (temp.value === 'C') {

        for (var i = 0; i < elem.length; i++) {
            elem[i].innerText = Math.round((parseInt((elem[i].innerText) - 32) * (5 / 9)));
            elem1[i].innerText = Math.round((parseInt((elem1[i].innerText) - 32) * (5 / 9)));
        }
    }
}

