console.log("Hello World!");

// Variable definition
var dollarYesterday = 9.20
// JS is not Type Safety 
//dollarYesterday = "Konya"
console.log(dollarYesterday);
var dollarToday = 9.30


// Let
{
    let dollarYesterday = 9.10
    let dollarToday = 9.30
}

console.log(dollarYesterday);

const euroYesterday = 11.2
//euroYesterday = 11 -> euroYesterday is read-only
console.log(euroYesterday);

// Array
// camelCasing -> variables
// PascalCasing
let housingLoans = ["Konut Kredisi", "Taşıt Kredisi", 12, ["a", "b"]]
console.log(housingLoans);
console.log("<ul>");
for (let i = 0; i < housingLoans.length; i++) {
    console.log("<li>" + housingLoans[i] + "</li>");
}
console.log("</ul>");


