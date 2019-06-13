class ex1 extends Phaser.Scene {
    constructor() {
        super({key:"ex1"});
    }

    preload(){
       this.load.image('background', 'jungle.jpg')
       this.load.image('possum', 'possumready.gif') 
       
    }

    create(){
        this.image = this.add.image(400,300,'background');

        this.image = this.add.image(300,400,'possum');

        this.key_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

        this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        
        

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
    }  
        
}
