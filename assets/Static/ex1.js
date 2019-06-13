class ex1 extends Phaser.Scene {
    constructor() {
        super({key:"ex1"});
    }

    preload(){
       this.load.image('background', 'jungle.jpg');
       this.load.image('possum', 'possumready.gif'); 
       this.load.image('boomerang', 'boomerang4.jpeg');
       
    }

    create(){
        this.image = this.add.image(400,300,'background');

        this.image = this.add.image(300,400,'possum');

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
        boomerangs = this.add.group();
        boomerangs.enableBody = true;
        boomerangs.physicsBodyType = Phaser.Physics.Arcade;
        boomerangs.createMultiple(30, 'boomarang');
        //boomerangs.setAll('anchor.x', 0.5);
        //boomerangs.setAll('anchor.y', 1);
        //boomerangs.setAll('outOfBoundsKill', true);
        //boomerangs.setAll('checkWorldBounds', true);

        fireButton = this.input.keyboard.addKey(Phaser.Input.Keyboard.SPACEBAR);

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
        this.image.x-=7;
        if(this.key_D.isDown)
        this.image.x+=7;  
        if(this.key_S.isDown)
        this.image.y+=7;
        if(this.key_W.isDown)
        this.image.y-=7;
        if(fireButton.isDown)
        fireBoomerang();
        
    }  
    fireBoomerang(){
        if(this.time.now > boomerangTime) {
    
            boomerang  = boomerangs.getFirstExists(false);
    
    
            if(boomerang){
                boomerang.reset(image.x,image.y);
                boomerang.body.velocity.y = -400;
                boomerangTime = this.time.now + 200; 
           }
        }
    }       
}

