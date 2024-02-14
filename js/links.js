let links = getSavedLinks(); // Links aus den Cookies abrufen
let editingIndex = null;

function renderLinks() {
  const linksContainer = document.getElementById('links-container');
  linksContainer.innerHTML = '';

  links.forEach((link, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('link-item');

    const linkContainer = document.createElement('div'); // Container für Link und Edit-Button
    linkContainer.classList.add('link-container');
    linkContainer.classList.add('button');

    const linkElement = document.createElement('a');
    linkElement.textContent = link.name;
    linkElement.href = link.url;
    linkElement.target = '_blank';
    linkElement.classList.add('button');

    const editButton = document.createElement('button');
    var iElement = document.createElement('i');
    iElement.className = 'fa-solid fa-pen-to-square';
    editButton.innerHTML = '';
    editButton.appendChild(iElement);
    editButton.classList.add('button');
    editButton.onclick = () => openEditPopup(index);

    linkContainer.appendChild(linkElement);
    linkContainer.appendChild(editButton);

    listItem.appendChild(linkContainer);

    linksContainer.appendChild(listItem);
  });
}


function openPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('linkName').value = '';
  document.getElementById('linkURL').value = '';
  document.getElementById('saveButton').onclick = saveLink;
  document.getElementById('deleteButton').style.display = 'none';
  editingIndex = null;
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function saveLink() {
  const linkName = document.getElementById('linkName').value;
  const linkURL = document.getElementById('linkURL').value;

  if (linkName && linkURL) {
    const newLink = { name: linkName, url: linkURL };
    if (editingIndex !== null) {
      links[editingIndex] = newLink;
    } else {
      links.push(newLink);
    }
    saveLinksToCookies();
    renderLinks();
    closePopup();
  }
}

function openEditPopup(index) {
  openPopup();
  document.getElementById('linkName').value = links[index].name;
  document.getElementById('linkURL').value = links[index].url;
  document.getElementById('saveButton').onclick = () => saveLink();
  document.getElementById('deleteButton').style.display = 'block';
  editingIndex = index;
}

function deleteLink() {
  if (editingIndex !== null) {
    links.splice(editingIndex, 1);
    saveLinksToCookies();
    renderLinks();
    closePopup();
  }
}

function saveLinksToCookies() {
  // Hier könnten Sie eine fortgeschrittenere Logik für die Cookie-Speicherung verwenden
  document.cookie = 'links=' + JSON.stringify(links);
}

function getSavedLinks() {
  const cookies = document.cookie.split(';');
  const linksCookie = cookies.find(cookie => cookie.trim().startsWith('links='));
  return linksCookie ? JSON.parse(linksCookie.split('=')[1]) : [];
}

// Initial das Rendering der Links aufrufen
renderLinks();