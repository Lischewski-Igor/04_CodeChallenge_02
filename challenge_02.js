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


// let name1, age;
// name1 = prompt("Please enter your name: ");
// age = parseInt(prompt("Please enter your age: "));
// console.log("Name: " + name1 + " // " + "Age: " + age);

// switch (true) {
//     case (age >= 0, age <= 5):
//         console.log("Hi, at this age milk is your best friend!");
//         break;

//     case (age >= 6, age <= 12):
//         console.log("Hi, now you can drink juice besides milk!");
//         break;

//     case (age >= 13, age <= 17):
//         console.log("You can drink cola now, but better drink juice or milk!");
//         break;

//     case (age >= 18, age <= 117):
//         console.log("Whisky and Cola Queen of Danc floor!");
//         break;

//     case (age >= 118):
//         console.log("World record broken!");
//         break;

//     default:
//         console.log("please repeat!")
//         break;
// }


/* //Valentin
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

//  //Drazen
// let firstName = prompt("Bitte Namen eingeben:");
// let age = prompt("Bitte Alter eingeben:");

// if (firstName == "") { // empty string
//     firstName = "Unbekannt";  
// } 

// console.log(firstName + ", " + age + " Jahre alt");

// if (age >= 0 && age <= 5 && age != "") {  // 0-5
//     console.log("Milch.");
// } else if (age >= 6 && age <= 12) { // 6-12
//     console.log("Milch und Saft.");
// } else if (age >= 13 && age <= 17) { // 13-17
//     console.log("Milch, Saft und Cola.");
// } else if (age >= 18) { // 18+
//     console.log("Milch, Saft, Cola und Wein.");
// } else { // negative number or NaN
//     console.log("Ungültiges Alter.");
// }

// // Holger 1.0
// let age, firstName;

// firstName = prompt("Gib bitte deinen Namen ein:");
// age = parseInt(prompt("Gib bitte dein Alter ein:"));

// console.log("Namen:", firstName);
// console.log("Alter:", age);

// switch (true) {
//     case age < 6:
//         console.log(firstName + ", du darfst nur Milch trinken!!!");
//         break;
//     case (age > 5) && (age < 13):
//         console.log(firstName + ", du darfst Saft trinken!!!");
//         break;
//     case (age > 12) && (age < 18):
//         console.log(firstName + ", du darfts Cola trinken!!!");
//         break;
//     case age > 17:
//         console.log(firstName + ", du darfst Wein trinken!!!");
//         break;
//     default:
//         break;
// }

// // Holger 2.0
// let age, firstName, sex;

// firstName = prompt("Gib bitte deinen Namen ein:");
// age = parseInt(prompt("Gib bitte dein Alter ein:"));
// sex = prompt("Bitte geschlächt eingeben:");

// switch (sex) {
//     case "w":
//         switch (true) {
//             case age < 6:
//                 console.log(firstName + ", du darfst nur Milch trinken!!")
//                 break;
//             case (age > 5) && (age < 13):
//                 console.log(firstName + ", du darfst Saft trinken!!!");
//                 break;
//             case (age > 12) && (age < 18):
//                 console.log(firstName + ", du darfts Cola trinken!!!");
//                 break;
//             case (age > 17) && (age < 50):
//                 console.log(firstName + ", du darfst Wein trinken!!!");
//                 break;
//             case age > 50:
//                 console.log(firstName + ", du darfst Likörchen trinken!!!");
//                 console.log("PROST");
//                 break;
//             default:
//                 break;
//         }
//         break;
//     case "m":
//         switch (true) {
//             case age < 6:
//                 console.log(firstName + ", du darfst nur Milch trinken!!")
//                 break;
//             case (age > 5) && (age < 13):
//                 console.log(firstName + ", du darfst Saft trinken!!!");
//                 break;
//             case (age > 12) && (age < 18):
//                 console.log(firstName + ", du darfts Cola trinken!!!");
//                 break;
//             case (age > 17) && (age < 50):
//                 console.log(firstName + ", du darfst Whisky trinken!!!");
//                 break;
//             case age > 50:
//                 console.log(firstName + ", du darfst Schnaps trinken!!!");
//                 console.log("PROST");
//                 break;
//             default:
//                 break;
//         }
//         break;
//     default:
//         console.log("Du hast kein Geschlecht angegeben!!!")
//         break;
// }

// Stefan
let vorname = prompt("Bitte geben Sie Ihren Vornamen ein:");

while (isNaN(vorname) == false)
{
    vorname = prompt("Bitte geben Sie Ihren Vornamen ein:");
}

let age = parseInt(prompt("Bitte geben Sie Ihr alter ein:"));

while (isNaN(age) || age >= 130) {
    age = prompt("Bitte geben Sie ein valides Alter ein:");
}

switch (true) {
    case (age >= 0 && age <= 5): console.log(vorname + " darf Milch trinken."); break;
    case (age >= 6 && age <= 12): console.log(vorname + " darf Saft trinken."); break;
    case (age >= 13 && age <= 17): console.log(vorname + " darf Cola trinken."); break;
    case (age >= 18): console.log(vorname + " darf Wein trinken."); break;
    default: console.log("WOOT?!?"); break;
}