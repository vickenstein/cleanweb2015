$(function() {

  canvas = document.getElementById("canvas");
  hammer = new Hammer(canvas);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  canvas.appendChild(renderer.domElement);
  renderer.sortObjects = false;

  scene = new THREE.Scene();

  perspective = new THREE.Object3D();
  perspective.rotation.y = - Math.PI / 2;
  perspective.rotation.x = Math.PI / 6;

  perspective.position.y = -20;
  perspective.position.z = -50;
  perspective.position.x = 10;

  scene.add(perspective);

  // star_light = new THREE.PointLight(0xFFFFFF);
  // star_light.position.z = 2000
  // star_light.lookAt(scene.position);
  // star_light.shadowCameraVisible = true;
  // scene.add(star_light);
  ambient_light = new THREE.AmbientLight( 0x222222 );
  scene.add(ambient_light);

  sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
  sphere_mesh = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) 

  light1 = new THREE.PointLight( 0xfff6ea, 0.5, 100 );
  light1.position.set(-35, 50, 27);
  perspective.add(light1);


  light2 = new THREE.PointLight( 0xfff6ea, 0.5, 100 );
  light2.position.set(-35, 50, 4.25);
  perspective.add(light2);

  light3 = new THREE.PointLight( 0xfff6ea, 0.5, 100 );
  light3.position.set(-35, 50, -16.5);
  perspective.add(light3);

  light4 = new THREE.PointLight( 0xfff6ea, 0.5, 100 );
  light4.position.set(-27, 50, -34);
  perspective.add(light4);

  light5 = new THREE.PointLight( 0xfff6ea, 0.5, 100 );
  light5.position.set(1.5, 50, -34);
  perspective.add(light5);

  light6 = new THREE.PointLight( 0xfff6ea, 0.5, 100 );
  light6.position.set(30, 50, -34);
  perspective.add(light5);

  loader = new THREE.JSONLoader();
  loader.load("assets/furniture.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var wood = THREE.ImageUtils.loadTexture('assets/wood.jpeg');
      wood.wrapS = THREE.RepeatWrapping;
      wood.wrapT = THREE.RepeatWrapping;
      wood.repeat.set( 3, 3 );
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xfff9f0,
        map: wood
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });

  loader.load("assets/room.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var wall = THREE.ImageUtils.loadTexture('assets/wall.jpg');
      wall.wrapS = THREE.RepeatWrapping;
      wall.wrapT = THREE.RepeatWrapping;
      wall.repeat.set( 25, 25 );
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xffffff,
        map: wall
      });
      material.needsUpdate = true;
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);

      perspective.add(mesh);
  });
  loader.load("assets/pillow.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: 0xffffff,
        specular: 0xfc2626,
        shininess: 4
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/couch.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var leather = THREE.ImageUtils.loadTexture('assets/leather.jpg');
      leather.wrapS = THREE.RepeatWrapping;
      leather.wrapT = THREE.RepeatWrapping;
      leather.repeat.set( 10, 10 );
      var material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: 0x000000,
        specular: 0xffffff,
        shininess: 20,
        map: leather
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/couch_leg.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0x000000
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/floor.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var floor = THREE.ImageUtils.loadTexture('assets/floor.jpg');
      floor.wrapS = THREE.RepeatWrapping;
      floor.wrapT = THREE.RepeatWrapping;
      floor.repeat.set( 2, 2 );
      var material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        shininess: 5,
        color: 0xFFFFFF,
        map: floor
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/lights.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: 0xFFFFFF,
        specular: 0xFFFFFF,
        transparent: true,
        opacity: 0.5,
        shininess: 30
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/window.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        color: 0x000000,
        specular: 0xFFFFFF,
        shininess: 20
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/window_pane.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xFFFFFF,
        shininess: 20,
        transparent: true,
        opacity: 0
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/outside.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var outside = THREE.ImageUtils.loadTexture('assets/outside.jpg');
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xFFFFFF,
        map: outside
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/tv.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0x000000,
        specular: 0xFFFFFF,
        shininess: 30
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/screen.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var logo = THREE.ImageUtils.loadTexture('assets/logo.png');
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xFFFFFF,
        map: logo
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });

  camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000000);

  function draw() {
    requestAnimationFrame(function(){
      draw();
    });
    renderer.render(scene, camera);
  }

  $(window).resize(function(event) {
    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000000);
    renderer.setSize($(window).width(), $(window).height());
  }) //handle window resize


  lastPanX = 0;
  lastPanY = 0;

  hammer.on('panstart', function() {
    lastPanX = 0;
    lastPanY = 0;
  });

  min_y = - Math.PI / 4;
  max_y = - Math.PI * 4 / 6;

  min_x = 0;
  max_x = Math.PI / 4;

  hammer.on('panmove', function(event) {
    var change_y = ((lastPanX - event.deltaX) / ($(window).width())) * Math.PI;
    if (perspective.rotation.y + change_y < min_y && perspective.rotation.y + change_y > max_y) {
      perspective.rotation.y += change_y;
    }
    var change_x = ((lastPanY - event.deltaY) / ($(window).width())) * Math.PI;
    if (perspective.rotation.x + change_x < max_x && perspective.rotation.x + change_x > min_x) {
      perspective.rotation.x += change_x;
    }
    lastPanX = event.deltaX;
    lastPanY = event.deltaY;
  });

  kalvin_min = 2700.00;
  kalvin_max = 6500.00;
  kalvin_g_m = 17 / (kalvin_max - kalvin_min);
  kalvin_g_b = 255 - kalvin_g_m * kalvin_max;
  kalvin_b_m = 41 / (kalvin_max - kalvin_min);
  kalvin_b_b = 255 - kalvin_b_m * kalvin_max;

  function change_light_hue(average) {
    var g = kalvin_g_m * average + kalvin_g_b;
    var b = kalvin_b_m * average + kalvin_b_b;
    light1.color.g = g / 255;
    light1.color.b = b / 255;
    light2.color.g = g / 255;
    light2.color.b = b / 255;
    light3.color.g = g / 255;
    light3.color.b = b / 255;
    light4.color.g = g / 255;
    light4.color.b = b / 255;
    light5.color.g = g / 255;
    light5.color.b = b / 255; 
    light6.color.g = g / 255;
    light6.color.b = b / 255; 
  }

  $("#kalvin").slider({
    min: kalvin_min,
    max: kalvin_max,
    value: (kalvin_min + kalvin_max) / 2,
    change: function(event, ui) {
      var average = ui.value;
      change_light_hue(average);
      update_products();
    }
  });

  luminosity_min = 270.00;
  luminosity_max = 2800.00;
  luminosity_m = 0.9 / (luminosity_max - luminosity_min);
  luminosity_b = 1 - luminosity_m * luminosity_max;

  function change_light_intensity(average) {
    var luminosity = luminosity_m * average + luminosity_b;
    light1.intensity = luminosity;
    light2.intensity = luminosity;
    light3.intensity = luminosity;
    light4.intensity = luminosity;
    light5.intensity = luminosity;
    light6.intensity = luminosity;
  }

  luminosity_slider = $("#luminosity").slider({
    min: luminosity_min,
    max: luminosity_max,
    value: (luminosity_min + luminosity_max) / 2,
    change: function(event, ui) {
      var average = ui.value;
      change_light_intensity(average);
      update_products();
    }
  });

  draw();
  update_products();
})
