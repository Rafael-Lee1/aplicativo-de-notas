function addNote() {
    const noteText = document.getElementById('note').value;
    if (noteText.trim() !== '') {
        const noteList = document.getElementById('note-list');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${noteText}</span>
            <button onclick="deleteNote(this)">Excluir</button>
        `;
        noteList.appendChild(listItem);
        document.getElementById('note').value = '';
    }
}

function deleteNote(button) {
    const listItem = button.parentElement;
    const noteList = document.getElementById('note-list');
    noteList.removeChild(listItem);
}
