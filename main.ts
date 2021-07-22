namespace SpriteKind {
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (getketFlag == 1) {
        door.destroy()
        tiles.setWallAt(tiles.getTileLocation(4, 12), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    music.magicWand.play()
    key.destroy(effects.halo, 200)
    getketFlag = 1
})
let door: Sprite = null
let getketFlag = 0
let key: Sprite = null
let mainchara = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mainchara, 90, 90)
tiles.setTilemap(tilemap`レベル1`)
scene.cameraFollowSprite(mainchara)
tiles.placeOnRandomTile(mainchara, sprites.castle.tileDarkGrass3)
key = sprites.create(img`
    . . f f f f f f f f f f f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    f 5 5 5 f f f f f f f 5 5 5 4 f 
    f 5 5 f . . . . . . . f 5 5 4 f 
    f 5 5 f . . . . . . . f 5 5 4 f 
    f 5 5 5 f . . . . . f 5 5 5 4 f 
    . f 5 5 5 f f f f f 5 5 5 4 f . 
    . . f 5 5 5 5 5 5 5 4 4 4 f . . 
    . . . f f f f 5 4 f f f f . . . 
    . . . . . . f 5 4 f . . . . . . 
    . . . . . . f 5 4 f . . . . . . 
    . . . . . . f 5 4 f . . . . . . 
    . . . . f f f 5 4 f . . . . . . 
    . . . . f . 5 5 4 f . . . . . . 
    . . . . f f f 5 4 f . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.key)
tiles.placeOnRandomTile(key, sprites.castle.tileGrass1)
getketFlag = 0
door = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . f f e e e f f e e e f f . . 
    . f e e e e f f f f e e e e f . 
    . f f e f f e f f e f f e e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e 5 f f 5 e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f e f e e e f f e e e f e f . 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.door)
door.setPosition(74, 200)
tiles.setWallAt(tiles.getTileLocation(4, 12), true)
