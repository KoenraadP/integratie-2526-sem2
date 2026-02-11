"use strict";

// alle elementen met class .tab-icon en .tab-content-item opzoeken in document
// en samen in een verzameling variabele steken
let tabIcons = document.querySelectorAll(".tab-icon");
let tabContentItems = document.querySelectorAll(".tab-content-item");

// zelfde click event toevoegen aan alle tabicons
tabIcons.forEach(element => {
    element.addEventListener("click", function () {
        // alle randen eerst verwijderen
        removeBorders();
        // alle content items onzichtbaar maken
        removeShow();
        // rand toevoegen aan huidig actief element
        this.classList.add("tab-border");
        // id van huidige div opslaan (tab-1, tab-2 of tab-3)
        let activeId = this.id;
        // gekoppeld content blokje zoeken in de HTML
        // resultaat zal zijn, bijvoorbeeld: #tab-1-content
        let chosenContentDiv = document.querySelector("#" + activeId + "-content");
        // class show geven aan gekoppelde content div
        chosenContentDiv.classList.add("show");
    })
});

// function die bij alle tabicons de class tab-border verwijdert
function removeBorders() {
    tabIcons.forEach(element => {
        element.classList.remove("tab-border");
    });
}

// function die bij alle tabcontentitems de class show verwijdert
function removeShow() {
    tabContentItems.forEach(element => {
        element.classList.remove("show");
    });
}