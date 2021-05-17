const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

let PointA,PointB,Arrow,dx,dy;

PointA = new Point(100,100,15,"red",true);
PointB = new Point(400,300,15,"blue",true);

Arrow = {};

Arrow.sh = 15;
Arrow.sw = 125;
Arrow.hh = 50;
Arrow.hw = 50;
Arrow.closer = "rgba(120,120,200,0.5)";

Arrow.draw = function()
{
  context.beginPath();
  context.fillStyle = Arrow.closer;
  context.moveTo(0,0);
  context.lineTo(0,Arrow.sh);
  context.lineTo(Arrow.sw,Arrow.sh);
  context.lineTo(Arrow.sw,Arrow.hh);
  context.lineTo(Arrow.sw + Arrow.hw,0);
  context.lineTo(Arrow.sw,-Arrow.hh);
  context.lineTo(Arrow.sw,-Arrow.sh);
  context.lineTo(0,-Arrow.sh);
  context.closePath();
  context.stroke();
  context.fill();
}

animate();

function animate()
{
  dx = PointB.x - PointA.x;
  dy = PointB.y - PointA.y;

  context.clearRect(0,0,width,height)
  window.requestAnimationFrame(animate);


  PointA.draw();
  PointB.draw();
  context.save();
  context.translate(PointA.x,PointA.y);
  context.rotate(Math.atan2(dy,dx));

  Arrow.draw();
  context.restore();
}
