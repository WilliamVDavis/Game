class ex1 extends Phaser.Scene {
    constructor() {
        super({key:"ex1"});
    }

    preload(){
       this.load.image('background', 'jungle.jpg');
       this.load.image('possum', 'possumready.gif'); 
       this.load.image('boomerang', 'boomerang4.jpeg');
       this.load.image('cat1', 'cat.png');
       this.load.image('stone1', 'stoneL.png');
       this.load.image('stone2', 'stoneD.png');
       this.load.image('stone3', 'stoneR.png');
       this.load.image('stone4', 'stoneU.png');
    }

    create(){
        this.image = this.add.image(450,350,'background');
        this.image = this.add.image(200, 100,'stone1');
        this.image = this.add.image(175, 115,'stone2');
        this.image = this.add.image(175, 150,'stone2');
        this.image = this.add.image(175, 180,'stone2');
        this.image = this.add.image(175, 210,'stone2');
        this.image = this.add.image(175, 240,'stone2');
        this.image = this.add.image(200, 255,'stone3');
        this.image = this.add.image(230, 255,'stone3');
        this.image = this.add.image(260, 255,'stone3');
        this.image = this.add.image(290, 255,'stone3');
        this.image = this.add.image(320, 255,'stone3');
        this.image = this.add.image(350, 255,'stone3');
        this.image = this.add.image(380, 255,'stone3');
        this.image = this.add.image(410, 255,'stone3');
        this.image = this.add.image(440, 255,'stone3');
        this.image = this.add.image(460, 275,'stone2');
        this.image = this.add.image(460, 305,'stone2');
        this.image = this.add.image(460, 335,'stone2');
        this.image = this.add.image(460, 365,'stone2');
        this.image = this.add.image(460, 395,'stone2');
        this.image = this.add.image(475, 415,'stone3');
        this.image = this.add.image(505, 415,'stone3');
        this.image = this.add.image(535, 415,'stone3');
        this.image = this.add.image(565, 415,'stone3');
        this.image = this.add.image(595, 415,'stone3');
        this.image = this.add.image(610, 400,'stone4');
        this.image = this.physics.add.image(625, 100,'cat1');
        possum = this.image = this.physics.add.image(100, 500,'possum').setDepth(1);

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.key_B = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);

        // var Boomerang = new Phaser.Class({

        //     Extends: Phaser.GameObjects.Image,
    
        //     initialize:
    
        // //     function Boomerang (scene)
        //     {
        //         Phaser.GameObjects.Image.call(this, scene, 0, 0, 'boomarang');
    
        //         this.speed = Phaser.Math.GetSpeed(400, 1);
        //     },
    
        //     fire: function (x, y)
        //     {
        //         this.setPosition(x, y - 50);
    
        //         this.setActive(true);
        //         this.setVisible(true);
        //     },
    
        //     update: function (time, delta)
        //     {
        //         this.y -= this.speed * delta;
    
        //         if (this.y < -50)
        //         {
        //             this.setActive(false);
        //             this.setVisible(false);
        //         }
        //     }
    
        // });
        // boomerangs = this.add.group({
        //     classType: Boomerang,
        //     maxsize: 10,
        //     runChildUpdate: true
        // });

        this.input.on('pointerdown', function(event)  {
            this.image.x = event.x;
            this.image.y = event.y;
        },this);

       this.input.keyboard.on('keyup', function(e) {
           if(e.key == "2") {
               this.scene.start("ex2");
           }

       }, this);
       
               
    }

    update (delta){
        if(this.key_A.isDown)
        this.image.x-=5;
        if(this.key_D.isDown)
        this.image.x+=5;  
        if(this.key_S.isDown)
        this.image.y+=5;
        if(this.key_W.isDown)
        this.image.y-=5;
        // if(this.key_B.isDown && time > lastFired)
        // {
        //     var boomerang = boomerangs.get();
        //     if (boomerang)
        //     {
        //         boomerang.fire(possum.x, possum.y);

        //         lastFired = time + 50;
        //     }
        // }
    }  
    
}

