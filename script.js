function checkVowel() {
    const inputField = document.getElementById("inputField").value.toLowerCase();
    const resultField = document.getElementById("result");
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    if (!inputField) {
        resultField.textContent = "Please enter some text.";
        resultField.classList.remove('fade-in'); 
        void resultField.offsetWidth; 
        resultField.classList.add('fade-in');
        return;
    }

    let isVowel = vowels.includes(inputField[0]);

    if (isVowel) {
        resultField.textContent = `The first letter "${inputField[0]}" is a vowel.`;
    } else {
        resultField.textContent = `The first letter "${inputField[0]}" is not a vowel.`;
    }

    resultField.classList.remove('fade-in'); 
    void resultField.offsetWidth; 
    resultField.classList.add('fade-in');
}

function restartApp() {
    document.getElementById("inputField").value = "";
    document.getElementById("result").textContent = "";
}
