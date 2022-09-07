function reverseString(Arr){
    var revers = "";
    for(var i = 0; i < Arr.length;i--) {
        revers += Arr[i]; 
    }
    return revers;
}

console.log(revers("Ahmed"));

// --------------------------------
// function revered(arr) {
//     var i = 0;
//     var revers = "";
//     if(i != arr.length){
//         revers += arr[i];
//         i++;
//         revered();
//     }
//     return revers;

// }

//     console.log(revered("Ahmed"));