import './style.css'
// import "destyle.css"
import { Pane } from 'tweakpane'
import Color from 'color'

const pane = new Pane()

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const width = canvas.clientWidth * 2;
const height = canvas.clientHeight * 2;

canvas.width = width
canvas.height = height

const params = {
  GRID_SIZE: 10,
  RANDOMIZE_CIRCLE_RADIUS: false,
  CHANGE_COLOR: false,
  GENERATE_HEARTS: false,
  IMAGE_INTEGRATION: false,
  GENERATE_CIRCLES: false,
  GLOW_EFFECT_ADDITION: false,
  RETRO_EFFECT_ADDITION: false,
  GLITTER_EFFECT_ADDITION: false,
}

const objects = [];

function redraw() {
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  objects.forEach(obj => {
    if (obj.type === 'heart') {
        drawHeart(ctx, obj.width, obj.height);
    } else if (obj.type === 'circle') {
        drawCircle(ctx);
    } else if (obj.type === 'star') {
      drawStar2(ctx);
    }
});
}
		
function retroEffect(ctx) {

  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Tableau pour stocker les paillettes
  const sparkles = [];
  const sparkleCount = 150;

  // Initialisation des paillettes
  for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
          x: Math.random() * canvas.width,  // Position X aléatoire
          y: Math.random() * canvas.height, // Position Y aléatoire
          radius: Math.random() * 2 + 1,   // Taille aléatoire
          opacity: Math.random(),          // Transparence initiale
          speedX: (Math.random() - 0.5) * 2, // Vitesse X aléatoire
          speedY: (Math.random() - 0.5) * 2, // Vitesse Y aléatoire
          fade: Math.random() * 0.02 + 0.01, // Vitesse de disparition
          shadowColor: "lightblue",
          shadowOffsetX: 5,
          shadowOffsetY: 5,
      });
  }

  // Dessin des paillettes
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas

      sparkles.forEach((sparkle) => {
          ctx.beginPath();
          ctx.arc(sparkle.x, sparkle.y, sparkle.radius, 0, Math.PI * 2, false);
          // ctx.fillStyle = `rgba(255, 255, 255, ${sparkle.opacity})`;
          ctx.fillStyle = 'rgb(198, 144, 201)'
          ctx.fill();

          // Met à jour la position et l'opacité
          sparkle.x += sparkle.speedX;
          sparkle.y += sparkle.speedY;
          sparkle.opacity -= sparkle.fade;
          ctx.shadowColor = sparkle.shadowColor
          ctx.shadowOffsetX = sparkle.shadowOffsetX
          ctx.shadowOffsetY = sparkle.shadowOffsetY

          // Réinitialise les paillettes lorsqu'elles disparaissent
          if (sparkle.opacity <= 0 || sparkle.x < 0 || sparkle.x > canvas.width || sparkle.y < 0 || sparkle.y > canvas.height) {
              sparkle.x = Math.random() * canvas.width;
              sparkle.y = Math.random() * canvas.height;
              sparkle.radius = Math.random() * 2 + 1;
              sparkle.opacity = 1;
              sparkle.speedX = (Math.random() - 0.5) * 2;
              sparkle.speedY = (Math.random() - 0.5) * 2;
              sparkle.fade = Math.random() * 0.02 + 0.01;
          }
      });

      requestAnimationFrame(glitterEffect); // Animation continue

}

let x = canvas.width / 2;
let y = canvas.height / 2
let radius = 50;
// let radiusGlow = 400;
let isGrowing = false;

function loop() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // ctx.fillStyle = "rgb(255, 255,0)";
    // ctx.beginPath();
    // ctx.moveTo(x, height / 2);
    // ctx.arc(x, height / 2, radiusGlow / 2, 0, Math.PI * 2);
    // ctx.fill();

    ctx.fillStyle = "rgb(230, 230,0)";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, height / 2, radius, 0, Math.PI * 2);
    ctx.fill();

    // x += 500;
    // if (x > width) x = 0;

    if (isGrowing) {
        radius+=2.5;
        // radiusGlow += 3;
    } else {
        radius-=2.5;
        // radiusGlow -= 3;
    }

    if (radius <= 0) {
        isGrowing = true;
    } else if (radius >= 100) isGrowing = false;

    requestAnimationFrame(loop);
}

function glitterEffect() {
  // const glitter = document.createElement("canvas")
  loop()
  // canvas.appendChild(glitter)
}

function blurEffect(ctx){
  ctx.shadowColor = "red"; // string

  // Horizontal distance of the shadow, in relation to the text.
  ctx.shadowOffsetX = 0; // integer

  // Vertical distance of the shadow, in relation to the text.
  ctx.shadowOffsetY = 0; // integer

  // Blurring effect to the shadow, the larger the value, the greater the blur.
  ctx.shadowBlur = 10; // integer
}

const drawCircle = (ctx) => {
  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if(params.RANDOMIZE_CIRCLE_RADIUS) {
    radius = radius * Math.random() * 2
  }
  if(params.CHANGE_COLOR){
    ctx.globalCompositeOperation = "lighter";
  }
  if(params.GLOW_EFFECT_ADDITION){
    blurEffect(ctx)
  }
  // if(params.RETRO_EFFECT_ADDITION){
  //   drawLine(ctx)
  // }
  // if(params.IMAGE_INTEGRATION) {
  //   // drawStar(ctx,100,100,5,30,15)
  //   drawStar2(100, 75, 50, 5, "blue")
  //   // drawAssets(ctx)
  //  }
   objects.forEach((obj) => {
    ctx.beginPath();
    ctx.moveTo(obj.x,obj.y)
    ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
    ctx.fillStyle = obj.color
    ctx.closePath();
    ctx.fill()
   })
}

function drawHeart(ctx, width, height){
  // context.save();
  // if(params.RANDOMIZE_CIRCLE_RADIUS) {
  //   width = width * Math.random() * 2
  //   height = height * Math.random() * 2
  // }

  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
    objects.forEach((obj) => {
      ctx.beginPath();
      var topCurveHeight = height * 0.3;
          ctx.moveTo(obj.x, obj.y + topCurveHeight);
              // top left curve
              ctx.bezierCurveTo(
                obj.x, obj.y, 
                obj.x - width / 2, obj.y, 
                obj.x - width / 2, obj.y + topCurveHeight
      );
              
              // bottom left curve
              ctx.bezierCurveTo(
                obj.x - width / 2, obj.y + (height + topCurveHeight) / 2, 
                obj.x, obj.y + (height + topCurveHeight) / 2, 
                obj.x, obj.y + height
      );
              
              // bottom right curve
              ctx.bezierCurveTo(
                obj.x, obj.y + (height + topCurveHeight) / 2, 
                obj.x + width / 2, obj.y + (height + topCurveHeight) / 2, 
                obj.x + width / 2, obj.y + topCurveHeight
      );
              
              // top right curve
              ctx.bezierCurveTo(
                obj.x + width / 2, obj.y, 
                obj.x, obj.y, 
                obj.x, obj.y + topCurveHeight
      );
    
        ctx.rotate(20 * Math.PI / 180);
              
              ctx.closePath();
              ctx.fillStyle = obj.color;
              ctx.fill();
    });
  // context.restore();
      }

  function drawAssets(ctx) {
    const img = new Image(50, 50);
    img.src = "https://img.freepik.com/free-photo/minimalistic-cessette-tape-spotlight-with-its-shadow_23-2148289021.jpg";
    ctx.drawImage(img, 5, 5);

//     var video = document.createElement("video");
//     video.src = "http://techslides.com/demos/sample-videos/small.mp4";
//     video.addEventListener('loadeddata', function() {
//     video.play();  // start playing
//     update(); //Start rendering

//     function update(){
//       ctx.drawImage(video,0,0,256,256);   
//       requestAnimationFrame(update); // wait for the browser to be ready to present another animation fram.       
//     }
// });




// function update(){
//   ctx.drawImage(video, 256, 256);
//   requestAnimationFrame(update); // wait for the browser to be ready to present another animation fram.       
// }

// update()
  }

  function drawStar(ctx, r, n, inset) {
    // ctx.save();
    ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  objects.forEach((obj) => {
    ctx.beginPath();
    ctx.translate(obj.x, obj.y);
    ctx.moveTo(0,0-r);
    for (var i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (r*inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - r);
    }
    ctx.closePath();
    ctx.fill();
  })
    // ctx.restore()
}

function drawStar2(ctx) {
  // var points = sides;
  // ctx.fillStyle = fillColor;  ctx.beginPath();
  // ctx.moveTo(x, y + radius);
  // for (var i = 0; i < 2 * points + 1; i++) {
  //   var r = (i % 2 == 0) ? radius : radius / 2;
  //   var a = Math.PI * i / points;
  //   ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
  // };

  ctx.fillStyle = '#87CEEB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

    objects.forEach((obj) => {
      ctx.beginPath();
         ctx.moveTo(108, 0.0);
         ctx.lineTo(141, 70);
         ctx.lineTo(218, 78.3);
         ctx.lineTo(162, 131);
         ctx.lineTo(175, 205);
         ctx.lineTo(108, 170);
         ctx.lineTo(41.2, 205);
         ctx.lineTo(55, 131);
         ctx.lineTo(1, 78);
         ctx.lineTo(75, 68);
         ctx.lineTo(108, 0);
         ctx.closePath();
         ctx.fillStyle = obj.color
         ctx.fill();
    })
}

function drawLine(ctx) {
  // ctx.beginPath()
  // ctx.moveTo(40, 250)
  // ctx.lineTo(200, 500)
  // ctx.strokeStyle = 'red'
  // ctx.stroke()
  ctx.lineWidth = 5
ctx.strokeStyle = 'white'

ctx.beginPath()
ctx.moveTo(400, 400)
ctx.lineTo(400, 300)
ctx.quadraticCurveTo(450, 250, 500, 300)
ctx.lineTo(500, 400)
ctx.stroke()

ctx.beginPath()
ctx.moveTo(800, 400);
ctx.bezierCurveTo(800, 150, 1200, 700, 1200, 400);
ctx.stroke()
}

function addText(ctx){
  ctx.font = '60px Times-New-Roman'
  ctx.fillText("Hello World", 600, 500)
  ctx.strokeText('Hello World', 1200, 500)
}

function drawGrid() {
  if(!ctx) return;
  ctx.clearRect(0,0, width, height)
  // ctx.fillStyle = "tomato"
  const circleSize = width / params.GRID_SIZE

  //const rect = canvas.getBoundingClientRect();

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas

  for (let gridNumberX = 0; gridNumberX < width; gridNumberX += circleSize) { 
    console.log(gridNumberX)
    for (let gridNumberY = 0; gridNumberY < width; gridNumberY += circleSize) {
      console.log(gridNumberY)
      console.log(`{x: ${gridNumberX}, y:${gridNumberY}}`)
      if(params.GENERATE_HEARTS) {
        // drawHeart(ctx, gridNumberX + circleSize / 2, gridNumberY + circleSize  / 2, circleSize / 2, circleSize / 2)
        // Ajouter un nouvel objet
  objects.push({
    x: gridNumberX + circleSize / 2,
    y: gridNumberY + circleSize  / 2,
    radius: Math.random() * 40 + 10, // Taille aléatoire
    color: `red`, // Couleur aléatoire
});

redraw()
drawHeart(ctx, circleSize / 2, circleSize / 2)

      }  else if(params.GLITTER_EFFECT_ADDITION) {
        glitterEffect()
       } else if(params.IMAGE_INTEGRATION) {
        // drawStar(ctx,100,100,5,30,15)
        objects.push({
          x: gridNumberX + circleSize / 2,
          y: gridNumberY + circleSize / 2,
          radius: 50, // Taille aléatoire
          color: "blue", // Couleur aléatoire
      });
        drawStar2(ctx)
        // drawAssets(ctx)
       }else if(params.GENERATE_CIRCLES){
        objects.push({
          x: gridNumberX + circleSize / 2,
          y: gridNumberY + circleSize  / 2,
          radius: circleSize / 2, // Taille aléatoire
          color: `yellow`, // Couleur aléatoire
      });
        drawCircle(ctx)
      } else {
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      }
    } 
  }

//   // Ajouter un objet au clic
//   canvas.addEventListener('click', (event) => {
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;

//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas

//     // Ajouter un nouvel objet
//     objects.push({
//         x: x,
//         y: y,
//         radius: Math.random() * 40 + 10, // Taille aléatoire
//         color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Couleur aléatoire
//     });

//     drawObjects(); // Redessiner les objets
// });

// drawObjects(); // Redessiner les objets

drawGrid()

pane.addBinding(params, "GRID_SIZE", {min: 1, max: 10, step: 1}).on("change", () => {drawGrid()})

pane.addBinding(params, "RANDOMIZE_CIRCLE_RADIUS").on("change", () => {drawGrid()})

pane.addBinding(params, "CHANGE_COLOR").on("change", () => {drawGrid()})

pane.addBinding(params, "GENERATE_HEARTS").on("change", () => {drawGrid()})

pane.addBinding(params, "IMAGE_INTEGRATION").on("change", () => {drawGrid()})

pane.addBinding(params, "GENERATE_CIRCLES").on("change", () => {drawGrid()})

pane.addBinding(params, "GLOW_EFFECT_ADDITION").on("change", () => {drawGrid()})

pane.addBinding(params, "RETRO_EFFECT_ADDITION").on("change", () => {drawGrid()})

pane.addBinding(params, "GLITTER_EFFECT_ADDITION").on("change", () => {drawGrid()})