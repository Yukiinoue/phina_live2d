phina.globalize();

var ASSETS = {
  "live2d.moc": {
    "MarkModel": "assets/Mark/Mark.moc3",
  },
  "image": {
    "MarkTexture": "assets/Mark/Mark.png",
  },
  // "Physics": {
  //   "MarkPhysics": "assets/Mark/Mark.physics3.json",
  // },
  "live2d.motion": {
    "MarkMotion": "assets/Mark/Mark.motion3.json",
  },
};

phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();

    var live2dLayer = phina.live2d.Live2DLayer({
      width: 480,
      height: 640,
      originX: 0,
      originY: 0,
    });

    live2dLayer.addChildTo(this);

    var mark = phina.live2d.Live2DSprite({
      moc: "MarkModel",
      textures: ["MarkTexture"],
    });

    mark.setPosition(240, 320);

    mark.addChildTo(live2dLayer);

    mark.play("MarkMotion");

    },
});

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
    assets: ASSETS,
  });


  app.run();
});

