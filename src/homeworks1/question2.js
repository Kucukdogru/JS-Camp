// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.

// 220 - 284

let number1 = 220;
let number2 = 284;
let sum1 = 0;
let sum2 = 0;

for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
        sum1 += i;
    }
}

for (let i = 1; i < number2; i++) {
    if (number2 % i == 0) {
        sum2 += i;
    }
}

if (sum2 === number1 && sum1 === number2) {
    console.log("Bu iki sayi arkadaş sayılardır");
} else {
    console.log("Bu iki sayı arkadas sayı değildir");
}


// Fonksiyon ile yapımı
function findFrindNumber(number1, number2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 += i;
        }
    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            sum2 += i;
        }
    }

    if (sum2 === number1 && sum1 === number2) {
        console.log("Bu iki sayi arkadaş sayılardır");
    } else {
        console.log("Bu iki sayı arkadas sayı değildir");
    }

}

findFrindNumber(220, 284);