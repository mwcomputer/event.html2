
/* Tools */
function ausgabe(outputStr) {
    console.log(outputStr);
}


function test() {
    switchClassName("night");
    switchClassName("day");
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

   // switchBtnTxt("day");
   // switchBtnTxt("night");
}


function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
}


function test() {
    ausgabe("hi");
}