let speech = new SpeechSynthesisUtterance();

let voice = [];

let voiceSelect = document.querySelector("select");

// Load available voices
window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices();
    speech.voice = voice[0];

    voice.forEach((v, i) => (voiceSelect.options[i] = new Option(v.name, i)));
};

// Change voice when user selects different option
voiceSelect.addEventListener("change", () => {
    speech.voice = voice[voiceSelect.value]; // ✅ fixed here
});

// Speak text when button is clicked
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
