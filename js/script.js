document.addEventListener("DOMContentLoaded", function () {
  // Funktion beim Neuladen der Seite ausführen
  setDropdownValue();
});

function setDropdownValue() {
  // Funktion setzt Einheitentyp auf choose um anzeigefehler beim Neuladen der Seite zu verhindern
  var select1 = document.getElementById("select1");
  select1.value = "choose";

  setPlaceholder()
}