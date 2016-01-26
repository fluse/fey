var parallax = require('parallax/deploy/parallax.min.js');

var scene = document.getElementById('page');
var parallax = new Parallax(scene);
parallax.calibrate(true, true);
parallax.invert(true, true);
parallax.limit(20, 20);
parallax.scalar(18, 18);
parallax.friction(0.1, 0.1);
parallax.origin(20.0, 20.0);
