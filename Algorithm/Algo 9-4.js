// var fruits = ["Bunana", "Orange", "Apple", "Mango"];

// function addFirst(arr, vab) {
//     var newarr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newarr[0] = vab;
//         newarr[i+1] = arr[i];
//     }
//     return newarr;
// }
//  fruits = addFirst(fruits,"Kiwi");
//  console.log(fruits);

// ----------------------------------------

var fruits = ["Bunana", "Orange", "Apple", "Mango"];

function removeAt(arr, pos) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (i != pos) {
            newarr[i] = arr[i];
        } 
    }

    return newarr;
}
fruits = removeAt(fruits, 1);
console.log(fruits);