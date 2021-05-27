
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}

/** Btn */
let btn = document.getElementById("trigBtn"); 
//btn = document.getElementById("trigBtn");
//btn = document;
//ausgabe(btn);

btn.addEventListener("click",test);





switchClassName();
function switchClassName(params) {
    document.body.className = "night";
}



function test() {
    ausgabe("hi");
}