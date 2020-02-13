//Først og fremmest sørger vi for, at siden er loaded helt færdig og giver os beskeden i konsollen at "siden er loaded" via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }
window.addEventListener("load", start);

function start() {
    console.log("start")
    //    I dette tilfælde vil vi gerne have at ("#red_container") begynder at flyve med det samme, derfor tilføjer vi classen "flyv" til den, ligeså snart siden er loaded
    document.querySelector("#red_container").classList.toggle("flyv");
}

//Derefter vil vi gerne lytte til når der klikke på "red_sprite" ved at tilføje en event
document.querySelector("#red_sprite").addEventListener("click", boxClickHandler);

//Hvad vil vi gerne have der skal ske? Vi vil gerne have at det vi klikker på begynder at falde, dette gør vi ved at bruge .this til at tilføje en ny class til det vi klikker på og den class hedder "fald"
function boxClickHandler() {
    console.log("boxClickHandler");
    this.classList.add("fald");
}

//Her kommer det vigtige. For at den skal kunne fryse når den rammer jorden, så er vi nødt til at lytte til hvornår "#red_sprite" er færdig med at falde, dette gør vi ved at tilføje en even med animationend
document.querySelector("#red_sprite").addEventListener("animationend", animationEnded);

function animationEnded() {
    console.log("ended");
    //    Hvad vil vi gerne have at der skal ske når den rammer jorden? ja, den skal fryse og siden at du ikke tilføje to animationer til den samme, er vi her nødt til at få #red_container til at stoppe med at flyve og få den til at fryse istedet ved at tilføje classen "frys" til den.
    document.querySelector("#red_container").classList.add("frys");
}
