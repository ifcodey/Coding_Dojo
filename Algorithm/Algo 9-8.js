// var binarySearch = function(arr,elem){
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor(start + end / 2);
//     while(arr[middle] !== elem && start <= end){
//         if(elem<arr[middle]){
//             end=middle-1;
//         }else{
//             start = middle+1;
//         }
//         middle = Math.floor((start+end)/2)
//     }
// if(arr[middle] === elem){
//     return middle;
// }
// return -1;
// return arr[middle] === elem ? middle : -1;
// }
// console.log(binarySearch([2,4,6,9,11,14,20,25,28,40],11)) 
// ------------------------------------------------------------------
// function naiveSearch(str, word){
//     var count = 0;
//     for(var i = 0; i < str.length; i++){
//         for(var j = 0; j < word.length; j++){
//             if(word[j] !== str[i+j]) break;
//             if(j === word.length - 1) count++;
//         }
//     }
//     return count;
// }
// console.log(naiveSearch("search and find", "an"))

// ----------------------------------------------
function slipFun(arr) {
    var newArr = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ' ' && arr[i] != "," && arr[i] != ".") {
            newArr += arr[i];

        }
        else {
            newArr += "";

        }
    }
    return newArr;

}

console.log(slipFun("play that funky music"));
