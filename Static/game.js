var config = {
    type:Phaser.AUTO,
    width:900,
    height:700,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y : 0},
            checkCollision: {
                up: true,
                down: true,
                left: true,
                right: true
                },
        }
    },
    scene: [ ex1, ex2 ]
};

var game = new Phaser.Game(config);
var possum;
var cat1;
var shootTime = 0;
var boomerang;
var jungle;
var bricks;
var bricks1;
var mouseX = 0;
var mouseY = 0;
var hitCat1;
