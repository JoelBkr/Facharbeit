// Funktion zum Hinzufügen von Werten zur Rechung
function addToEquation(value) {
  // Anhängen des Werts an das Rechnungsfeld
  document.getElementById('equation').value += value;
}

// Funktion zum Löschen der Rechnung und Löschen des Ergebnisfelds
function clearEquation() {
  document.getElementById('equation').value = '';
  document.getElementById('solution').value = '';
}

// Funktion zur Berechnung des Ergebnisses der Rechnung
function calc() {
  // Abrufen der Rechnung aus dem Rechnungsfeld
  var equation = document.getElementById('equation').value;

  // Evaluieren der Rechnung und Anzeigen des Ergebnisses im Ergebnisfeld
  var solution = eval(equation);
  document.getElementById('solution').value = solution;
}

// Funktion zum Kopieren des Ergebnisses in die Zwischenablage
function copysolution() {
  // Abrufen des Ergebnisses und Kopieren in die Zwischenablage
  var solution = document.getElementById('solution').value;
  navigator.clipboard.writeText(solution);
}

// Event-Listener für die Enter-Taste im Rechnungsfeld zur automatischen Berechnung
var equationInput = document.getElementById('equation');
equationInput.addEventListener('keyup', function (event) {
  // Überprüfen, ob die gedrückte Taste die Enter-Taste ist (KeyCode 13)
  if (event.keyCode === 13) {
    event.preventDefault();
    // Bei Enter-Taste die Berechnung durchführen
    calc();
  }
});
