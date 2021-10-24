function sortEvenOdd(arrayToSort) {
    if (Array.isArray(arrayToSort) === true) {
        arrayToSort.sort(function (a, b) {
            return (Number.isInteger(a / 2) === true) ? -1 : 1;
        });
        return arrayToSort;
    }
}

const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
const arr1 = [11, 2, 10, 51, 13, 36, 8, 55, 8, 10, 70, 112];
const arr2 = [62, 24, 152, 50, 11, 13, 19, 19, 28, 101, 11, 11];
sortEvenOdd(arr);
sortEvenOdd(arr1);
sortEvenOdd(arr2);
console.log(arr); // (12) [2, 6, 8, 8, 10, 1, 1, 3, 5, 7, 11, 15]
console.log(arr1);
console.log(arr2);