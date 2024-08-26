document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('rausBild');
    const menu = document.getElementById('menu');
    const button = document.getElementById('playButton');

    // Verstecke das Menü und den Button zu Beginn
    menu.style.visibility = 'hidden';
    button.style.visibility = 'hidden';

    // Überprüfung, ob das Hintergrundbild bereits ausgeblendet wurde
    let backgroundHidden = false;

    // Funktion zur Anzeige des Menüs und des Buttons
    function showMenuAndButton() {
        menu.style.visibility = 'visible';
        button.style.visibility = 'visible';
    }

    // Führe die Einblend-Animation für das Hintergrundbild aus
    setTimeout(() => {
        if (!backgroundHidden) {
            image.style.opacity = 0; // Starte die Fade-Out-Animation für das Hintergrundbild
            backgroundHidden = true;

            // Nach der Fade-Out-Animation
            setTimeout(showMenuAndButton, 1300); // Zeit für den Fade-Out-Effekt
        }
    }, 2000); // Zeit bis zur Start der Fade-Out-Animation für das Hintergrundbild

    // Event Listener für den Play-Button
    button.addEventListener('click', function() {
        startGame(); // Starte das Spiel, wenn der Play-Button geklickt wird
    });

    // Funktion zum Starten des Spiels
    function startGame() {
        // Elemente ausblenden bzw. anzeigen
        if (button) {
            button.style.display = 'none'; // Den Button ausblenden, nachdem er geklickt wurde
        }

        if (menu) {
            menu.style.display = 'none'; // Das Menü ausblenden, wenn das Spiel gestartet wird
        }

        if (image) {
            image.style.display = 'none'; // Das Hintergrundbild ausblenden
        }

        const canvas = document.getElementById('gameCanvas');
        if (canvas) {
            canvas.style.display = 'block'; // Das Canvas-Element anzeigen
        }

        document.body.style.backgroundImage = 'none'; // Hintergrundbild des Body ausblenden

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const imageLoader = new ImageLoader(ctx);
        imageLoader.animateMario();

        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'ArrowUp':
                case ' ':
                    imageLoader.jumpMario();
                    break;
                case 'ArrowLeft':
                    imageLoader.moveLeft();
                    break;
                case 'ArrowRight':
                    imageLoader.moveRight();
                    break;
            }
        });

        document.addEventListener('keyup', function (event) {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
                imageLoader.isMoving = false;
            }
        });
    }
});
