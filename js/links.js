// Funktion zum Speichern eines Links im Local Storage
function saveLink(name, url) {
    let links = localStorage.getItem('links');
    if (links) {
      links = JSON.parse(links);
    } else {
      links = [];
    }
    links.push({ name: name, url: url });
    localStorage.setItem('links', JSON.stringify(links));
    loadLinks();
  }

  // Funktion zum Laden der Links aus dem Local Storage
  function loadLinks() {
    let links = localStorage.getItem('links');
    if (links) {
      links = JSON.parse(links);
      let linksContainer = document.getElementById('links-container');
      linksContainer.innerHTML = '';
      for (let i = 0; i < links.length; i++) {
        let link = links[i];
        let linkElem = document.createElement('a');
        linkElem.href = link.url;
        linkElem.textContent = link.name;
        linkElem.classList.add('savedLink');
        linkElem.addEventListener('click', function (event) {
          event.preventDefault();
          window.open(link.url);
        });
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
          links.splice(i, 1);
          localStorage.setItem('links', JSON.stringify(links));
          loadLinks();
        });
        let linkContainer = document.createElement('div');
        linkContainer.appendChild(linkElem);
        linkContainer.appendChild(deleteBtn);
        linksContainer.appendChild(linkContainer);
      }
    }
  
    // Lösche den Cache für nächsten Eintrag
    const nameInput = document.getElementById("link-name");
    const urlInput = document.getElementById("link-url");

    // Setze die Feldwerte auf leer
    nameInput.value = "";
    urlInput.value = "";

  
  }

  // Funktion zum Öffnen des Pop-up-Fensters
  function openPopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  // Funktion zum Schließen des Pop-up-Fensters
  function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
  }

  // Event Listener für den "Neuer Link"-Button
  document.getElementById('add-link-btn').addEventListener('click', function () {
    openPopup();
  });

  // Event Listener für den "Abbrechen"-Button im Pop-up-Fenster
  document.getElementById('cancel-link-btn').addEventListener('click', function (event) {
    event.preventDefault();
    closePopup();
  });

  // Event Listener für den "Speichern"-Button im Pop-up-Fenster
  document.getElementById('save-link-btn').addEventListener('click', function (event) {
    event.preventDefault();
    let name = document.getElementById('link-name').value;
    let url = document.getElementById('link-url').value;
    saveLink(name, url);
    closePopup();
  });

  // Laden der Links beim Start der Seite
  loadLinks();