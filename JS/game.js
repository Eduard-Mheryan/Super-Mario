class ImageLoader {
    constructor(context) {
        this.context = context;


        this.backgroundMusic = document.getElementById('backgroundMusic');
        this.gameOverSound = document.getElementById('gameOverSound');
        this.winSound = document.getElementById('winSound');

        // Play background music
        this.backgroundMusic.play();

        this.images = [
            { src: 'Img/assets/bricks.png', x: 300, y: window.innerHeight / 1.35, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 435, y: window.innerHeight / 1.65, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 570, y: window.innerHeight / 2.188, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 705, y: window.innerHeight / 3.09, width: 100, height: 100 },
            { src: 'Img/assets/plant.png', x: 780, y: window.innerHeight / 1.9, width: 200, height: 250 },
            { src: 'Img/assets/plant.png', x: 1000, y: window.innerHeight / 1.9, width: 200, height: 250 },
            { src: 'Img/assets/green.png', x: 1220, y: window.innerHeight / 2.2, width: 200, height: 300 },
            { src: 'Img/assets/green.png', x: 1440, y: window.innerHeight / 2.2, width: 200, height: 300 },
            { src: 'Img/assets/plant.png', x: 1700, y: window.innerHeight / 1.9, width: 200, height: 250 },
            { src: 'Img/assets/bricks.png', x: 1850, y: window.innerHeight / 3.09, width: 100, height: 100 },
            { src: 'Img/assets/plant.png', x: 2000, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/bricks.png', x: 2100, y: window.innerHeight / 3.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 2370, y: window.innerHeight / 3.5, width: 100, height: 100 },
            { src: 'Img/assets/plant.png', x: 2300, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/plant.png', x: 2560, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/green.png', x: 2800, y: window.innerHeight / 2.2, width: 200, height: 300 },
            { src: 'Img/assets/green.png', x: 3020, y: window.innerHeight / 2.2, width: 200, height: 300 },
            { src: 'Img/assets/plant.png', x: 3300, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/bricks.png', x: 3550, y: window.innerHeight / 1.7, width: 100, height: 100 },
            { src: 'Img/assets/plant.png', x: 3700, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/bricks.png', x: 3990, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 4090, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 4190, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/mmmm.png', x: 4210, y: window.innerHeight / 2.3, width: 50, height: 50 },
            { src: 'Img/assets/bricks.png', x: 4280, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 4380, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 4480, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/plant.png', x: 4700, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/green.png', x: 5000, y: window.innerHeight / 2.2, width: 200, height: 300 },
            { src: 'Img/assets/green.png', x: 5300, y: window.innerHeight / 1.95, width: 160, height: 260 },
            { src: 'Img/assets/green.png', x: 5600, y: window.innerHeight / 1.75, width: 120, height: 220 },
            { src: 'Img/assets/bricks.png', x: 5800, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 5890, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 5980, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 6070, y: window.innerHeight / 1.9, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 6380, y: window.innerHeight / 1.7, width: 100, height: 100 },
            { src: 'Img/assets/bricks.png', x: 6470, y: window.innerHeight / 1.7, width: 100, height: 100 },
            { src: 'Img/assets/plant.png', x: 6650, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/bricks.png', x: 7000, y: window.innerHeight / 2.1, width: 80, height: 80 },
            { src: 'Img/assets/plant.png', x: 7200, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/strec.png', x: 7480, y: window.innerHeight / 2.1, width: 500, height: 25 },
            { src: 'Img/assets/plant.png', x: 8000, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/green.png', x: 8300, y: window.innerHeight / 2.2, width: 200, height: 300 },
            { src: 'Img/assets/plant.png', x: 8600, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/strec.png', x: 8880, y: window.innerHeight / 2.1, width: 500, height: 25 },
            { src: 'Img/assets/plant.png', x: 9500, y: window.innerHeight / 1.75, width: 200, height: 220 },
            { src: 'Img/assets/bricks.png', x: 9800, y: window.innerHeight / 3.09, width: 100, height: 100 },
            { src: 'Img/assets/strec.png', x: 10000, y: window.innerHeight / 1.5, width: 500, height: 25 },
            { src: 'Img/assets/ende.png', x: 10390, y: window.innerHeight / 23, width: 150, height: 400 },
        ];


        this.backgroundImages = [
            { img: new Image(), src: 'Img/Back/1.png', x: 0 },
            { img: new Image(), src: 'Img/Back/2.png', x: window.innerWidth },
            { img: new Image(), src: 'Img/Back/3.png', x: window.innerWidth * 2 }
        ];

        this.loadedImages = [];
        this.images.forEach((imageData, index) => {
            const img = new Image();
            img.src = imageData.src;
            img.onload = () => {
                this.loadedImages[index] = img;
            };
        });



        this.loadedBackgrounds = [];
        this.backgroundImages.forEach((imageData, index) => {
            const bgImg = imageData.img;
            bgImg.src = imageData.src;
            bgImg.onload = () => {
                this.loadedBackgrounds[index] = {
                    img: bgImg,
                    x: imageData.x
                };
            };
        });

        this.marioImages = {
            right: [new Image(), new Image()],
            left: [new Image(), new Image()],
            jump: new Image(),
        };
        this.luigiImages = {
            right: [new Image(), new Image()],
            left: [new Image(), new Image()],
            jump: new Image(),
        };
        this.marioImages.right[0].src = 'Img/mario-l.png';
        this.marioImages.right[1].src = 'Img/mario-r.png';
        this.marioImages.left[0].src = 'Img/mario-l.png';
        this.marioImages.left[1].src = 'Img/mario-r.png';
        this.marioImages.jump.src = 'Img/m-fly.png';

        this.luigiImages.right[0].src = 'Img/L/l-r.png';
        this.luigiImages.right[1].src = 'Img/L/l-l.png';
        this.luigiImages.left[0].src = 'Img/L/l-r.png';
        this.luigiImages.left[1].src = 'Img/L/l-l.png';
        this.luigiImages.jump.src = 'Img/L/l-flypng';

        this.currentMarioImage = this.marioImages.right[0];
        this.marioWidth = 80;
        this.marioHeight = 90;
        this.marioX = 50;
        this.marioY = window.innerHeight - this.marioHeight - 50;
        this.jumpSpeed = 20;
        this.gravity = 0.8;
        this.velocity = 0;
        this.isJumping = false;
        this.direction = 'right';
        this.movementSpeed = 10;
        this.airMovementSpeed = 10;
        this.keyState = {};
        this.groundLevel = window.innerHeight - this.marioHeight - 50;
        this.gameOver = false;
        this.isMoving = false;
        this.win = false;

        this.isAtLeftEdge = false;
        this.isAtRightEdge = false;



    }


    loadAndDrawImages() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        // Hier wird der Hintergrund und die Plattformen gezeichnet
        this.loadedBackgrounds.forEach((bg) => {
            if (bg && bg.img) {
                this.context.drawImage(bg.img, bg.x, 0, this.context.canvas.width, this.context.canvas.height);
            }
        });      

        this.images.forEach((imageData, index) => {
            const img = this.loadedImages[index];
            if (img) {
                this.context.drawImage(img, imageData.x, imageData.y, imageData.width, imageData.height);
            }
        });


        // Hier wird Mario gezeichnet
        this.context.drawImage(this.currentMarioImage, this.marioX, this.marioY, this.marioWidth, this.marioHeight);
    }

    changeCharacter(character) {
        if (character === 'luigi') {
            this.currentCharacter = 'luigi';
            this.marioImages = this.luigiImages;
        } else {
            this.currentCharacter = 'mario';
            this.marioImages = this.marioImages;
        }
        this.currentMarioImage = this.marioImages.right[0];
    }


    checkGameOver() {
        this.images.forEach((platform) => {
            if (
                platform.src === 'Img/assets/plant.png' &&
                this.marioX < platform.x + platform.width &&
                this.marioX + this.marioWidth > platform.x &&
                this.marioY < platform.y + platform.height &&
                this.marioY + this.marioHeight > platform.y
            ) {
                this.gameOver = true;
                this.endGame('gameOver');
            }
        });
    }
    checkWin() {
        this.images.forEach((imageData) => {
            if (
                imageData.src === 'Img/assets/ende.png' &&
                this.marioX < imageData.x + imageData.width &&
                this.marioX + this.marioWidth > imageData.x &&
                this.marioY < imageData.y + imageData.height &&
                this.marioY + this.marioHeight > imageData.y
            ) {
                this.win = true;
                this.endGame('win');
            }
        });
    }


    endGame(result) {
        // Stop background music
        this.backgroundMusic.pause();
        this.backgroundMusic.currentTime = 0;

        if (result === 'gameOver') {
            this.gameOverSound.play();
            alert('Game Over! Mario hat die Pflanze berührt.');
        } else if (result === 'win') {
            this.winSound.play();
            alert('Herzlichen Glückwunsch! Sie haben gewonnen!');
        }

        window.location.reload();
    }

    animateMario(timestamp) {
        this.loadAndDrawImages();
        this.checkGameOver();
        this.checkWin();

        // Hier wird die Sprunglogik von Mario gehandhabt
        if (this.isJumping) {
            this.currentMarioImage = this.marioImages.jump;
            let standingOnPlatform = false;
            this.images.forEach((platform) => {
                if (
                    this.marioX < platform.x + platform.width &&
                    this.marioX + this.marioWidth > platform.x &&
                    this.marioY + this.marioHeight >= platform.y &&
                    this.marioY + this.marioHeight <= platform.y + platform.height &&
                    this.velocity > 0
                ) {
                    this.marioY = platform.y - this.marioHeight;
                    this.isJumping = false;
                    this.velocity = 0;
                    standingOnPlatform = true;
                }
            });

            if (!standingOnPlatform) {
                this.velocity += this.gravity;
                this.marioY += this.velocity;
            }
        } else {
            // Hier wird die Bewegung von Mario gehandhabt, wenn er nicht springt
            let standingOnPlatform = false;
            this.images.forEach((platform) => {
                if (
                    this.marioX < platform.x + platform.width &&
                    this.marioX + this.marioWidth > platform.x &&
                    this.marioY + this.marioHeight >= platform.y &&
                    this.marioY + this.marioHeight <= platform.y + platform.height
                ) {
                    this.marioY = platform.y - this.marioHeight;
                    standingOnPlatform = true;
                }
            });

            // Gravitation wird hinzugefügt, wenn Mario nicht auf einer Plattform steht
            if (!standingOnPlatform && this.marioY + this.marioHeight < this.groundLevel) {
                this.velocity += this.gravity;
                this.marioY += this.velocity;
            } else if (this.marioY + this.marioHeight >= this.groundLevel) {
                this.marioY = this.groundLevel;
                this.velocity = 0;
            }

            // Das aktuelle Bild von Mario wird basierend auf seiner Bewegungsrichtung festgelegt
            if (!this.isJumping) {
                this.currentMarioImage = this.direction === 'right' ? this.marioImages.right[0] : this.marioImages.left[0];
            }
        }

        // Hier wird überprüft, ob Mario am linken oder rechten Rand ist
        this.isAtLeftEdge = this.marioX <= 0;
        this.isAtRightEdge = this.marioX + this.marioWidth >= this.context.canvas.width;

        // Hier wird Mario bewegt, wenn er sich bewegt
        if (this.isMoving) {
            if (this.direction === 'right' && !this.isAtRightEdge) {
                this.moveBackgroundRight();
            } else if (this.direction === 'left' && !this.isAtLeftEdge) {
                this.moveBackgroundLeft();
            }
        }

        // Die Animation wird fortgesetzt, wenn das Spiel nicht vorbei ist
        if (!this.gameOver && !this.win) {
            requestAnimationFrame((ts) => this.animateMario(ts));
        }
    }

    jumpMario() {
        if (!this.isJumping && !this.gameOver) {
            this.isJumping = true;
            this.velocity = -this.jumpSpeed;
        }
    }

    moveLeft() {
        if (!this.gameOver && !this.isAtLeftEdge) {
            this.direction = 'left';
            this.marioX -= this.isJumping ? this.airMovementSpeed : this.movementSpeed;
            this.isMoving = true;
        }
    }

    moveRight() {
        const endPosition = 10400; // x-Position des 'ende' Bildes
        if (!this.gameOver && !this.isAtRightEdge && this.marioX + this.marioWidth < endPosition) {
            this.direction = 'right';
            this.marioX += this.isJumping ? this.airMovementSpeed : this.movementSpeed;
            this.isMoving = true;
            if (this.marioX + this.marioWidth > endPosition) {
                this.marioX = endPosition - this.marioWidth; // Verhindert das Bewegen über endPosition hinaus
            }
        }
    }

    moveBackgroundRight() {
        const canvasWidth = this.context.canvas.width;
        const moveSpeed = this.isJumping ? this.airMovementSpeed : this.movementSpeed;

        // Move backgrounds
        this.loadedBackgrounds.forEach((bg, index) => {
            bg.x -= moveSpeed;
            if (bg.x + canvasWidth <= 0) {
                // Calculate the new x position to remove gaps
                bg.x = this.loadedBackgrounds[(index + this.backgroundImages.length - 1) % this.backgroundImages.length].x + canvasWidth;
            }
        });

        // Move platforms
        this.images.forEach((platform) => {
            platform.x -= moveSpeed;
        });
    }

    moveBackgroundLeft() {
        const moveSpeed = this.isJumping ? this.airMovementSpeed : this.movementSpeed;

        // Move backgrounds
        this.loadedBackgrounds.forEach((bg, index) => {
            bg.x += moveSpeed;
            if (bg.x >= this.context.canvas.width) {
                // Calculate the new x position to remove gaps
                bg.x = this.loadedBackgrounds[(index + 1) % this.backgroundImages.length].x - this.context.canvas.width;
            }
        });

        // Move platforms
        this.images.forEach((platform) => {
            platform.x += moveSpeed;
        });
    }
}



function startGame() {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';

    var imageLoader = new ImageLoader(ctx);
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