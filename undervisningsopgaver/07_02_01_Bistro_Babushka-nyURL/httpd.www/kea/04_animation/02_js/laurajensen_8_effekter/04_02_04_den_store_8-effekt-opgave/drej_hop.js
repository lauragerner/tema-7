//Først og fremmest sørger vi for, at siden er loaded helt færdig og giver os beskeden i konsollen at "siden er loaded" via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }
window.addEventListener("load", start);

function start() {
    console.log("start");
    //    Vi vil gerne have at "red_container" starter med at dreje rundt fra det sekund siden er loaded, derfor kan vi add classen drej på med det samme
    document.querySelector("#red_container").classList.toggle("drej");
}

//Her vil vi gerne lytte til hvornår at "red_container" (som i dette tilfælde kører infinite) har lavet en iteration, altså en gentagelse
document.querySelector("#red_container").addEventListener("animationiteration", animationCount);

//Og herefter når "red_container" har lavet en gentagelse vil vi gerne have at "blue_container" begynder at hoppe. Dette gør at vi ved at tilføje "blue_container" classen hop
function animationCount() {
    console.log("animationCount")
    document.querySelector("#blue_container").classList.toggle("hop");
}
