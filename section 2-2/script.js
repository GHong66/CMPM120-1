class GarrettGame extends Phaser.Scene {
    constructor(){
        super('GarrettGame');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('cube', 'cube.png');
    }
    create(){
        this.graphics = this.add.graphics();
        //adding shapes
        this.graphics.fillStyle(0x00000, 1);
        this.graphics.fillCircle(100, 100, 50);
        this.graphics.fillTriangle(250, 50, 200, 150, 300, 150); //x1, y1, x2, y2, x3, y3
        this.graphics.fillEllipse(450, 100, 200, 100, 360);   // x, y, width, height, smoothness

        //adding lines
        this.graphics.lineStyle(10, 0x0000ff, 1);    //linewidth, color, opacity
        this.graphics.lineBetween(200,100,300 ,100); //x1, y1, x2, y2
        this.graphics.lineStyle(5, 0x000000, 0.5);
        this.graphics.lineBetween(250,100,450,100); 

        // add gradiant shapes
        this.graphics.fillGradientStyle(0xff0000, 0xffff00, 0xffff00,0xffff00, 1, 1, 0.1, 0.1); 
        this.graphics.fillRect(600,50,150,100); //x1,y1, width, height

        //create text object
        this.textObject = this.add.text(
            50, //x
            200,//y
            "hello world!", //text
            {
                font: "40px Arial",
                color: "#pink",
            } //style
        );

        //create image object 
        this.imageObject = this.add.image(
            900,//x
            900,//y
            'cube',//imagename
        )
        this.imageObject.setScale(0.8) //resize

        // Add tweens
        this.tweens.add({
            targets: this.textObject,
            x:500,
            y: 1000,
            alpha:0,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });

        this.tweens.add({
            targets: this.imageObject,
            x:500,
            y:500,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });
    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 1000,
    height: 800,
    backgroundColor: 0x3e79b5,
    scene: [GarrettGame],

}

let game = new Phaser.Game(config);