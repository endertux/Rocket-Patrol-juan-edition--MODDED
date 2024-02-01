class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

preload() {
    //load title screen
    this.load.image("background_image", './assests/background.png');
    this.load.image("start_button", './assests/start_button.png');
    this.load.image("game_name", './assests/game_name.png');
    this.load.image("howplay", './assests/howplay.png')
    
    // load images/title sprites
    this.load.image('rocket', './assests/rocket.png')
    this.load.image('spaceship', './assests/spaceship.png')
    this.load.image('starfield', './assests/starfield.png')
    // load spritesheet
    this.load.spritesheet('explosion', './assests/explosion.png', {
        frameWidth: 64,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 9
    })
    // load audio
    this.load.audio('sfx-select', './assests/sfx-select.wav')
    this.load.audio('sfx-explosion', './assests/sfx-explosion.wav')
    this.load.audio('sfx-shot', './assests/sfx-shot.wav')
}

    create() {
    // animation config
    this.anims.create({
    key: 'explode',
    frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
    frameRate: 30
    })
        //this.add.text(20, 20, "Rocket Patrol Play")
        //this.scene.start("playScene")

        // display score
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backroundColor: '#F3B141',
            color: '#843605',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        
        // title screen
        this.add.sprite(310, 250, 'background_image')
        this.add.sprite(310, 250, 'game_name')
        this.add.sprite(310, 250, 'howplay')
    
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 60000
            }
            this.sound.play('sfx-select')
            this.scene.start('playScene')
        }
    }
}