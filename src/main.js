// Name: Helwa Halloum
// Mod Title: Rocket Patrol: Juan Edition
// Completion Time: started: jan 30, 3pm (1.5 hour), jan 31, 4pm ()
// Mods: Create a new title screen, looping background music, 4th rocket


let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT