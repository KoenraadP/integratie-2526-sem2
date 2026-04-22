"use strict";

let library =
{
  books: [
    { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925 }
  ],
  libraryMembers: [
    { name: "Alice Johnson", membershipId: 101, borrowedBooks: ["1984", "The Great Gatsby"] },
    { name: "Bob Smith", membershipId: 102, borrowedBooks: ["To Kill a Mockingbird"] },
    { name: "Charlie Brown", membershipId: 103, borrowedBooks: [] }
  ],
  staffMembers: [
    {
      name: "Jane Doe",
      role: "Librarian",
      employeeId: 201,
      address: { street: "123 Library St", city: "Booktown", state: "CA", zipCode: "90210" }
    },
    {
      name: "John Roe",
      role: "Assistant",
      employeeId: 202,
      address: { street: "456 Archive Ln", city: "Readsville", state: "NY", zipCode: "10001" }
    },
    {
      name: "Emily Green",
      role: "Archivist",
      employeeId: 203,
      address: { street: "789 Catalog Rd", city: "Indexville", state: "TX", zipCode: "73301" }
    }
  ]
};

// -----------------------------------------------------------------------------------
// oefening deel 1
// plaats de 'antwoorden' van de oefeningen hieronder telkens in de console met console.log()
// -----------------------------------------------------------------------------------

// toon ALLE data van library
console.log(library);

// toon alle boeken
console.log(library.books);

// toon de naam van de eerste libraryMember
console.log(library.libraryMembers[0].name);

// toon het volledige adres op van de tweede staffMember
console.log(library.staffMembers[1].address);

// toon de city van de derde staffMember
console.log(library.staffMembers[2].address.city);

// toon de role van de staffMember met id 201 ZONDER gebruik te maken van staffMembers[0]
console.log(library.staffMembers.find(x => x.employeeId === 201).role);

// toon alle boeken waarvan het jaar VOOR 1950 ligt
console.log(library.books.filter(x => x.year < 1950));

// -----------------------------------------------------------------------------------
// oefening deel 2
// -----------------------------------------------------------------------------------

// library object omzetten naar string formaat en opslaan in nieuwe variabele
let libraryString = JSON.stringify(library);

// library in string formaat tonen in console
console.log(libraryString);

// library string opslaan in localStorage
localStorage.setItem("library",libraryString);

// library string ophalen uit localStorage en opslaan in nieuwe variabele
let storedLibrary = localStorage.getItem("library");

// opgehaalde library tonen in console
console.log(storedLibrary);

// alle libraryMembers tonen via opgehaalde library
let libraryJSON = JSON.parse(storedLibrary);
console.log(libraryJSON.libraryMembers);
