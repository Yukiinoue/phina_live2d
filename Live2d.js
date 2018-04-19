phina.globalize();

var ASSETS = {
  "live2d.moc": {
    "MarkModel": "assets/Mark/Mark.moc3",
  },
  "image": {
    "MarkTexture": "assets/Mark/Mark.png",
  },
  "Physics": {
    "MarkPhysics": "assets/Mark/Mark.physics3.json",
  },
  "live2d.motion": {
    "MarkMotion": "assets/Mark/Mark.motion3.json",
  },
};

phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();

    // this.player = Sprite('SecretaryTexture', 64, 64).addChildTo(this);
    var label = Label('Hello, runstant!').addChildTo(this);
    label.x = this.gridX.center();
    label.y = this.gridY.center();
  },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets: ASSETS,
  });

  var live2dLayer = phina.live2d.live2DLayer({
    width: 1280,
    height: 720,
    originX: 0,
    originY: 0,
  });
  live2dLayer.addChildTo(this);

  var secretary = phina.live2d.Live2dSprite({
    moc: "SecretaryModel",
    textures: ["SecretaryTexture"],
  });

  secretary.setPosition(1280, 720);
  secretary.addChildTo(live2dLayer);

  secretary.play("SecretaryMotion");

  app.run();
});
