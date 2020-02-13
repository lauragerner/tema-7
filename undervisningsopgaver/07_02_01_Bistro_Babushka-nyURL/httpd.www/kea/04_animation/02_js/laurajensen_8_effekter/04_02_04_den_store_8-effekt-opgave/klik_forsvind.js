//Først og fremmest sørger vi for, at siden er loaded helt færdig og giver os beskeden i konsollen at "siden er loaded" via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }

window.addEventListener("load", start);

function start() {
    console.log("siden er loaded");
}

//Vi tilføjer en event der lytter efter at når vi klikker på "red_container", så skal der ske en funktion som vi definerer nedenunder

document.querySelector("#red_container").addEventListener("click", boxRedClickHandler);


//Her starter den funktion som vi lyttede efter - Derefter skrives der "boxRedClickHandler" i konsollen, for at fortælle os selv at funktionen er sat igang.
//Herefter definerer vi, hvad vi gerne vil have til der skal ske med #red_container"; nemlig at vi skal få den tl at forsvinde ved at tilføje "forsvind"

function boxRedClickHandler() {
    console.log("boxRedClickHandler");
    document.querySelector("#red_container").classList.add("forsvind");
}
