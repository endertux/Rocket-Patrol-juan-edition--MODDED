// Name: Helwa Halloum
// Mod Title: Rocket Patrol: Juan Edition
// Completion Time: 
    // started: jan 30, 3pm (1.5 hours), jan 31, 4pm-1:49am (10 hrs), feb 1 12pm-6:30pm (6 hrs)
// Mods: 
    // 4th rocket(5),
    // display time(3)
    // Create a new title screen(3) 
    // looping background music(1) 
    // fire UI(1)
    // new background tile(1)


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