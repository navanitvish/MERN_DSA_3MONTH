// ✅ Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}

console.log(reverseArray([1,2,3,4,5]));

function findMax (arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(findMax([1,2,3,4,5]));

// ✅ Sum of array
function sumArray(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));