class ex1 extends Phaser.Scene {
    constructor() {
        super({key:"ex1"});
    }

    preload(){
       this.load.image('background', 'jungle.jpg');
       this.load.image('possum', 'possumready.gif'); 
       this.load.image('boomerang', 'Hueso.gif');//http://yolcati.deviantart.com/
       this.load.image('hippo', 'hippo.png');
       this.load.image('stone1', 'stoneL.png');
       this.load.image('stone2', 'stoneD.png');
       this.load.image('stone3', 'stoneR.png');
       this.load.image('stone4', 'stoneU.png');
       this.load.image('bricks', 'bricks.png');
       this.load.image('bricks1', 'bricksU.png');
    //    this.load.image('ratking', 'ratking.bmp');
    }

    create(){
        this.image = this.add.image(450,350,'background');
        this.image = this.add.image(200, 100,'stone1');
        stoneD = this.add.image(175, 115,'stone2');
        stoneD = this.add.image(175, 150,'stone2');
        stoneD = this.add.image(175, 180,'stone2');
        stoneD = this.add.image(175, 210,'stone2');
        stoneD = this.add.image(175, 240,'stone2');
        this.image = this.add.image(200, 255,'stone3');
        this.image = this.add.image(230, 255,'stone3');
        this.image = this.add.image(260, 255,'stone3');
        this.image = this.add.image(290, 255,'stone3');
        this.image = this.add.image(320, 255,'stone3');
        this.image = this.add.image(350, 255,'stone3');
        this.image = this.add.image(380, 255,'stone3');
        this.image = this.add.image(410, 255,'stone3');
        this.image = this.add.image(440, 255,'stone3');
        stoneD = this.add.image(460, 275,'stone2');
        stoneD = this.add.image(460, 305,'stone2');
        stoneD = this.add.image(460, 335,'stone2');
        stoneD = this.add.image(460, 365,'stone2');
        stoneD = this.add.image(460, 395,'stone2');
        this.image = this.add.image(475, 415,'stone3');
        this.image = this.add.image(505, 415,'stone3');
        this.image = this.add.image(535, 415,'stone3');
        this.image = this.add.image(565, 415,'stone3');
        this.image = this.add.image(595, 415,'stone3');
        this.image = this.add.image(610, 400,'stone4');
        bricks = this.add.image(125, 720, 'bricks');
        bricks = this.add.image(375, 720, 'bricks');
        bricks = this.add.image(625, 720, 'bricks');
        bricks = this.add.image(875, 720, 'bricks');
        bricks1 = this.add.image(-20, 600, 'bricks1');
        bricks1 = this.add.image(-20, 350, 'bricks1');
        bricks1 = this.add.image(-20, 120, 'bricks1');
        bricks = this.add.image(125, -20, 'bricks');
        bricks = this.add.image(375, -20, 'bricks');
        bricks = this.add.image(625, -20, 'bricks');
        bricks = this.add.image(875, -20, 'bricks');
        bricks1  = this.add.image(920, 600, 'bricks1');
        bricks1 = this.add.image(920, 350, 'bricks1');
        bricks1 = this.add.image(920, 120, 'bricks1');
        boomerang = this.physics.add.image(possum, possum, 'boomerang').setBounce(.65); //http://yolcati.deviantart.com/
        hippo = this.physics.add.image(625, 100,'hippo');
        possum = this.physics.add.image(100, 500,'possum');
        // ratking = this.physics.add.image(625, 500, 'ratking');

        possum.setCollideWorldBounds(true);
        hippo.setCollideWorldBounds(true);
        boomerang.setCollideWorldBounds(true);
        
        this.physics.add.existing(bricks);
        this.physics.add.existing(bricks1);
        this.physics.add.existing(stoneD);

        stoneD.body.allowGravity = false;
        // stoneD.body.immovable = true;

        
        // bricks.body.allowGravity = false;
        // bricks.body.immovable = true;
       
        // bricks1.body.allowGravity = false;
        // bricks1.body.immovable = true;

        possum.body.allowGravity = false;
        // possum.body.immovable = true;

        hippo.body.allowGravity = false;
        hippo.body.immovable = true;

        var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
        var SetToAngle = Phaser.Geom.Line.SetToAngle;
        var velocityFromRotation = this.physics.velocityFromRotation;
        var velocity = new Phaser.Math.Vector2();
        var line = new Phaser.Geom.Line();
        // Disable physics body, deactivate game object, hide game object
        boomerang.disableBody(true, true);

        // possum = this.physics.add.group();
        this.physics.add.collider(possum, bricks);
        this.physics.add.collider(possum, bricks1);

    //     this.physics.add.collider(this.boomerang, this.bricks, this.hitBrick, null, this);
        
        this.physics.add.collider(boomerang, hippo, hitHippo, null, this);
          function  hitHippo (boomerang, hippo)
        {   
        hippo.disableBody(true, true);
        }
        

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_B = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
        this.key_I = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.key_J = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.key_K = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.key_L = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

        this.input.on('pointermove', function (pointer) {
            var angle = BetweenPoints(possum, pointer);
    
            SetToAngle(line, possum, possum, angle, 128);
            velocityFromRotation(angle, 1060, velocity);
            // mouseX = pointer.x;
            // mouseY = pointer.y;
        }, this);
    
        this.input.on('pointerdown', function () {
            // Enable physics body and reset (at position), activate game object, show game object
            boomerang.enableBody(true, possum.x, possum.y, true, true).setVelocity(velocity.x, velocity.y);
        }, this);

       this.input.keyboard.on('keyup', function(e) {
           if(e.key == "2") {
               this.scene.start("ex2");
           }

       }, this);

       this.input.keyboard.on('keyup', function (e) {
        if(hitHippo() = true) {
            this.scene.start("ex2");
        }
       }, this);
       
               
    }

    update (delta){
        if(this.key_A.isDown)
        possum.x-=5;
        if(this.key_D.isDown)
        possum.x+=5;  
        if(this.key_S.isDown)
        possum.y+=5;
        if(this.key_W.isDown)
        possum.y-=5;
        if(this.key_J.isDown)
        hippo.x-=5;
        if(this.key_L.isDown)
        hippo.x+=5;  
        if(this.key_K.isDown)
        hippo.y+=5;
        if(this.key_I.isDown)
        hippo.y-=5;
        //possum.setRotation(Phaser.Math.Angle.Between(mouseX, mouseY, possum.x, possum.y) - Math.PI / 2);
    }  
    
}

// hitPaddle: function (ball, paddle)
//     {
//         var diff = 0;

//         if (ball.x < paddle.x)
//         {
//             //  Ball is on the left-hand side of the paddle
//             diff = paddle.x - ball.x;
//             ball.setVelocityX(-10 * diff);
//         }
//         else if (ball.x > paddle.x)
//         {
//             //  Ball is on the right-hand side of the paddle
//             diff = ball.x -paddle.x;
//             ball.setVelocityX(10 * diff);
//         }
//         else
//         {
//             //  Ball is perfectly in the middle
//             //  Add a little random X to stop it bouncing straight up!
//             ball.setVelocityX(2 + Math.random() * 8);
//         }
