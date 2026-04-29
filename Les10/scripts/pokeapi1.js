"use strict";

// basis 'endpoint' van API opslaan in constante
const apiUrl = "https://pokeapi.co/api/v2/";

// fetch --> informatie ophalen uit correcte API endpoints
fetch(apiUrl + "pokemon/")
    // 'antwoord' van de API call omzetten naar bruikbare JSON
    .then(response => {
        // checken of API call wel gelukt is
        if (response.ok) return response.json();
        else throw new Error("HTTP error: " + response.status);
    })
    .then(data => {
        // data --> ALLE data die in de response zit
        // console.log(data);
        // specifiek de pokemon array apart opslaan in variabele
        let pokemonArray = data.results;
        console.log(pokemonArray);
        // list div koppelen
        let divPokemonList = document.getElementById("pokemon-list");
        // ordered list html element maken (ol)
        let olPokemon = document.createElement("ol"); // <ol></ol>
        let liPokemon = document.createElement("li"); // <li></li>
        liPokemon.textContent = capitalise(pokemonArray[0].name); // <li>bulbasaur</li>
        // li element IN ol steken
        olPokemon.append(liPokemon); // <ol><li>bulbasaur</li></ol>
        // ol element IN div steken
        divPokemonList.append(olPokemon); // <div><ol><li>bulbasaur</li></ol></div>
    })
    .catch(error => console.log(error.message));

    // function om de eerste letter van een string
    // om te zetten naar een hoofdletter
    function capitalise(word) {
        let firstLetter = word[0].toUpperCase();
        let restOfWord = word.substring(1).toLowerCase(); // alle letters vanaf de tweede letter (index 1)
        return firstLetter + restOfWord;
    }