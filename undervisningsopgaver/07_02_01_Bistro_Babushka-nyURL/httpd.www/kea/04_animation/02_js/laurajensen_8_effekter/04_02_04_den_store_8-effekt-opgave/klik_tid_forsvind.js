//Først og fremmest sørger vi for, at siden er loaded helt færdig og giver os beskeden i konsollen at "siden er loaded" via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }

window.addEventListener("load", start);

function start() {
    console.log("siden er loaded");
    //    vi tilføjer en event der lytter efter, at når vi klikker på "red_container", så skal der ske en funktion som vi definerer nedenunder
    document.querySelector("#red_container").addEventListener("click", boxRedClickHandler);
}

//Her starter den funktion som vi lyttede efter - Nu skrives der "boxRedClickHandler" i konsollen for at fortælle at funktionen er fået igang

function boxRedClickHandler() {
    //    Vi vil gerne have, at der går et sekund (1000milisekunder) før at vores handling sker. Dette gør vi ved, at tilføje en funktion og "delayer" den ved setTimeout-funktionen, og definerer funktionen timer nedenunder.
    setTimeout(timer, 1000);
}

function timer() {
    //Vi tilføjer classen "forsvind" til red_container, for at få bolden til at forsvinde
    console.log("boxRedClickHandler");
    document.querySelector("#red_container").classList.add("forsvind");
}
