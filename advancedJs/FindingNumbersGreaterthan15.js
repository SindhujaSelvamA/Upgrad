const a = [10, 20, 30];

function findElements(arr) {
   let newArr = [], index = 0;
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] >= 15) {
           newArr[index++] = arr[i];
       }
   }
   return newArr;
}

let arr = findElements(a);
console.log(arr);