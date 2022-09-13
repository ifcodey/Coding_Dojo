// Alert Massege
function contact_Us() {
    alert("Contact us at 555-5555");
}

// select Change

var ele = document.getElementById("List_choose"); 
var x_1;
function List_choose() {
    if (ele.value === 'Best_Selling') {
        document.querySelector("#Select_Op").innerText = "Best Selling";

    }
    else if (ele.value === 'Price') {
        document.querySelector("#Select_Op").innerText = "Price";
    }

}


// Buttin Buy and Cart

var counter2 = parseInt(document.getElementById("product_num0").innerText);
var counter1 = parseInt(document.getElementById("product_num1").innerText);
function Buy(elem) {
    counter1 --;
    counter2 ++;
    document.querySelector("#product_num0").innerText = counter2;
    document.querySelector("#product_num1").innerText = counter1;
    elem.remove();
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