
// var newarr = [];
// function calc(arr) {
//             newarr.push(arr[0]);


//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > newarr[newarr.length - 1]) {
//             newarr.push(arr[i]);
//         }
//     }

//     return newarr;
// }


// console.log(calc([10, -1, 7, 3]));

// -------------------------

var newarr = [];
function calc(arr) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] <= 0) {
            // arr.pop(arr[j]);
        }else {
            newarr.push(arr[0]);
        }
    }

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > newarr[newarr.length - 1]) {
        newarr.push(arr[i]);
    }
}

return newarr;
}

console.log(calc([-1, -4, 7, 3]));