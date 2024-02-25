// Abrufen der gespeicherten Links aus den Cookies
let links = getSavedLinks();
// Variable zur Verfolgung des Index beim Bearbeiten von Links
let editingIndex = null;

// Funktion zum Rendern der gespeicherten Links im HTML
function renderLinks() {
  // Container für Links im HTML abrufen
  const linksContainer = document.getElementById('links-container');
  // Vorhandene Inhalte im Container löschen
  linksContainer.innerHTML = '';

  // Für jeden gespeicherten Link
  links.forEach((link, index) => {
    // Ein Listenelement erstellen und die Klasse 'link-item' hinzufügen
    const listItem = document.createElement('li');
    listItem.classList.add('link-item');

    // Ein Container-Div für Link und Edit-Button erstellen und die Klassen 'link-container' und 'button' hinzufügen
    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link-container');
    linkContainer.classList.add('button');

    // Ein Anchor-Element für den Link erstellen und Text, href, target und die Klasse 'button' hinzufügen
    const linkElement = document.createElement('a');
    linkElement.textContent = link.name;
    linkElement.href = link.url;
    linkElement.target = '_blank';
    linkElement.classList.add('button');

    // Ein Button-Element für den Edit-Button erstellen und die Klasse 'button' hinzufügen
    const editButton = document.createElement('button');
    var iElement = document.createElement('i');
    iElement.className = 'fa-solid fa-pen-to-square';
    editButton.innerHTML = '';
    editButton.appendChild(iElement);
    editButton.classList.add('button');
    // Event-Handler für das Öffnen des Edit-Popups beim Klicken auf den Edit-Button festlegen
    editButton.onclick = () => openEditPopup(index);

    // Die erstellten Elemente dem DOM hinzufügen
    linkContainer.appendChild(linkElement);
    linkContainer.appendChild(editButton);

    listItem.appendChild(linkContainer);

    linksContainer.appendChild(listItem);
  });
}


// Funktion zum Öffnen des Popup-Fensters zum Hinzufügen von Links
function openPopup() {
  document.getElementById('popup').style.display = 'block';
  // Eingabefelder zurücksetzen
  document.getElementById('linkName').value = '';
  document.getElementById('linkURL').value = '';
  // Event-Handler für den Speichern-Button festlegen
  document.getElementById('saveButton').onclick = saveLink;
  // Löschen-Button ausblenden
  document.getElementById('deleteButton').style.display = 'none';
  // Bearbeitungsindex zurücksetzen
  editingIndex = null;
}

// Funktion zum Schließen des Popup-Fensters
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// Funktion zum Speichern eines neuen Links oder Bearbeiten eines bestehenden Links
function saveLink() {
  // Werte aus den Eingabefeldern abrufen
  const linkName = document.getElementById('linkName').value;
  const linkURL = document.getElementById('linkURL').value;

  // Prüfen, ob beide Eingabefelder ausgefüllt sind
  if (linkName && linkURL) {
    // Neuen Link erstellen
    const newLink = { name: linkName, url: linkURL };
    // Wenn Bearbeitungsindex vorhanden, den bestehenden Link aktualisieren
    if (editingIndex !== null) {
      links[editingIndex] = newLink;
    } else {
      // Ansonsten neuen Link hinzufügen
      links.push(newLink);
    }
    // Links in Cookies speichern, Links rendern und Popup schließen
    saveLinksToCookies();
    renderLinks();
    closePopup();
  }
}

// Funktion zum Öffnen des Popup-Fensters für die Bearbeitung eines Links
function openEditPopup(index) {
  openPopup();
  // Werte des zu bearbeitenden Links in die Eingabefelder einfügen
  document.getElementById('linkName').value = links[index].name;
  document.getElementById('linkURL').value = links[index].url;
  // Event-Handler für den Speichern-Button festlegen
  document.getElementById('saveButton').onclick = () => saveLink();
  // Löschen-Button anzeigen
  document.getElementById('deleteButton').style.display = 'block';
  // Bearbeitungsindex setzen
  editingIndex = index;
}

// Funktion zum Löschen eines Links
function deleteLink() {
  // Prüfen, ob Bearbeitungsindex vorhanden ist
  if (editingIndex !== null) {
    // Link an der angegebenen Position löschen, Links in Cookies speichern, Links rendern und Popup schließen
    links.splice(editingIndex, 1);
    saveLinksToCookies();
    renderLinks();
    closePopup();
  }
}

// Funktion zum Speichern der Links in den Cookies
function saveLinksToCookies() {
  // Hier könnte eine fortgeschrittenere Logik für die Cookie-Speicherung implementiert werden
  document.cookie = 'links=' + JSON.stringify(links);
}

// Funktion zum Abrufen der gespeicherten Links aus den Cookies
function getSavedLinks() {
  const cookies = document.cookie.split(';');
  const linksCookie = cookies.find(cookie => cookie.trim().startsWith('links='));
  // Prüfen, ob ein Cookie für Links vorhanden ist und es parsen, ansonsten leeres Array zurückgeben
  return linksCookie ? JSON.parse(linksCookie.split('=')[1]) : [];
}

// Initial das Rendering der Links aufrufen
renderLinks();
