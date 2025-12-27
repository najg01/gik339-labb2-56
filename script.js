let checkbox = document.querySelector("#divStyle");
let textfields = document.getElementsByClassName("textfield");
let button = document.getElementsByTagName("button");
let resultDiv = document.getElementById("resultDiv");

function handleInput(e) {
    console.log(e.target);
    targetName = e.target.name;
    if (targetName === "content") {
        resultDiv.innerHTML = e.target.value;
    }
}

checkbox.addEventListener('change', () => {resultDiv.style.background = textfields.namedItem("color").value});

for (let i = 0; i < textfields.length; i++) {
    textfields.item(i).addEventListener('selectionchange', handleInput); //Triggar direkt vid ändring av textfältet, leder dock till konstanta updateringar för varje tecken man skriver
}

/*
for (let i = 0; i < textfields.length; i++) {
    textfields.item(i).addEventListener('change', handleInput); //Triggar när man klickar utanför fältet eller trycker enter efter att ha ändrat i textfältet. Mindre responsivt men färre updateringar
}
*/

//button.item(0).addEventListener('click', () => {resultDiv.innerHTML= ""}); // enbart tömma div utan att ta bort helt så att det fortfarande får att fylla i med nytt igen
button.item(0).addEventListener('click', () => {resultDiv.remove()});