//Det vi starter med at definere et element som senere skal bruges til at afbryde en animation. Der er ikke mange måder at gøre dette på. Elementet som skal benyttes er i dette tilfælde "#red_container". Hver gang vi gør noget med variablen (var) element, så er det "#red_container" der sker noget med.
var element = document.getElementById("red_container");

//Først og fremmest sørger vi for at siden er loaded helt færdig og giver beskeden i konsollen at siden er loaded via console.log
//Funktioner har altid () efter sig og starter og slutter med { og }
window.addEventListener("load", start);

function start() {
    console.log("start");
    //    Derefter skal der ske noget når vi klikker, så vi tilføjer en event der lytter til når der klikkes på "red_container"
    document.querySelector("#red_container").addEventListener("click", box1ClickHandler);

    function box1ClickHandler() {
        console.log("box1ClickHandler");
        //        Og hvad vil vi gerne have der skal ske? Vi vil gerne have at den begynder at hoppe. Men her blever det kompliceret. For at dette kan lykkedes mere end en gang, det vil sige at vi skal kun afbryde animationen der allederede er startet og så genstarte animationen inden den er færdig, så er vi nødt til først at fjerne en class fra den som den ikke har på og derefter lave om på #red_container ved at tvinge et reflow (en genstart af animationen) i browseren som gør at vi kan klikke endnu engang og få den til at hoppe igen
        document.querySelector("#red_container").classList.remove("hop");
        //Her genstarter animationen på "red_container", uden denne linje ville det aldrig fungere.
        void element.offsetWidth;
        //        Her til sidst tilfæjer vi classen "hop" til "#red_container", og hver gang du klikker på den, så genstarter den hele scriptet så den vil altid stoppe animationen, og hoppe igen når du klikker på den.
        document.querySelector("#red_container").classList.add("hop");
    }
}
