"use strict";

// voorbeeld van een gebruiker/user in JSON formaat
let user =
{
    firstName: "Koenraad",
    lastName: "Pecceu",
    age: 40,
    email:
        [
            "koenraad.pecceu@creo.be",
            "koenraad.pecceu@gmail.com"
        ],
    address:
    {
        street: "Scheutistenlaan",
        number: 45,
        postalCode: "8500",
        city: "Kortrijk"
    }
}

// array met daarin verschillende user objecten
// maak binnen deze array drie verschillende users aan met telkens dezelfde
// eigenschappen als het voorbeeld bovenaan
let users =
    [
        {
            firstName: "Koenraad",
            lastName: "Pecceu",
            age: 40,
            email:
                [
                    "koenraad.pecceu@creo.be",
                    "koenraad.pecceu@gmail.com"
                ],
            address:
            {
                street: "Scheutistenlaan",
                number: 45,
                postalCode: "8500",
                city: "Kortrijk"
            }
        },
        {
            firstName: "Sam",
            lastName: "Pollet",
            age: 30,
            email:
                [
                    "sam.pollet@creo.be",
                    "sam.pollet@gmail.com"
                ],
            address:
            {
                street: "Rozemarijnstraat",
                number: 33,
                postalCode: "8500",
                city: "Izegem"
            }
        },
        {
            firstName: "Mohamed",
            lastName: "Ahmed",
            age: 20,
            email:
                [
                    "Mohamed.Ahmed@hotmail.be"
                ],
            address:
            {
                street: "Kapucijnenstraat",
                number: 10,
                postalCode: "8870",
                city: "Izegem"
            }
        }
    ]

// alle users met city Izegem in aparte array opslaan
let usersFromIzegem = users.filter(user => user.address.city === "Izegem");

// find toont enkel het eerste gevonden resultaat
// usersFromIzegem = users.find(x => x.address.city === "Izegem");

// eerste user opslaan in localstorage
// localStorage.setItem("user",users[0]);
// user ophalen uit localStorage
// let storedUser = localStorage.getItem("user");
// console.log(storedUser.firstName); 
// bij test blijkt dat dit niet meer bruikbaar is

// eerste user opslaan in localstorage
localStorage.setItem("user",JSON.stringify(users[0]));
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.firstName);