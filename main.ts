namespace SpriteKind {
    export const key = SpriteKind.create()
    export const door = SpriteKind.create()
    export const hime = SpriteKind.create()
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
        . . c c c c 8 8 8 6 . . . 
        . . c c c c 8 8 8 6 . . . 
        . . e 4 4 e 8 8 8 8 . . . 
        . . 8 e e 8 8 8 8 8 . . . 
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
        . . c c c 4 e 8 8 6 . . . 
        . . 8 8 4 4 e 8 8 6 . . . 
        . f 8 8 e e 8 8 8 f f . . 
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
        . 4 4 c 8 8 8 8 8 6 . . . 
        . e 4 c 8 8 8 8 8 6 . . . 
        . f e e 8 8 8 8 8 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `],
    100,
    true
    )
    PLdirection = 3
})
function MakeKey () {
    key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . f 4 4 . 5 f . . . . . 
        . . . . . f 4 5 5 5 f . . . . . 
        . . . . . . f 4 5 f . . . . . . 
        . . . . . f f 4 5 f . . . . . . 
        . . . . . f 4 4 5 f . . . . . . 
        . . . . . f f 4 5 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnRandomTile(key, sprites.dungeon.darkGroundSouthEast1)
    item1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 3 2 2 2 f . . . . . 
        . . . . . f 3 3 . 2 f . . . . . 
        . . . . . f 3 2 2 2 f . . . . . 
        . . . . . . f 3 2 f . . . . . . 
        . . . . . f f 3 2 f . . . . . . 
        . . . . . f 3 3 2 f . . . . . . 
        . . . . . f f 3 2 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnRandomTile(item1, assets.tile`myTile1`)
    item2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 8 6 6 6 f . . . . . 
        . . . . . f 8 8 . 6 f . . . . . 
        . . . . . f 8 6 6 6 f . . . . . 
        . . . . . . f 8 6 f . . . . . . 
        . . . . . f f 8 6 f . . . . . . 
        . . . . . f 8 8 6 f . . . . . . 
        . . . . . f f 8 6 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.key)
    tiles.placeOnRandomTile(item2, assets.tile`myTile`)
}
function Shuriken () {
    if (PLdirection == 0) {
        speedX = 0
        speedY = shurikenspeed
    } else if (PLdirection == 1) {
        speedX = 0
        speedY = 0 - shurikenspeed
    } else if (PLdirection == 2) {
        speedX = 0 - shurikenspeed
        speedY = 0
    } else if (PLdirection == 3) {
        speedX = shurikenspeed
        speedY = 0
    }
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
        `, mainchara, speedX, speedY)
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
        . . . . . a f f f 6 . . . . . . 
        . . . . . . a f f f 6 . . . . . 
        . . . . . . . f 8 . . . . . . . 
        . . . . . . . 8 . . . . . . . . 
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
        . . . . . . . f f 8 . . . . . . 
        . . . . . . a a . 8 . . . . . . 
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
        . . . . . 9 f f f 8 . . . . . . 
        . . . . . . 9 f f f 8 . . . . . 
        . . . . . . . f a . . . . . . . 
        . . . . . . . a . . . . . . . . 
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
        . . . . . . 6 . 8 8 . . . . . . 
        . . . . . . 6 f f . . . . . . . 
        . . . . . . . f f a . . . . . . 
        . . . . . . 9 9 . a . . . . . . 
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
        . . . . . . . . 8 . . . . . . . 
        . . . . . . . 8 f . . . . . . . 
        . . . . . 6 f f f a . . . . . . 
        . . . . . . 6 f f f a . . . . . 
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
        . . . . . . 8 . a a . . . . . . 
        . . . . . . 8 f f . . . . . . . 
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
        . . . . . . . . a . . . . . . . 
        . . . . . . . a f . . . . . . . 
        . . . . . 8 f f f 9 . . . . . . 
        . . . . . . 8 f f f 9 . . . . . 
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
        . . . . . . a . 9 9 . . . . . . 
        . . . . . . a f f . . . . . . . 
        . . . . . . . f f 6 . . . . . . 
        . . . . . . 8 8 . 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.hime, function (sprite, otherSprite) {
    game.over(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . . . . . . . . . . . 
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
        c c 8 8 6 f f 6 8 8 c c . 
        e 4 8 8 6 f f 6 8 8 4 e . 
        e e 8 8 8 f f 8 8 8 e e . 
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
        . f e 8 8 6 f f 6 4 4 4 f 
        . e 4 8 8 6 f f 6 4 4 e . 
        . . . 8 8 8 f f 8 e e . . 
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
        f 4 4 4 6 f f 6 8 8 e f . 
        . e 4 4 6 f f 6 8 8 4 e . 
        . . e e 8 f f 8 8 8 . . . 
        . . . f f f f f f f . . . 
        . . . . . . . f f f . . . 
        `],
    100,
    true
    )
    PLdirection = 0
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mainchara)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . . . . . . . . . . . 
        . . . f f f f f f f f f . 
        . . f f f 8 f f f f f f . 
        . . f f 8 f f f 8 f f f f 
        f f 8 8 f f f 8 8 f f 8 f 
        f f f f f e f f f f 8 8 f 
        . f f f e e f f f f f f f 
        . . f f e e 9 b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f f f f f f f f f . 
        . . . 6 8 8 8 c c c c . . 
        . . . 6 8 8 8 c c c c . . 
        . . . 8 8 8 8 e 4 4 e . . 
        . . . 8 8 8 8 8 e e 8 . . 
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
        . . . 6 8 8 e 4 c c c . . 
        . . . 6 8 8 e 4 4 8 8 . . 
        . . f f 8 8 8 e e 8 8 f . 
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
        . . . 6 8 8 8 8 8 c 4 4 . 
        . . . 6 8 8 8 8 8 c 4 e . 
        . . f f 8 8 8 8 8 e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `],
    100,
    true
    )
    PLdirection = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.door, function (sprite, otherSprite) {
    music.bigCrash.play()
    door.destroy(effects.warmRadial, 500)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainchara,
    [img`
        . . . . . . . . . . . . . 
        . . f f f f f f f f . . . 
        . f f 8 8 8 8 8 8 f f . . 
        f f 8 8 8 8 8 8 8 8 f f . 
        f f 8 8 f 8 8 8 8 8 8 f . 
        f f f f f 8 8 8 f 8 8 f . 
        f f f f 8 8 8 f 8 8 f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        c c 8 8 f 8 8 8 8 f c c . 
        e 4 8 8 8 8 8 8 8 8 4 e . 
        e e 8 8 8 8 8 8 8 8 e e . 
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
        . . c 8 8 8 8 8 8 8 8 c c 
        . . 4 8 8 8 8 8 8 8 4 4 e 
        . . e 8 8 8 8 8 8 8 e e . 
        . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . f f f f . . . . . 
        . . f f 8 8 8 8 f f . . . 
        . f f 8 8 8 8 8 8 f f f . 
        f f 8 8 8 8 8 8 8 8 8 f f 
        f 8 8 8 8 8 8 f 8 8 8 8 f 
        f 8 8 f 8 8 8 8 f f f f . 
        f f 8 8 8 f 8 8 f f f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        c c 8 8 8 8 8 8 8 8 c . . 
        e 4 4 8 8 8 8 8 8 8 4 . . 
        . e e 8 8 8 8 8 8 8 e . . 
        . . . . . . . f f f . . . 
        `],
    100,
    true
    )
    PLdirection = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy(effects.halo, 200)
    getketFlag += 1
})
function MainChara () {
    mainchara = sprites.create(img`
        . . . . . . . . . . . . 
        . . f f f f f f f f . . 
        . f f f f f f 8 f f f . 
        f f f f f f 8 8 f f f 8 
        f f f 8 f f f f f f f 8 
        8 8 8 f f f f f f f 8 8 
        f f f f f e e f f 8 8 f 
        f f f b 9 e e 9 b f f f 
        . f 4 1 f 4 4 f 1 4 f . 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        c c 8 8 6 f f 6 8 8 c c 
        e 4 8 8 6 f f 6 8 8 4 e 
        e e 8 8 8 f f 8 8 8 e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mainchara, 90, 90)
    PLdirection = 0
    scene.cameraFollowSprite(mainchara)
    tiles.placeOnTile(mainchara, tiles.getTileLocation(1, 1))
}
function Emeny () {
    emeny1 = sprites.create(img`
        . . . . . . . . . . . . 
        . . f f f f f f f f . . 
        . f f f f f f 5 f f f . 
        . f f f f f 5 5 f f f . 
        . f f 5 f f f f f f f . 
        . 5 5 f f f f f f f 5 . 
        . f f f f e e f f 5 5 . 
        . f f b 5 e e 5 b f f . 
        . f 4 1 f 4 4 f 1 4 f . 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        e 4 f f f f f f f f 4 e 
        e e f f f f f f f f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(emeny1, assets.tile`myTile`)
    emeny1.follow(mainchara, 40)
    emeny2 = sprites.create(img`
        . . . . . . . . . . . . 
        . . f f f f f f f f . . 
        . f f f f f f 5 f f f . 
        . f f f f f 5 5 f f f . 
        . f f 5 f f f f f f f . 
        . 5 5 f f f f f f f 5 . 
        . f f f f e e f f 5 5 . 
        . f f b 5 e e 5 b f f . 
        . f 4 1 f 4 4 f 1 4 f . 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        e 4 f f f f f f f f 4 e 
        e e f f f f f f f f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(emeny2, assets.tile`myTile1`)
    emeny2.follow(mainchara, 40)
    emeny3 = sprites.create(img`
        . . . . . . . . . . . . 
        . . f f f f f f f f . . 
        . f f f f f f 5 f f f . 
        . f f f f f 5 5 f f f . 
        . f f 5 f f f f f f f . 
        . 5 5 f f f f f f f 5 . 
        . f f f f e e f f 5 5 . 
        . f f b 5 e e 5 b f f . 
        . f 4 1 f 4 4 f 1 4 f . 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        e 4 f f f f f f f f 4 e 
        e e f f f f f f f f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(emeny3, assets.tile`myTile`)
    emeny3.follow(mainchara, 40)
    emeny4 = sprites.create(img`
        . . . . . . . . . . . . 
        . . f f f f f f f f . . 
        . f f f f f f 5 f f f . 
        . f f f f f 5 5 f f f . 
        . f f 5 f f f f f f f . 
        . 5 5 f f f f f f f 5 . 
        . f f f f e e f f 5 5 . 
        . f f b 5 e e 5 b f f . 
        . f 4 1 f 4 4 f 1 4 f . 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        e 4 f f f f f f f f 4 e 
        e e f f f f f f f f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(emeny4, assets.tile`myTile1`)
    emeny4.follow(mainchara, 40)
    emeny5 = sprites.create(img`
        . . . . . . . . . . . . 
        . . f f f f f f f f . . 
        . f f f f f f 5 f f f . 
        . f f f f f 5 5 f f f . 
        . f f 5 f f f f f f f . 
        . 5 5 f f f f f f f 5 . 
        . f f f f e e f f 5 5 . 
        . f f b 5 e e 5 b f f . 
        . f 4 1 f 4 4 f 1 4 f . 
        . f f f f f f f f f f . 
        . f f f f f f f f f f . 
        f f f f f f f f f f f f 
        e 4 f f f f f f f f 4 e 
        e e f f f f f f f f e e 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(emeny5, sprites.dungeon.darkGroundSouthEast1)
    emeny5.follow(mainchara, 40)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.startEffect(effects.spray, 500)
    otherSprite.follow(mainchara, 0)
    sprite.destroy()
    pause(5000)
    otherSprite.follow(mainchara, 40)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    Shuriken()
})
let emeny5: Sprite = null
let emeny4: Sprite = null
let emeny3: Sprite = null
let emeny2: Sprite = null
let emeny1: Sprite = null
let shuriken: Sprite = null
let speedY = 0
let speedX = 0
let item2: Sprite = null
let item1: Sprite = null
let key: Sprite = null
let PLdirection = 0
let mainchara: Sprite = null
let shurikenspeed = 0
let door: Sprite = null
tiles.setTilemap(tilemap`レベル2`)
MainChara()
Emeny()
MakeKey()
let hime = sprites.create(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f f . . . . . 
    . . . . f f f f f f f f f f . . . . 
    . . . f f f f f f f f f f f f . . . 
    . . . f f f f f 4 4 f f f f f . . . 
    . . f f f f f f 4 4 f f f f f f . . 
    . . f f f f 4 4 4 4 4 4 f f f f . . 
    . . f f f 4 b f 4 4 f b 4 f f f . . 
    . . f f f 4 1 f d d f 1 4 f f f . . 
    . . f f f f d d d d d d f f f f . . 
    . . f f f f f 4 4 4 4 f f f f f . . 
    . f f f f f 2 2 3 3 2 2 f f f f f . 
    . f f f a a 2 2 3 3 2 2 a a f f f . 
    f f f f f a a 2 3 b 2 a a f f f f f 
    f f f f f d d 2 1 3 2 d d f f f f f 
    . . . f f d d f f f f d d f f . . . 
    `, SpriteKind.hime)
tiles.placeOnTile(hime, tiles.getTileLocation(5, 27))
door = sprites.create(img`
    f f f f f f f f f f f f f f f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f . f . f . f . f . f . f . f . 
    f f f f f f f f f f f f f f f . 
    `, SpriteKind.door)
tiles.placeOnTile(door, tiles.getTileLocation(7, 27))
tiles.setWallAt(tiles.getTileLocation(7, 27), true)
let getketFlag = 0
shurikenspeed = 100
forever(function () {
    if (getketFlag == 3) {
        tiles.setWallAt(tiles.getTileLocation(7, 27), false)
    }
})
