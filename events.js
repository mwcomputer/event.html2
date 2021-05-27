
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




//switchClassName("night");
//switchClassName("day");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;

}



function test() {
    ausgabe("hi");
}