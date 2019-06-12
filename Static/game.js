var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y : 200}
        }
    },
    scene: [ ex1, ex2 ]
};

var game = new Phaser.Game(config);