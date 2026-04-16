class SnakeGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.gridSize = 20;
        this.reset();
        
        // Ecouteur de touches moderne
        window.addEventListener('keydown', (e) => this.changeDirection(e));
        
        // Boucle de jeu
        this.gameInterval = setInterval(() => this.update(), 100);
    }

    reset() {
        this.snake = [{x: 160, y: 160}, {x: 140, y: 160}, {x: 120, y: 160}];
        this.dx = this.gridSize; // Vitesse X
        this.dy = 0;             // Vitesse Y
        this.score = 0;
        this.createFood();
        this.updateScore();
    }

    createFood() {
        this.food = {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)) * this.gridSize,
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize)) * this.gridSize
        };
    }

    update() {
        if (this.isGameOver()) {
            alert(`Game Over! Score: ${this.score}`);
            this.reset();
            return;
        }

        this.moveSnake();
        this.draw();
    }

    moveSnake() {
        const head = { x: this.snake[0].x + this.dx, y: this.snake[0].y + this.dy };
        this.snake.unshift(head);

        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.updateScore();
            this.createFood();
        } else {
            this.snake.pop();
        }
    }

    draw() {
        // Effacer le canvas
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Dessiner la nourriture
        this.ctx.fillStyle = "#e74c3c";
        this.ctx.fillRect(this.food.x, this.food.y, this.gridSize - 2, this.gridSize - 2);

        // Dessiner le serpent
        this.ctx.fillStyle = "#2ecc71";
        this.snake.forEach(part => {
            this.ctx.fillRect(part.x, part.y, this.gridSize - 2, this.gridSize - 2);
        });
    }

    changeDirection(event) {
        const key = event.keyCode;
        const GOING_UP = this.dy === -this.gridSize;
        const GOING_DOWN = this.dy === this.gridSize;
        const GOING_RIGHT = this.dx === this.gridSize;
        const GOING_LEFT = this.dx === -this.gridSize;

        if (key === 37 && !GOING_RIGHT) { this.dx = -this.gridSize; this.dy = 0; }
        if (key === 38 && !GOING_DOWN)  { this.dx = 0; this.dy = -this.gridSize; }
        if (key === 39 && !GOING_LEFT)  { this.dx = this.gridSize; this.dy = 0; }
        if (key === 40 && !GOING_UP)    { this.dx = 0; this.dy = this.gridSize; }
    }

    isGameOver() {
        const head = this.snake[0];
        const hitWall = head.x < 0 || head.x >= this.canvas.width || head.y < 0 || head.y >= this.canvas.height;
        const hitSelf = this.snake.slice(1).some(part => part.x === head.x && part.y === head.y);
        return hitWall || hitSelf;
    }

    updateScore() {
        document.getElementById('score').innerText = this.score;
    }
}

// Initialisation
new SnakeGame('snakeGame')