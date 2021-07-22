// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

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
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
