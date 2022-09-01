// function removeNegative(arr){
//     var i = 0;
//     while (i => 0 ){
//         removeNegative();
//         arr.pop(i);
//         i++;
//         if (i < 4){
//             break;
//         }
//     }
//     return arr;
// }

// var result = console.log(removeNegative([1,-1,-5,6,8]));

// ----------------------------------------------------------------

// function removeNegative(arr) {
//     var arra = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             arra.push(arr[i]);
//         }
//     }
//     return arra;
// }
// var result = console.log(removeNegative([1, -1, -5, 6, 8]));

// ----------------------------------------------------------------

arr = [1,-1,4,6,-4];
function removeNegative(pos) {return pos > 0;}
var result = console.log(arr.filter(removeNegative));