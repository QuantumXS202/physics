const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let myGO;
// declare namespace en scope

// assign values
GameObject = new Array(50);
for(let i = 0; let i <GameObject.length;i++)
{
  let posX = getRandomInt(20,width-20);
  let posY = getRandomInt(20,height -20);
  let GO = new GameObject(new Vector2d(posX,posY),new Vector2d(4,0),new Vector2d(0,1));
  GameObject.push(GO);
}


animate();

//animation loop
function animate(){
 context.clearRect(0,0,width,height)
 requestAnimationFrame(animate);
 //myGO.update();
// myGo.draw(context);

 for(let i=0; i<GameObject.length; i++)
 {
   GameObject[i].update();
   GameObject[i].draw(context);
   myGO.vel.draw(myGO.pos.dx,myGo.pos.dy,"rgba(255,)",10);
 }
}
