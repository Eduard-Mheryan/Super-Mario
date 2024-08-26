function selectButton(button, character) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.textContent = "Auswählen");
    button.textContent = "Ausgewählt";

    if (imageLoader) {
        imageLoader.changeCharacter(character);
    }
}
