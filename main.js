import { fromEngToMorse } from "./translator.js";
import { fromMorseToEng } from "./translator.js";


const typeEng = document.querySelector(".container__toMorse");
const typeMorse = document.querySelector(".container__toEng");
const resultArea = document.querySelector(".result__area");

typeEng.addEventListener(() => {
    getResult();
})

typeMorse.addEventListener(() => {
    getResult();
})

const getResult = () => {
    resultArea.innerHTML = input();
}

const input = () => {
    let engValue = typeEng.value;
    let morseValue = typeMorse.value;

    if (morseValue === "" && engValue == "string") {
        return fromEngToMorse(engValue);
    } else if (engValue === "" && morseValue == "string") {
        return fromMorseToEng(morseValue);
    }

}