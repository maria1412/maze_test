// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010201020202020202020202020202010102010101010102020202020101020101020102020201010101010202010301010301020102010201020102010102010102010201020102010201020102020101020103010201020102010301020101010201020103010201030102010202010102020201020102010201020102030101010101010201030102010201020101010302020202010201020102010202010102010101010102010201020101020101020104030202020203020202010301010201010101010101010101020102010102020202020202020202020201020101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 . . . . . 2 2 . 2 
2 . 2 . . . 2 2 2 2 2 . . 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 . . 2 
2 . . . 2 . 2 . 2 . 2 . 2 . . 2 
2 2 2 2 2 . 2 . 2 . 2 . 2 . 2 2 
2 . . . . . 2 . 2 . 2 . 2 . . 2 
2 . 2 2 2 2 2 . 2 . 2 . 2 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "レベル3":
            case "レベル3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "レベル2":
            case "レベル2":return tiles.createTilemap(hex`2000200004050e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0504020202010e0e0e0e020202020202020102020202020201020102020202020e0e0e0e0e010e0e0e02020e010e010e01010e010e010e0e010e010e010e010e0102020202010e0e0202010e010e010e010e0e0102010202010e010e010e010e01010e0e0e010e0e010e010e010e010e010e0e010e010e0e010e010e010e010e0101020202020202020e010e0e02020e010e0e010e010202020e0e0e0e0e010e01010e0e0e010e010e0e0e0e0e0e010e010e0e010e010e0e010e0e0e0e0e010e010e0e0e0e010e0102030202030e020202020e010e010e0e020202020e0e010e0102020202020e010e0e0e0e0e0e01010e0e01010e010e0e010e010e0e0e010e010e0e0e0e02020102030202030202010202020e0e010e0e010e010e0e0e010e010e0e0e0e010e01010e0e0e010e0e010e0e0e0e0e0e0e0e0e0e010e0e01010e0102020102010e0e0e01010e010e0e010e0e030e0e030e0e0e0e010e0e010e0e010e0e010e010e0e0e03010e010e0e0e0e0e010e0e010e0e010202020202020e010e0e010e010e0e0e01010e030e0e010e0e010e0e0e0e0e010e010e0e010e0e010e020202020203020e0e0e0e0e0e030e0e030e0e010e0e010e010e0e010e0e0e0e0e0e0e010e0e0e0e0e0e0e0e0e010e0e010e0e020202020202020202020e0e0e0e0e0e010e0e030e0e0e0e010e0e0e0e0e0e0e010e0e010e010e0e0e0e0e0e0e0e010e010e0e0110010e010101020202020202020202020202020e0e010e0e0e01010e010e0e0e01010e0e0e010e010e0e0e0e010e0e0e0e0e0e0e0e010e0e0e010202020e0e0e0e0e0e0e0e010e010e0e0e0e010e0e0e0e0e010e0e010e0e0e0e0e0e0e020202020202020202020202020202010202020302020203020e0e0e0e010e0e0e010e0e0e0e0e0e010e02020e0e0e010e0e0e0e0e010e0e0e01020202020202020202020e010e0e0e0e010e0e0e0e010e0e0103010e0e0e0e010e0e0e010e0e0e030e0e0e010e0e0e0e010e02030202020e0110010e0e0e0e010e0e0e010e0e0e0e030202020202020e0e0e0e0e0e0e010e0102010e0e030e010e010e0e0e0e0e0e0e0e0e010e0e0e0e0e0e02030e0e010e0e0e0e0e0e010e0101010e060c0c080e0e0e0e010e02020e0e0e030e0e0e030e0e0e0e0e03010e01010e0e0a0f0f0f0f0f0f020e02030e010e0202030e0e0e0e0e0302030e010e01010e0e0a0f0f0b0e0f0f0202030e0e010e0e0e0e0e0e0e0e0e0e0e0e0e010e0101010e070d0d090e0e0e0202030e0e010e0e0e0e0e0e030202030e0e0e0e0e010e010e0e0e0e0e0e0e0e0e0e0e0e0e030e0e0e0e0e0e0e0e0e0e0e02020202010e01020202020202020e0e0e0e0303010e0e0302020e0e0e0e020202020e0e0e`, img`
..222222222222222222222222222222
......2222......................
22222.222..2.2.2..2.2.22.2.2.2.2
......22...2.2.2.22......2.2.2.2
..222.22.2.2.2.2.22.2.22.2.2.2.2
.........2.22..2.22.2....22222.2
..222.2.222222.2.22.2.22.22222.2
.2222.2......2....2.2.22....22.2
......2.2.22.2..22..2.22.2.222.2
.2222..............22.22.2.222.2
.2222.2..222.22.2222222222.22..2
......222..2.22.22....2222.22.22
.22.2.2....2.22222.22.22.......2
.22.2.2.2..2.22.22.22222.2.22.22
.2.......222.......22.22.2.22.22
22222.2.2222222.22.22..........2
22222.2..2222.2222222.22.2.22222
222.2.22...2................22.2
22..2.222..222.2.2222.22222222.2
22....22222222.2.2222.22222.22.2
222222.........................2
222.222.222222.2..222.222.2.2.2.
..........2.2222.2222.22...22.2.
222.222.222.2222.2.....2...22.2.
222.222........2222.22.2...22.2.
2.222222222.222222..22.222222.2.
..2....2222.2..222..22.2222...2.
.22........2..2.2...22.22...2.2.
.22....2......2.222.22.22.222.2.
..2....222....2.22..22....22222.
2.22222222222......22222222.....
2........2222...22...2222....222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,myTiles.tile4,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthEast1], TileScale.Sixteen);
            case "レベル4":
            case "レベル4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
