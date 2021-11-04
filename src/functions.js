function addToCart(productName) {
    console.log("Sepete eklendi. Ürün : " + productName);
}

addToCart();              // Sepete eklendi. Ürün : undefined -> tanımlanmamış
addToCart("Bilgisayar");  // Sepete eklendi. Ürün : Bilgisayar
addToCart("Defter");      // Sepete eklendi. Ürün : Defter
addToCart(15);            // Sepete eklendi. Ürün : 15


function addToCart2(quantity, productName = "Elma") {
    console.log("Sepete eklendi. Ürün : " + productName + " Adet: " + quantity);
}

addToCart2(10);  // Sepete eklendi. Ürün : Elma Adet: 10

// Error Functions
let sayHello = () => {
    console.log("Hello World!");
}

sayHello();

let sayHello2 = function () {
    console.log("Hello World 2!");
}

sayHello2();


function addToCart3(productName, quantity, unitPrice) {

}

addToCart3("Elma", 5, 10);
addToCart3("Limon", 2, 15);


// Object notation
let product1 = { productName: "Elma", quantity: 5, unitPrice: 10 }

function addToCart4(product) {
    console.log("Ürün: " + product.productName);
    console.log("Adet: " + product.quantity);
    console.log("Fiyat: " + product.unitPrice);
}
addToCart4(product1);

let product2 = { productName: "Elma", quantity: 5, unitPrice: 10 }
let product3 = { productName: "Elma", quantity: 5, unitPrice: 10 }

// Objeler, diziler referans tip
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);  // Karpuz


// Sayılar(primitif tipler) değer tip
let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);  // 20


function addToCart5(products) {
    console.log(products);
}

let products = [
    { productName: "Elma", quantity: 5, unitPrice: 10 },
    { productName: "Muz", quantity: 5, unitPrice: 10 },
    { productName: "Limon", quantity: 5, unitPrice: 10 }
]

addToCart5(products);

function add(number1, number2) {
    console.log(number1 + number2);
}

function add2(number1, number2, number3) {
    console.log(number1 + number2 + number3);
}

// rest operator
function add3(...numbers) {
    console.log(numbers);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        total = total + numbers[i];
    }
    console.log(total);
}

// Not: Rest operatörünün yanında başka parametreler de varsa rest operatörünü en sona yaz.
function add4(bisey, ...numbers) {
    console.log(bisey);
}

add(20, 30);
add3(20, 30, 40)
add4(45, 10, 25);  // bisey = 45
// İlk parametre bisey, diğer kalanlar numbers


let numbers = [30, 25, 500, 21, 100];
console.log(Math.max(30, 25, 500, 21, 100));  // 500
console.log(Math.max(...numbers)); // 500

let [icAnadolu, marmara, karadeniz] = ["İç Anadolu Bölgesi", "Marmara Bölgesi", "Karadeniz Bölgesi"];

console.log(icAnadolu);  // İç Anadolu Bölgesi
console.log(marmara);


let [icAnadoluB, marmaraB, karadenizB, [icSehir, marSehir, karaSehir]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Kocaeli"],
        ["Rize", "Trabzon"]
    ]
]

console.log(icAnadoluB.name);
console.log(icAnadoluB.population);
console.log(marmaraB.name);
console.log(marmaraB.population);
console.log(karadenizB);  // {name: 'Karadeniz', population: '10M'}
console.log(icSehir);  // ['Ankara', 'Konya']
console.log(marSehir); // ['İstanbul', 'Kocaeli']
console.log(karaSehir); // ['Rize', 'Trabzon']

let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 15 })

console.log(newProductName);  // Elma
console.log(newUnitPrice);    // 10
console.log(newQuantity);     // 15