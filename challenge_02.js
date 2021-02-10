/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/


let name1, age;
name1 = prompt("Please enter your name: ");
age = parseInt(prompt("Please enter your age: "));
console.log("Name: " + name1 + " // " + "Age: " + age);

let milk, juice, cola, whisky, record;

milk = (age >= 0, age <= 5);
juice = (age >= 6, age <= 12);
cola = (age >= 13, age <= 17);
whisky = (age >= 18, age <= 117);
record = (age >= 118);

switch (true) {
    case (milk):
        console.log("Hi, at this age milk is your best friend!");
        break;

    case (juice):
        console.log("Hi, now you can drink juice besides milk!");
        break;

    case (cola):
        console.log("You can drink cola now, but better drink juice or milk!");
        break;

    case (whisky):
        console.log("Whisky and Cola Queen of Danc floor!");
        break;

    case (record):
        console.log("World record broken!");
        break;

    default:
        console.log("please repeat!")
        break;
}


/*
let vorname, alter;
vorname = prompt("Bitte name eingeben");
alter = parseInt(prompt("Bitte alter eingeben"));

console.log(vorname, alter);

if (alter <= 5) {
   console.log("Hallo " + norname + ", willst du Milch?"); 
} else if (alter <= 12) {
    console.log("Hallo " + vorname + ", willst du Saft oder Milch?");
} else if (alter <= 17) {
    console.log("Hallo " + vorname + ", willst du Cola, Saft oder Milch?");
} else {
    console.log("Hallo " + vorname + ", willst du Bier, Cola, Saft oder Milch?");
}
*/