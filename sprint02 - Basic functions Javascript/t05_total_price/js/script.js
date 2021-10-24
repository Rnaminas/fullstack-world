function total(addCount = 0, addPrice = 0, currentTotal = 0) {
    currentTotal += addCount*addPrice;
    return Number.parseFloat(currentTotal).toFixed(2);
}
let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum); // will return 1.08
sum = total(4, 10, sum);
sum = total(8, 14);
console.log(sum); // will return 1.08
sum = total(7, 10, sum);
sum = total(88, 26.894);
console.log(sum); // will return 1.08