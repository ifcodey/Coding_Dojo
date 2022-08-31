var pickit = document.querySelector("#h1-pick")
counter=2;
counter1= 500;
function funChange() {
    pickit.innerText = "Ahmed";

}
function close1(){
    counter-=1;
    document.getElementById("li1").remove();
    document.getElementById("counter").innerText=counter;
}

function close2(){
    counter-=1;
    document.getElementById("li2").remove();
    document.getElementById("counter").innerText=counter;
}

function add1(){
    counter-=1;
    counter1+=1;
    document.getElementById("li1").remove();

    document.getElementById("counter").innerText=counter;
    document.getElementById("counter1").innerText=counter1;
}

function add2(){
    counter-=1;
    counter1+=1;
    document.getElementById("li2").remove();

    document.getElementById("counter").innerText=counter;
    document.getElementById("counter1").innerText=counter1;
}