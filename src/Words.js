import wordsBank from './words_bank.txt';

export const boardStart = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
];

export const createWordsSet = async () => {
    let setOfWords;
    let word;
    await fetch(wordsBank)
        .then((res) => res.text())
        .then((data) => {
            const wordsArray = data.split("\r\n");
            word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
            setOfWords = new Set(wordsArray);
        });
    return { setOfWords, word };
};