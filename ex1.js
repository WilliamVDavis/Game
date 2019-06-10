class ex1 extends Phaser.Scene {
    constructor() {
        super({key:"ex1"});
    }
    preload() {
        this.load.image('images', 'images.jpeg');
    }

    create() {
        this.image = this.add.image(400,300,'images'); 
    }
}
var Phaser;
var Scene;