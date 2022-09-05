import { fromEngToMorse } from "./translator.js";
import { fromMorseToEng } from "./translator.js";


const typeEng = document.querySelector(".container__toMorse");
const typeMorse = document.querySelector(".container__toEng");
const resultArea = document.querySelector(".result__area");
const button = document.querySelector(".button__translate");

button.addEventListener ("click", () => {
    displayResult();
})

const displayResult = () => {
    resultArea.innerHTML = getResult();
}

const getResult = () => {
    let engValue = typeEng.value;
    let morseValue = typeMorse.value;

    if (morseValue === "" ) {
        return fromEngToMorse(engValue);
    } else if (engValue === "" ) {
        return fromMorseToEng(morseValue);
    }
}

