

function pizzaOven(crust, sauce, chesses, toppings) {
    var Pizza =
    {
        crust: crust,
        sauce: sauce,
        chesses: chesses,
        toppings: toppings
    };

    return Pizza;
}
var result_N1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
console.log(result_N1);

var result_N2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(result_N2);

var result_N3 = pizzaOven("hand tossed","marinara",["mozzarella"],["mushrooms","sausage","onions"]);
console.log(result_N3);

var result_N4 = pizzaOven("hand tossed","marinara",["mozzarella"],["mushrooms","pepperoni","onions"]);
console.log(result_N4);

// the bouns task



function pickPizza(arr) {
    var pick_rand = Math.floor(Math.random() * arr.length);
    return arr[pick_rand];
}

function giveMyRandamPizza(){
    const crust = ['marinara, hand tossed', 'mushrooms'];
    const sauce = ['traditional', 'feta', 'mushrooms'];
    const chesses = [["marinara"],  ["mozzarella", "feta"], ['mushrooms', 'mix', 'marinara']];
    const toppings = [["pepperoni", "sausage"], ["mushrooms", "olives", "onions"]];

    return pizzaOven(pickPizza(crust),pickPizza(sauce),pickPizza(chesses),pickPizza(toppings));
    }
 console.log(giveMyRandamPizza());