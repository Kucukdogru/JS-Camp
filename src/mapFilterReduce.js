let cart = [
    { id: 1, productName: "Telefon", quantity: 2, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 3, unitPrice: 100 },
    { id: 3, productName: "Kalem", quantity: 3, unitPrice: 400 },
    { id: 4, productName: "Şarj Aleti", quantity: 3, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 40 }
]
/************Map********/
// Map
// Elemanları tek tek dolaşmaya yarar. Elemanlar üzerinde istediğimiz çalışmayı yapıp yepyeni bir dizi döndürebiliriz. Her bir elemana takma isim veririz.
cart.map(product => console.log(product.productName))
cart.map(product => console.log(product))
console.log("<ul>");
cart.map(product => {
    console.log("<li>" + product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>");

// Reduce
let total = cart.reduce((acc, product) => acc + product.unitPrice, 0) // 0 -> acc'nin başlangıç değeri
let total2 = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log(total);  // 4640
console.log(total2); // 9920

console.log(cart);




/**********Filter */
// Filtreleme yapmak için kullandığımız bir yapıdır. Amaç yeni bir dizi oluşturmak
let quantityOver2 = cart.filter(product => product.quantity > 2)

console.log(quantityOver2);

function addToCart(sepet) {
    sepet.push({ id: 6, productName: "Kulaklık", quantity: 3, unitPrice: 140 })
}

addToCart(cart)

console.log(cart);

let sayi = 10;

function sayiTopla(number) {
    number += 1;
    console.log(number);  // 11
}

sayiTopla(sayi)
console.log(sayi); // 10