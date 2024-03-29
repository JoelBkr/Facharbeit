// Funktion für die Übersetzung
function uebersetze() {
  // Werte der Inputs auf Variablen speichern
  var input_text = document.getElementById("input_text").value;
  var source_lang = document.getElementById("source_lang").value;
  var target_lang = document.getElementById("target_lang").value;

  // URL vorbereiten, um den Text zum API-Server zu senden, zusammen mit der Ausgangs- und Zielsprache
  var url = "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(input_text) + "&langpair=" + source_lang + "|" + target_lang;

  // Übersetzung vom API-Server abrufen
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Aus Antwort des Servers übersetzten Text extrahieren
      var output_text = data["responseData"]["translatedText"];
      // Übersetzung ins Textfeld ausgeben
      document.getElementById("output_text").value = output_text;
    })
    .catch(error => console.log(error));
}

// Funktion, um die Enter-Taste im Übersetzer-Tool zu behandeln
function handleEnterTranslator(event) {
  if (event.keyCode === 13 && document.getElementById('input_text') === document.activeElement) {
    event.preventDefault(); // Verhindert, dass die Enter-Taste eine neue Zeile in der Textarea erzeugt
    uebersetze();
  }
}

// Funktion, um den Platzhalter für die Eingabe- und Ausgabefelder zu setzen
function setPlaceholder() {
  // Platzhalter Eingangssprache
  const sourceLangSelect = document.getElementById("source_lang");
  const selectedOption = sourceLangSelect.options[sourceLangSelect.selectedIndex];
  const placeholderText = "Geben Sie den Text in " + selectedOption.text + " ein...";
  const inputField = document.getElementById("input_text");
  inputField.placeholder = placeholderText;

  // Platzhalter Zielsprache
  const targetLangSelect = document.getElementById("target_lang");
  const selectedOptionTarget = targetLangSelect.options[targetLangSelect.selectedIndex];
  const placeholderTextTarget = "Hier wird der Text auf " + selectedOptionTarget.text + " übersetzt";
  const outputField = document.getElementById("output_text");
  outputField.placeholder = placeholderTextTarget;
}
