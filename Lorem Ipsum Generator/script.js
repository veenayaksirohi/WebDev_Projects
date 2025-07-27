// Update displayed values for range sliders
// Author: AI Assistant

// Get references to the range inputs and their value spans
const paragraphsRange = document.getElementById('paragraphs');
const paragraphsValue = document.getElementById('paragraphs-value');
const wordsRange = document.getElementById('words-per-paragraph');
const wordsValue = document.getElementById('words-value');
const tagvalue = document.getElementById('tag-input');
const button = document.getElementsByTagName('button')[0];
const output = document.querySelector('.output');

// Set initial values
paragraphsValue.textContent = paragraphsRange.value;
wordsValue.textContent = wordsRange.value;

// Update value on input for paragraphs
paragraphsRange.addEventListener('input', function() {
    paragraphsValue.textContent = this.value;
});

// Update value on input for words per paragraph
wordsRange.addEventListener('input', function() {
    wordsValue.textContent = this.value;
});

// Simple Lorem Ipsum generator for browser
function generateLoremIpsum(wordsCount) {
    const words = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
        "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud",
        "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea",
        "commodo", "consequat"
    ];
    let result = [];
    for (let i = 0; i < wordsCount; i++) {
        result.push(words[Math.floor(Math.random() * words.length)]);
    }
    // Capitalize first word and add period at end
    let sentence = result.join(' ');
    return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

// Generate paragraphs and display them on button click
button.addEventListener('click', function() {
    output.innerHTML = ''; // Clear previous output
    const paragraphs = Number(paragraphsRange.value);
    const words = Number(wordsRange.value);
    const tag = tagvalue.value;
    for (let i = 0; i < paragraphs; i++) {
        output.innerHTML += `<${tag}>${generateLoremIpsum(words)}</${tag}>`;
        console.log(`<${tag}>${generateLoremIpsum(words)}</${tag}>`)
    }
});

