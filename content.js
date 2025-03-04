let speech = new SpeechSynthesisUtterance();
let lastSpokenText = "";

document.addEventListener("mouseover", (event) => {
    let text = event.target.innerText.trim();
    if (text && text !== lastSpokenText) {
        lastSpokenText = text;
        speech.text = text;
        speechSynthesis.cancel(); // Stop any ongoing speech
        speechSynthesis.speak(speech);
    }
});
