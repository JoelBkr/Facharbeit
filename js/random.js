function generate() {
  var type = document.getElementById("type").value;
  var amount = document.getElementById("amount").value;
  var min = document.getElementById("min").value;
  var max = document.getElementById("max").value;
  var resultContainer = document.getElementById("resultRandom");

  // Validierung und Generierung hier implementieren
  var generatedValue;

  if (min === "") {
    min = 1;
  }

  if (max === "") {
    max = 100;
  }

  if (type === "letters") {
    // Beispiel: Zufallsgenerierung von Buchstaben
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    generatedValue = '';
    for (var i = 0; i < amount; i++) {
      var randomIndex = Math.floor(Math.random() * letters.length);
      generatedValue += letters.charAt(randomIndex);
    }
  } else {
    // Beispiel: Zufallsgenerierung von Zahlen
    min = parseInt(min);
    max = parseInt(max);
    generatedValue = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Hier wird der generierte Wert in resultContainer angezeigt
  resultContainer.value = generatedValue;
}

// Event-Listener, um die Aktivierung/Deaktivierung der Min/Max-Felder zu steuern
document.getElementById("type").addEventListener("change", function () {
  var minInput = document.getElementById("min");
  var maxInput = document.getElementById("max");

  if (this.value === "letters") {
    minInput.disabled = true;
    maxInput.disabled = true;
  } else {
    minInput.disabled = false;
    maxInput.disabled = false;
  }
});