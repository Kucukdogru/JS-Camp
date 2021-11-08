// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
let perfectNumber = [];
for (let k = 1; k < 1000; k++) {
    let sum = 0;
    for (let i = 1; i < k; i++) {
        if (k % i == 0) {
            sum += i;
        }
    }
    if (k == sum) {
        console.log(k + " sayısı mükemmel sayıdır");
        perfectNumber += k + " ";
    } else {
        console.log(k + " sayısı mükemmel sayı değildir!");
    }
}

console.log(perfectNumber);