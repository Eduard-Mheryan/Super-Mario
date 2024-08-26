// let GAMELOOPJS_SPEED = 1000 / 60;
// let GAMELOOPJS_SPACE_TIMEOUT = 100;
// let GAMELOOPJS_INTERVALS = [];

// const GAMELOOPJS_KEY = {};

// document.addEventListener('keydown', e => GAMELOOPJS_KEY[e.keyCode] = true);
// document.addEventListener('keyup', e => GAMELOOPJS_KEY[e.keyCode] = false);

// let marioX = 0; // Initiale X-Position von Mario

// function leftKeyPressed() {
//     marioX -= 5; // Mario bewegt sich um 5 Pixel nach links
// }

// function rightKeyPressed() {
//     marioX += 5; // Mario bewegt sich um 5 Pixel nach rechts
// }

// // Simuliere andere Tastenfunktionen für die Vollständigkeit
// function upKeyPressed() {
//     // Implementiere entsprechende Logik für die Pfeiltaste nach oben
// }

// function downKeyPressed() {
//     // Implementiere entsprechende Logik für die Pfeiltaste nach unten
// }

// function spaceKeyPressed() {
//     // Implementiere entsprechende Logik für die Leertaste
// }

// GAMELOOPJS_START();

// function GAMELOOPJS_START() {
//     let spaceKeyLocked = false;
//     gameInterval(() => {
//         if (GAMELOOPJS_KEY[37]) leftKeyPressed(); // Linke Pfeiltaste
//         if (GAMELOOPJS_KEY[39]) rightKeyPressed(); // Rechte Pfeiltaste
//         if (GAMELOOPJS_KEY[38]) upKeyPressed(); // Obere Pfeiltaste
//         if (GAMELOOPJS_KEY[40]) downKeyPressed(); // Untere Pfeiltaste
//         if (GAMELOOPJS_KEY[32]) { // Leertaste
//             if (!spaceKeyLocked) {
//                 spaceKeyPressed();
//                 spaceKeyLocked = true;
//                 setTimeout(() => {
//                     spaceKeyLocked = false;
//                 }, GAMELOOPJS_SPACE_TIMEOUT);
//             }
//         }
//     }, GAMELOOPJS_SPEED);
// }

// // Simulierte Funktion, um die Animation am Laufen zu halten
// function gameInterval(callback, delay) {
//     let intervalId = setInterval(callback, delay);
//     GAMELOOPJS_INTERVALS.push(intervalId);
// }
