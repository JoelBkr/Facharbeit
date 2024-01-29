function uebersetze() {
    var input_text = document.getElementById("input_text").value;
    var source_lang = document.getElementById("source_lang").value;
    var target_lang = document.getElementById("target_lang").value;
    var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(input_text) + "&langpair=" + source_lang + "|" + target_lang;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var output_text = data["responseData"]["translatedText"];
            document.getElementById("output_text").value = output_text;
        })
        .catch(error => console.log(error));

}

function swapLanguages() {
    var source_lang = document.getElementById("source_lang").value;
    var target_lang = document.getElementById("target_lang").value;
    document.getElementById("source_lang").value = target_lang;
    document.getElementById("target_lang").value = source_lang;

    uebersetze();
}

function handleEnterTranslator(event) {
    if (event.keyCode === 13 && document.getElementById('input_text') === document.activeElement) {
      event.preventDefault(); // Verhindert, dass die Enter-Taste eine neue Zeile in der Textarea erzeugt
      uebersetze();
    }
  }

function setPlaceholder() {
    const sourceLangSelect = document.getElementById("source_lang");
    const selectedOption = sourceLangSelect.options[sourceLangSelect.selectedIndex];
    const placeholderText = "Geben Sie den Text in " + selectedOption.text + " ein...";
    const inputField = document.getElementById("input_text");
    inputField.placeholder = placeholderText;

    const targetLangSelect = document.getElementById("target_lang");
    const selectedOptionTarget = targetLangSelect.options[targetLangSelect.selectedIndex];
    const placeholderTextTarget = "Hier wird der Text auf " + selectedOptionTarget.text + " übersetzt";
    const outputField = document.getElementById("output_text");
    outputField.placeholder = placeholderTextTarget;
  }

  
  

function detectLanguage() {
    const inputText = document.getElementById("input_text").value;
    const requestUrl = `https://translation.googleapis.com/language/translate/v2/detect?key=YOUR_API_KEY&q=${encodeURIComponent(inputText)}`;

    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            const detectedLang = data.data.detections[0][0].language;
            const sourceLangSelect = document.getElementById("source_lang");
            sourceLangSelect.value = detectedLang;
        })
        .catch(error => console.error(error));
}