// First Solution

/*

function addUp(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; i < arr.length; j++) {
            if (arr[i] + arr[j] == target && i != j) {
                return [i, j];
            }
        }
    }
}
console.log(addUp([2,7,11,15],9));

*/

// Second Solution without nested loop

function addUp(arr, target) {
    var i = 0;
    var j = 0;
    while (i < arr.length - 1) {
        if (arr[i] + arr[j] == target && i != j) {
            var result = [i, j];
        }
        j++
        if (j == arr.length - 1) {
            i++;
            j = 0;
        }
    }
    return result;
}

console.log(addUp([2,7,11,15],9));

// Third Solution without nested loop