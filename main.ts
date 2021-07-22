namespace SpriteKind {
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f 8 f f f . . 
        f f f f 8 f f f 8 f f . . 
        f 8 f f 8 8 f f f 8 8 f f 
        f 8 8 f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b 9 e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f f f f f f f . . . 
        . . f f f f 8 8 f f . . . 
        . . f f f f f f f f . . . 
        . . e 4 4 e f f f f . . . 
        . . f e e f f f f f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f 8 f f f . . 
        f f f f 8 f f f 8 f f f . 
        f 8 f f 8 8 f f f 8 8 f f 
        f 8 8 f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b 9 e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f f f f f f f . . . 
        . . f f f 4 e 8 f f . . . 
        . . f f 4 4 e f f f . . . 
        . f f f e e f f f f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f 8 f f f . . 
        f f f f 8 f f f 8 f f f . 
        f 8 f f 8 8 f f f 8 8 f f 
        f 8 8 f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b 9 e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f f f f f f f . . . 
        . 4 4 f 8 8 8 f f f . . . 
        . e 4 f f f f f f f . . . 
        . f e e f f f f f f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f 8 f f f . . 
        f f f f f f 8 8 f f f 8 . 
        f f f 8 f f f f f f f 8 . 
        8 8 8 f f f f f f f 8 8 . 
        f f f f f e e f f f f f . 
        f f f b 9 e e 9 b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f f 8 8 f f f f 8 8 f f . 
        e 4 f f f f f f f f 4 e . 
        e e f f f f f f f f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f f f f f f f . . 
        . . f f f f f f 8 f f f . 
        f f f f f f f 8 8 f f f 8 
        f f f f 8 f f f f f f f 8 
        . 8 8 8 f f f e e f f 8 8 
        . f f f f f e e f f 8 8 f 
        . f f f b 9 e e 9 b f f f 
        . f f 4 1 f 4 4 f 1 4 f f 
        . . f f f f f f f f f f f 
        . f e 8 8 f f f 8 4 4 4 f 
        . e 4 f f f f f f 4 4 e . 
        . . . f f f f f f e e . . 
        . . . f f f f f f f . . . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f 8 f f f f f f . . 
        8 f f f 8 8 f f f f f f f 
        8 f f f f f f f 8 f f f f 
        8 8 f f e e f f f 8 8 8 . 
        f 8 8 f f e e f f f f f . 
        f f f b 9 e e 9 b f f f . 
        f f 4 1 f 4 4 f 1 4 f f . 
        f f f f f f f f f f f . . 
        f 4 4 4 8 f f f 8 8 e f . 
        . e 4 4 f f f f f f 4 e . 
        . . e e f f f f f f . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    true
    )
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mainchara)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f 8 f f f f f f . 
        . . f f 8 f f f 8 f f f f 
        f f 8 8 f f f 8 8 f f 8 f 
        f f f f f e f f f f 8 8 f 
        . f f f e e f f f f f f f 
        . . f f e e 9 b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f f f f f f f f f . 
        . . . f f 8 8 f f f f . . 
        . . . f f f f f f f f . . 
        . . . f f f f e 4 4 e . . 
        . . . f f f f f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f 8 f f f f f f . 
        . f f f 8 f f f 8 f f f f 
        f f 8 8 f f f 8 8 f f 8 f 
        f f f f f e f f f f 8 8 f 
        . f f f e e f f f f f f f 
        . . f f e e 9 b f e e f f 
        . . f f 4 4 f 1 e 4 e f . 
        . . . f f f f f f f f f . 
        . . . f f 8 e 4 f f f . . 
        . . . f f f e 4 4 f f . . 
        . . f f f f f e e f f f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f 8 f f f f f f . 
        . f f f 8 f f f 8 f f f f 
        f f 8 8 f f f 8 8 f f 8 f 
        f f f f f e f f f f 8 8 f 
        . f f f e e f f f f f f f 
        . f f f e e 9 b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f f f f f f f f f . 
        . . . f f f 8 8 8 f 4 4 . 
        . . . f f f f f f f 4 e . 
        . . f f f f f f f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    if (getketFlag == 1) {
        door.destroy()
        tiles.setWallAt(tiles.getTileLocation(4, 12), false)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . . f f f f . . . . . 
        . . f f 8 8 8 8 f f . . . 
        . f f 8 8 8 8 8 8 f f . . 
        f f 8 8 8 8 8 8 8 8 f f . 
        f f 8 8 f 8 8 8 8 8 8 f . 
        f f f f f 8 8 8 f 8 8 f . 
        f f f f 8 8 8 f 8 8 f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f f f f f f f f f f f f . 
        e 4 f f f f f f f f 4 e . 
        e e f f f f f f f f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f 8 8 8 8 f f . . 
        . f f f 8 8 8 8 8 8 f f . 
        f f 8 8 8 8 8 8 8 8 8 f f 
        f 8 8 8 8 f 8 8 8 8 8 8 f 
        . f f f f 8 8 8 8 f 8 8 f 
        . f f f f 8 8 f 8 8 8 f f 
        . f f f f f f f f f f f f 
        . f f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f f f 
        . . 4 f f f f f f f 4 4 e 
        . . e f f f f f f f e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . f f f f . . . . 
        . . . f f 8 8 8 8 f f . . 
        . . f f 8 8 8 8 8 8 f f . 
        . f f f 8 8 8 8 8 8 8 f f 
        f f f 8 8 8 8 8 8 8 8 8 f 
        f f 8 8 8 f 8 8 8 8 8 8 f 
        . f f f f f 8 8 8 f 8 f f 
        . f f f f 8 8 f f f f f f 
        . . f f f f f f f f f f f 
        . . f f f f f f f f f f . 
        . . f f f f f f f f f f . 
        . f f f f f f f f f f f . 
        . e 4 4 f f f f f f f 4 . 
        . . e e f f f f f f f e . 
        . . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    music.magicWand.play()
    key.destroy(effects.halo, 200)
    getketFlag = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        shuriken = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 f . . . . . . . 
            . . . . . 6 f f f 6 . . . . . . 
            . . . . . . 6 f f f 6 . . . . . 
            . . . . . . . f 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mainchara, controller.dx(), controller.dy())
        animation.runImageAnimation(
        shuriken,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 f . . . . . . . 
            . . . . . 6 f f f 6 . . . . . . 
            . . . . . . 6 f f f 6 . . . . . 
            . . . . . . . f 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 . 6 6 . . . . . . 
            . . . . . . 9 f f . . . . . . . 
            . . . . . . . f f 9 . . . . . . 
            . . . . . . 6 6 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . 6 f . . . . . . . 
            . . . . . 9 f f f 9 . . . . . . 
            . . . . . . 9 f f f 9 . . . . . 
            . . . . . . . f 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 . 9 9 . . . . . . 
            . . . . . . 6 f f . . . . . . . 
            . . . . . . . f f 6 . . . . . . 
            . . . . . . 9 9 . 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 9 . . . . . . . 
            . . . . . . . 9 f . . . . . . . 
            . . . . . 6 f f f 6 . . . . . . 
            . . . . . . 6 f f f 6 . . . . . 
            . . . . . . . f 9 . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 . 6 6 . . . . . . 
            . . . . . . 9 f f . . . . . . . 
            . . . . . . . f f 9 . . . . . . 
            . . . . . . 6 6 . 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . 6 f . . . . . . . 
            . . . . . 9 f f f 9 . . . . . . 
            . . . . . . 9 f f f 9 . . . . . 
            . . . . . . . f 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    }
})
let shuriken: Sprite = null
let door: Sprite = null
let getketFlag = 0
let key: Sprite = null
let mainchara: Sprite = null
mainchara = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f 8 f f f . . 
    f f f f f f 8 8 f f f 8 . 
    f f f 8 f f f f f f f 8 . 
    8 8 8 f f f f f f f 8 8 . 
    f f f f f e e f f 8 8 f . 
    f f f b 9 e e 9 b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f f 8 8 f f f f 8 8 f f . 
    e 4 f f f f f f f f 4 e . 
    e e f f f f f f f f e e . 
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
