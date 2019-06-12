class ex2 extends Phaser.Scene{
    constructor() {
        super({key:"ex2"});
    }
    
    create(){
        this.text =this.add.text(0,0, "ex2 is ready to roll!", { font:"40px Impact"});
        
        this.input.keyboard.on('keyup', function(e) {
            if(e.key == "1") {
                this.scene.start("ex1");
            }
 
        }, this);
    }

}