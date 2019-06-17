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
            setBounds:{
                x: 900,
                y: 700,
                width: 900,
                height: 700,
                checkLeft: true,
                checkRight: true,
                checkUp: true,
                checkDown: true
            },  
            setBoundsCollision:{
                left: true,
                right: true,
                up: true,
                down: true
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
// scene.physics.world.checkCollision.left = true;
// scene.physics.world.checkCollision.right = true;
// scene.physics.world.checkCollision.up = true;
// scene.physics.world.checkCollision.down = true;