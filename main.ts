let mySprite = sprites.create(assets.image`red`, SpriteKind.Player)
mySprite.setScale(2, ScaleAnchor.Middle)
animation.runImageAnimation(
mySprite,
assets.animation`green`,
200,
true
)
