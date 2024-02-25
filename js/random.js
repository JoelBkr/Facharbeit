// Funktion zur Generierung von zufälligen Werten basierend auf Benutzereingaben
function generate() {
  // Abrufen der Werte aus den Eingabefeldern im HTML-Dokument
  var type = document.getElementById("type").value;
  var amount = document.getElementById("amount").value;
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;
  var resultContainer = document.getElementById("resultRandom");

  var generatedValue;

  // Standardwerte für min und max, falls nicht angegeben
  if (min === "") {
    min = 1;
  }
  if (max === "") {
    max = 100;
  }

  // Generierung von zufälligen Buchstaben oder Zahlen basierend auf dem ausgewählten Typ
  if (type === "letters") {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    generatedValue = '';
    for (var i = 0; i < amount; i++) {
      var randomIndex = Math.floor(Math.random() * letters.length);
      generatedValue += (i === 0 ? '' : ', ') + letters.charAt(randomIndex);
    }
  } else {
    min = parseInt(min);
    max = parseInt(max);
    generatedValue = '';
    for (var i = 0; i < amount; i++) {
      var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      generatedValue += (i === 0 ? '' : ', ') + randomNum;
    }
  }

  // Anzeigen des generierten Werts im Ergebnis-Container auf der Webseite
  resultContainer.value = generatedValue;
}

// Event-Listener für Änderungen im Typ-Auswahlfeld
document.getElementById("type").addEventListener("change", function () {
  // Abrufen der Referenzen zu den Min- und Max-Eingabefeldern
  var minInput = document.getElementById("min");
  var maxInput = document.getElementById("max");

  // Deaktivieren der Min- und Max-Eingabefelder, wenn der Typ "letters" ausgewählt ist, sonst aktivieren
  if (this.value === "letters") {
    minInput.disabled = true;
    maxInput.disabled = true;
  } else {
    minInput.disabled = false;
    maxInput.disabled = false;
  }
});
