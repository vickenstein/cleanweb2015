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

  perspective.position.y = -20;
  perspective.position.z = -50;
  perspective.position.x = 10;

  scene.add(perspective);

  // star_light = new THREE.PointLight(0xFFFFFF);
  // star_light.position.z = 2000
  // star_light.lookAt(scene.position);
  // star_light.shadowCameraVisible = true;
  // scene.add(star_light);
  scene.add( new THREE.AmbientLight( 0x222222 ) );

  sphere = new THREE.SphereGeometry( 0.5, 16, 8 );
  sphere_mesh = new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) 

  light1 = new THREE.PointLight( 0xFFEE00, 0.5, 100 );
  light1.position.set(-35, 52, 27);
  perspective.add(light1);


  light2 = new THREE.PointLight( 0xFFEEEE, 0.5, 100 );
  light2.position.set(-35, 52, 4.25);
  perspective.add(light2);

  light3 = new THREE.PointLight( 0xFFEEEE, 0.5, 100 );
  light3.position.set(-35, 52, -16.5);
  perspective.add(light3);

  light4 = new THREE.PointLight( 0xFFEEEE, 0.5, 100 );
  light4.position.set(-27, 52, -34);
  perspective.add(light4);

  light5 = new THREE.PointLight( 0xFFEEEE, 0.5, 100 );
  light5.position.set(1.5, 52, -34);
  perspective.add(light5);

  light5 = new THREE.PointLight( 0xFFEEEE, 0.5, 100 );
  light5.position.set(30, 52, -34);
  perspective.add(light5);

  loader = new THREE.JSONLoader();
  loader.load("assets/furniture.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xFFFFFF
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });

  loader.load("assets/room.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0xFFFFFF
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/pillow.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0x267598
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/couch.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0x267598
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
        color: 0x267598
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/floor.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0x267598
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
        color: 0xEEEEEE,
        specular: 0xFFFFFF,
        shininess: 30
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  loader.load("assets/window.json", function(geometry) {
      geometry.computeFaceNormals();
      geometry.computeVertexNormals();
      var material = new THREE.MeshLambertMaterial({
        side: THREE.DoubleSide,
        color: 0x267598
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(10, 10, 10);
      perspective.add(mesh);
  });
  // loader.load("assets/geometry.Cube.009Geometry.9.json", function(geometry) {
  //     geometry.computeFaceNormals();
  //     geometry.computeVertexNormals();
  //     var material = new THREE.MeshLambertMaterial({
  //       side: THREE.DoubleSide,
  //       color: 0x267598
  //     });
  //     var mesh = new THREE.Mesh(geometry, material);
  //     mesh.scale.set(10, 10, 10);
  //     perspective.add(mesh);
  // });
  // loader.load("assets/geometry.Cube.010Geometry.9.json", function(geometry) {
  //     geometry.computeFaceNormals();
  //     geometry.computeVertexNormals();
  //     var material = new THREE.MeshLambertMaterial({
  //       side: THREE.DoubleSide,
  //       color: 0x267598
  //     });
  //     var mesh = new THREE.Mesh(geometry, material);
  //     mesh.scale.set(10, 10, 10);
  //     perspective.add(mesh);
  // });
  // loader.load("assets/geometry.Cube.011Geometry.9.json", function(geometry) {
  //     geometry.computeFaceNormals();
  //     geometry.computeVertexNormals();
  //     var material = new THREE.MeshLambertMaterial({
  //       side: THREE.DoubleSide,
  //       color: 0x267598
  //     });
  //     var mesh = new THREE.Mesh(geometry, material);
  //     mesh.scale.set(10, 10, 10);
  //     perspective.add(mesh);
  // });
  // loader.load("assets/geometry.Cube.012Geometry.9.json", function(geometry) {
  //     geometry.computeFaceNormals();
  //     geometry.computeVertexNormals();
  //     var material = new THREE.MeshLambertMaterial({
  //       side: THREE.DoubleSide,
  //       color: 0x267598
  //     });
  //     var mesh = new THREE.Mesh(geometry, material);
  //     mesh.scale.set(10, 10, 10);
  //     perspective.add(mesh);
  // });
  // loader.load("assets/geometry.Cube.013Geometry.9.json", function(geometry) {
  //     geometry.computeFaceNormals();
  //     geometry.computeVertexNormals();
  //     var material = new THREE.MeshLambertMaterial({
  //       side: THREE.DoubleSide,
  //       color: 0x267598
  //     });
  //     var mesh = new THREE.Mesh(geometry, material);
  //     mesh.scale.set(10, 10, 10);
  //     perspective.add(mesh);
  // });
  // loader.load("assets/geometry.Cube.016Geometry.9.json", function(geometry) {
  //     geometry.computeFaceNormals();
  //     geometry.computeVertexNormals();
  //     var material = new THREE.MeshLambertMaterial({
  //       side: THREE.DoubleSide,
  //       color: 0x267598
  //     });
  //     var mesh = new THREE.Mesh(geometry, material);
  //     mesh.scale.set(10, 10, 10);
  //     perspective.add(mesh);
  // });

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
    var change_y = (event.deltaX / ($(window).width() * 40)) * Math.PI;
    if (perspective.rotation.y - change_y < min_y && perspective.rotation.y - change_y > max_y) {
      perspective.rotation.y -= change_y;
    }
    var change_x = (event.deltaY / ($(window).width() * 40)) * Math.PI;
    if (perspective.rotation.x - change_x < max_x && perspective.rotation.x - change_x > min_x) {
      perspective.rotation.x -= change_x;
    }
    lastPanX = event.deltaX;
    lastPanY = event.deltaY;
  });

  kalvin_min = 2700;
  kalvin_max = 6500;

  function change_light_hue() {
  }

  $("#kalvin").slider({
    range: true,
    min: kalvin_min,
    max: kalvin_max,
    values: [kalvin_min, kalvin_max],
    change: function(event, ui) {
      var average = (ui.values[0] + ui.values[1]) / 2;
      change_light_hue(average);
    }
  });

  luminosity_min = 270;
  luminosity_max = 2800;
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
    range: true,
    min: luminosity_min,
    max: luminosity_max,
    values: [luminosity_min, luminosity_max],
    change: function(event, ui) {
      var average = (ui.values[0] + ui.values[1]) / 2;
      change_light_intensity(average);
    }
  });

  draw();
})
