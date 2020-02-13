//Først og fremmest sørger vi for, at siden er loaded helt færdig og giver os beskeden i konsollen at "siden er loaded" via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }

window.addEventListener("load", start);

function start() {
    console.log("Siden er loaded");
    //    Vi tilføjer en event der lytter efter at når vi klikker på "red_container", så skal der ske en funktion som definerer som "boxRedClickHandler"
    document.querySelector("#red_container").addEventListener("click", boxRedClickHandler);
}

//Her starter den funktion som vi lyttede efter - vi skriver funktionens navn i konsollen for at vise at den er startet.
function boxRedClickHandler() {
    console.log("boxRedClickHandler");
    //    I dette tilfælde vi vi gerne få "red_container" til at forsvinde, så vi tilføjer classen "forsvind"
    document.querySelector("#red_container").classList.add("forsvind");
    //    Derefter vil vi også gerne have at der skal ske noget når "red_container" er færdig med at forsvinde, dette gør vi ved at lytte til hvornår animationen slutter, ved at tilføje en event der hedder "animationend"
    document.querySelector("#red_container").addEventListener("animationend", boxBlueHop);
}

//For at få "blue_container" til at hoppe, så tilføjer vi classen "hop"

function boxBlueHop() {
    console.log("boxBlueHop");
    document.querySelector("#blue_container").classList.add("hop");
}
