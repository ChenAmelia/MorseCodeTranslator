import { fromEngToMorse } from "./translator.js";
import { fromMorseToEng } from "./translator.js";

//------------------Test Translation from English to Morse Code---------------------------
//test if English letter can be translated into morse code
describe('Testing fromEngToMorse, should trun "a" into morse code', () => {
    it("a should be translated to .-", () => {
        let string;
        string = "a";
        let result = fromEngToMorse(string);
        expect(result).toBe(".-");
    });
});

//test if capital letter can be traslated to morse code
describe('Tesing fromEngToMorse, A should be translated into morse code', () => {
    it("A should be converted into a and be translated to .-", () => {
        let string;
        string = "A";
        let result = fromEngToMorse(string);
        expect(result).toBe(".-");
    })
})

//test a word with capital letter in it
describe('Tesing fromEngToMorse, Chen should be translated into morse code', () => {
    it("Chen should be translated to -.-. .... . -.", () => {
        let string;
        string = "Chen";
        let result = fromEngToMorse(string);
        expect(result).toBe("-.-. .... . -.");
    })
})

//test number
describe('Tesing fromEngToMorse, 3 should be translated into morse code', () => {
    it("3 should be translated to morse code ...--", () => {
        let number;
        number = "3";
        let result = fromEngToMorse(number);
        expect(result).toBe("...--");
    })
})

//test the space maek
describe('Tesing fromEngToMorse, space should be translated into morse code', () => {
    it("space should be translated to / ", () => {
        let string;
        string = " ";
        let result = fromEngToMorse(string);
        expect(result).toBe(" / ");
    })
})

//test English letters with punctuation mark
describe('Tesing fromEngToMorse, Hi! should be translated into morse code', () => {
    it("Hi! should be translated to .... .. .-....", () => {
        let string;
        string = "Hi!";
        let result = fromEngToMorse(string);
        expect(result).toBe(".... .. .-....");
    })
})



//------------------Test Translation from Morse Code to English-----------------
//Test if Morse code can be translated into English letter
describe('Testing fromMorseToEng, should turn ".-" into an English letter', () => {
    it(".- should be translated to a", () => {
        let string;
        string = ".-";
        let result = fromMorseToEng(string);
        expect(result).toBe("a");
    });
});

//Test if morse code can be translated to number
describe('Testing fromMorseToEng, should turn morse code to number', () => {
    it(".---- ..--- ...-- should be translated to 123", () => {
        let string;
        string = ".---- ..--- ...--";
        let result = fromMorseToEng(string);
        expect(result).toBe("123");
    });
});

//Test punctuation mark
describe('Testing fromMorseToEng, should turn morse code to punctuation mark', () => {
    it(" .-- .... .- - ..--.. .-.... should be translated to wht?!", () => {
        let string;
        string = ".-- .... .- - ..--.. .-....";
        let result = fromMorseToEng(string);
        expect(result).toBe("what?!");
    });
});