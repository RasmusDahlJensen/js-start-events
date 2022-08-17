// input fields from form
const cowInput = document.getElementById("cow");
const pigInput = document.getElementById("pig");
const mooseInput = document.getElementById("moose");
const animalSelect = document.querySelector("#dyrSelect");
const animalFact = document.getElementById('animalFact');
const hideButton = document.getElementById('hideForm');
const formHide = document.getElementById('formHide');
const bgColor = document.getElementById('bgColor');
const formContainer = document.getElementById('formContainer')


// validate buttons
const validatePig = document.getElementById("evaluatePig");
const validateAll = document.getElementById("evaluateForm");

// eventListners
cowInput.addEventListener("keyup", evaluateCow);
validatePig.addEventListener("click", evaluatePig);
validateAll.addEventListener("click", evaluateAll);


// functions ------------------------------------------------------------

hideButton.addEventListener("click", function(){
    if (formHide.style.display != "none") {
        formHide.style.display = "none"
        hideButton.innerText = "Show form"
    } else{
        formHide.style.display = "block"
        hideButton.innerText = "Hide form"
    }
})

bgColor.addEventListener("input", function(){
    formContainer.style.backgroundColor = bgColor.value

})


function evaluateCow() {

    if (cowInput.value == "ko") {
        // user feedback
        cowInput.style.backgroundColor = "#99ff33";

    } else {

        cowInput.style.backgroundColor = "red";
    }

}

function evaluatePig() {

    if (pigInput.value == "gris") {

        pigInput.style.backgroundColor = "#99ff33";
    } else {

        pigInput.style.backgroundColor = "red";
    }
}

function evaluateAll() {

    if (pigInput.value == "gris") {

        pigInput.style.backgroundColor = "#99ff33";
    } else {

        pigInput.style.backgroundColor = "red";
    }

    if (cowInput.value == "ko") {

        cowInput.style.backgroundColor = "#99ff33";
    } else {

        cowInput.style.backgroundColor = "red";
    }

    if (mooseInput.value == "elg") {

        mooseInput.style.backgroundColor = "#99ff33";
    } else {

        mooseInput.style.backgroundColor = "red";
    }

    let randFact = Math.floor(Math.random() * 3);

    switch (animalSelect.value) {
        case "fugl":
            if (randFact == 0) {
                document.getElementById("animalFact").innerHTML = "Some ducks sleep with one eye open"
            } else if (randFact == 1) {
                document.getElementById("animalFact").innerHTML = "Woodpeckers hoard acorns"
            } else {
                document.getElementById("animalFact").innerHTML = "Budgies catch each others yawns"
            }

            break;

        case "fisk":
            if (randFact == 0) {
                document.getElementById("animalFact").innerHTML = "Lungfish can live out of the water for years"
            } else if (randFact == 1) {
                document.getElementById("animalFact").innerHTML = "Starfish aren't fish"
            } else {
                document.getElementById("animalFact").innerHTML = "Sharks are the only fish with eyelids"
            }
            break;

        case "reptil":
            if (randFact == 0) {
                document.getElementById("animalFact").innerHTML = "Evidence of the earliest reptiles dates back to 312 million years ago."
            } else if (randFact == 1) {
                document.getElementById("animalFact").innerHTML = "Large reptiles, like crocodiles and constrictors, can live several months on a single meal."
            } else {
                document.getElementById("animalFact").innerHTML = "Most reptiles can see colors better than most mammals can."
            }
            break;

        case "insekt":
            if (randFact == 0) {
                document.getElementById("animalFact").innerHTML = "A ladybird might eat more than 5,000 insects in its lifetime!"
            } else if (randFact == 1) {
                document.getElementById("animalFact").innerHTML = "Fruit flies were the first living creatures to be sent into space."
            } else {
                document.getElementById("animalFact").innerHTML = "A bee's wings beat 190 times a second, that's 11,400 times a minute."
            }
            break;

        case "pattedyr":
            if (randFact == 0) {
                document.getElementById("animalFact").innerHTML = "All mammals except ant eaters have teeth"
            } else if (randFact == 1) {
                document.getElementById("animalFact").innerHTML = "Bats are the only mammals that can fly."
            } else {
                document.getElementById("animalFact").innerHTML = "Dolphin and whale babies do not sleep the first month of their life"
            }
            break;

            default:
                console.log("Switch error - default case");
                break;
        }
    }