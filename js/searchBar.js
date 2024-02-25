function suche() {
  //EIngegebener Suchtext wird abgespeichert
  var suchtext = document.getElementById("suchtext").value;
  //Link wird erstellt, der Suchtext in neuem Tab mit duckduckgo sucht
  window.open("https://duckduckgo.com/?q=" + suchtext, "_blank");
}

function handleEnterSearchBar(event) {
  //Wenn ENTER gedrückt wird, wird automatisch gesucht
  if (event.keyCode === 13 && document.getElementById('suchtext') === document.activeElement) {
    event.preventDefault(); // Verhindert, dass die Enter-Taste eine neue Zeile in der Textarea erzeugt
    suche();
  }
}

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Formatieren der Zeit
  var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

  // Bestimmen der aktuellen Schulstunde
  var clock = getCurrentHour(hours, minutes);

  // Anzeigen der aktuellen Schulstunde
  document.getElementById('clock').innerHTML = timeString + " ⮕ " + clock;

  setTimeout(updateClock, 1000);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function getCurrentHour(hours, minutes) {
  var totalMinutes = hours * 60 + minutes;

  // Wochenende überprüfen
  if (isWeekend()) {
    return "Wochenende 🎉";
  }

  // Schulstunden überprüfen
  if (isInTimeRange(totalMinutes, 475, 520)) { // 1. Stunde beginnt um 7:55 --> 7*60+55 = 475 Minuten seit Mitternacht (7:55 Uhr)
      return "1. Stunde";
  } else if (isInTimeRange(totalMinutes, 520, 565)) {
      return "2. Stunde";
  } else if (isInTimeRange(totalMinutes, 565, 585)) {
      return "1. Pause 😃";
  } else if (isInTimeRange(totalMinutes, 585, 630)) {
      return "3. Stunde";
  } else if (isInTimeRange(totalMinutes, 630, 675)) {
      return "4. Stunde";
  } else if (isInTimeRange(totalMinutes, 675, 690)) {
      return "2. Pause 😃";
  } else if (isInTimeRange(totalMinutes, 690, 735)) {
      return "5. Stunde";
  } else if (isInTimeRange(totalMinutes, 735, 740)) {
      return "5 Minuten Pause 😀";
  } else if (isInTimeRange(totalMinutes, 740, 785)) {
      return "6. Stunde";
  } else if (isInTimeRange(totalMinutes, 785, 830)) {
      return "Mittagspause 😃";
  } else if (isInTimeRange(totalMinutes, 830, 875)) {
      return "7. Stunde";
  } else if (isInTimeRange(totalMinutes, 875, 920)) {
      return "8. Stunde";
  } else {
      return "Freizeit 😁";
  }
}
//Überprüft ob Wochenende ist, um "Wochenende" anzuzeigen
function isWeekend() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // 0 is Sunday, 6 is Saturday
}

//Überprüfung ob aktuelle Uhrzeit in Minuten in der übergebenen Minutenspanne ist
function isInTimeRange(currentMinutes, startMinutes, endMinutes) {
  return currentMinutes >= startMinutes && currentMinutes < endMinutes;
}

// Start der Aktualisierung der Uhr
updateClock();

// Funktion, um das aktuelle Datum im gewünschten Format zu erhalten
function getCurrentDate() {
  const daysOfWeek = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const day = today.getDate();
  const month = today.getMonth() + 1; // Monate beginnen bei 0, daher +1
  const year = today.getFullYear();

  // Führende Nullen hinzufügen, wenn der Tag oder Monat einstellig ist
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  // Format erstellen: Tag der Woche, DD.MM.YYYY
  const formattedDate = `${dayOfWeek}, ${formattedDay}.${formattedMonth}.${year}`;

  return formattedDate;
}

// Das aktuelle Datum ausgeben und in das HTML-Element einfügen
document.getElementById('dateOutput').innerText = getCurrentDate();