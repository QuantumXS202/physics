const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let img,angle;

img = new Image();
img.src = "images/cog.png";

angle = 0.1;

img.addEventListener('load',()=>
{
  setInterval(animate,10)
})

function animate(){
  context.clearRect(0,0,width,height);
  context.save();
  context.translate(300,300);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01
  context.save();
  context.translate(575,300);
  context.rotate(-angle+0.3);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01
  context.save();
  context.translate(850,300);
  context.rotate(angle);
  context.drawImage(img,-150,-150,300,300);
  context.restore();
  angle += 0.01

}
