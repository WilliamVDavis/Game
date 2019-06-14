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
// body.setCollideWorldBounds(); 
// scene.physics.world.bounds.x = 900;
// scene.physics.world.bounds.y = 700;
// scene.physics.world.bounds.width = 900;
// scene.physics.world.bounds.height = 700;
// scene.physics.world.checkCollision.left = x-=5;
// scene.physics.world.checkCollision.right = x+=5;
// scene.physics.world.checkCollision.up = y-=5;
// scene.physics.world.checkCollision.down = y+=5;
