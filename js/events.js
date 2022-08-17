// input fields from form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");

// validate buttons
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");

// eventListners
console.log(cowInput);
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
validateAll.addEventListener("click", evaluateAll);


// functions ------------------------------------------------------------


function evaluateAll() {
    if (cowInput.value == "ko" && pigInput.value == "gris" && mooseInput.value == "elg") {
        cowInput.style.backgroundColor = "#99ff33";
        pigInput.style.backgroundColor = "#99ff33";
        mooseInput.style.backgroundColor = "#99ff33";
    }
        cowInput.style.backgroundColor = "red";
        pigInput.style.backgroundColor = "red";
        mooseInput.style.backgroundColor = "red";
}




// function evaluateCow() {

//     if (cowInput.value == "ko") {
//         // user feedback
//         cowInput.style.backgroundColor = "#99ff33";

//     } else {

//         cowInput.style.backgroundColor = "red";
//     }

// }

// function evaluatePig() {
//     //console.log("pig");

//     if (pigInput.value == "gris") {

//         pigInput.style.backgroundColor = "#99ff33";
//     } else {

//         pigInput.style.backgroundColor = "red";
//     }
// }

// function evaluateAll() {
//     //console.log("all");

//     if (pigInput.value == "gris") {

//         pigInput.style.backgroundColor = "#99ff33";
//     } else {

//         pigInput.style.backgroundColor = "red";
//     }

//     if (cowInput.value == "ko") {

//         cowInput.style.backgroundColor = "#99ff33";
//     } else {

//         cowInput.style.backgroundColor = "red";
//     }

//     if (mooseInput.value == "elg") {

//         mooseInput.style.backgroundColor = "#99ff33";
//     } else {

//         mooseInput.style.backgroundColor = "red";
//     }



// }

// functions ------------------------------------------------------------



