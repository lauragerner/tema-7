//Først og fremmest sørger vi for, at siden er loaded helt færdig og giver os beskeden i konsollen at "siden er loaded" via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }
window.addEventListener("load", start);

function start() {
    console.log("start");
    //    I dette tilfælde vil vi gerne have at "#red_container" begynder at flyve med det samme, derfor tilføjer vi classen "flyv" til den, ligeså snart siden er loaded
    document.querySelector("#red_container").classList.toggle("flyv");
}

//Derefter vil vi gerne tilføje en event der lytter til når der klikke på "#red_container" og "red_sprite". Fordi en div ikke kan have 2 animationer på samme tid, er vi nødt til at lave en animation på container og en på sprite. Ligesom vi gjorde med fodbolden
document.querySelector("#red_container").addEventListener("click", boxClickHandler);
document.querySelector("#red_sprite").addEventListener("click", boxClickHandler);

//Hvad vil vi gerne have at denne funktion skal gøre når der klikkes ? jo, i dette tilfælde vil vi gerne gøre to ting, nemlig "frys".Det vigtige her er at vi også skal få den til at dreje, så hvis du tilføjer "drej"
//til "#red_container"
//nu, så virker det ikke(da du lige har sat en animation igang(frys)), vi skal her target red_sprite og få den til at dreje ved at tilføje classen "drej".

function boxClickHandler() {
    console.log("boxClickHandler");
    document.querySelector("#red_container").classList.add("frys");
    document.querySelector("#red_sprite").classList.add("drej");

}
