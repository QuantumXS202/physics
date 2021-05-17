const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let A,B, point,dif,gotoB;
// declare namespace en scope
A = new GameObject(new = Vector2d(100,100),new Vector2d(0,0),new Vector2d(0,0))
B = new GameObject(new = Vector2d(400,300),new Vector2d(0,0),new Vector2d(0,0))
point = new GameObject(new = Vector2d(200,200),new Vector2d(0,0),new Vector2d(0,0))
point.vel.magnitude = 10;
dif = new Vector2d(0,0)
gotoB = true;
// assign values


animate();

if(gotoB)
{
  dif.difVector(B.pos,point.pos);
}
else {
  {
    dif.difVector(A.pos,point.pos;)
  }

distance = dif.magnitude;
if(distance < 10)
{
  gotoB = false;
}

}
//animation loop
function animate(){
 context.clearRect(0,0,width,height)
 requestAnimationFrame(animate);
 A.draw(context);
 B.draw(context);
 //point.draw(context);

 dif.difvector(B.pos,point.pos);
 distance = dif.magnitude;
 B.pos.draw(0,0,"white",1);
 point.pos.draw(0,0,"white",1);

 //dif.draw(point.pos.dx,point.pos.dy, "blue", 1)

 point.vel.sumVector(point.pos.dif);
 point.vel.magnitude = 0,2;
 point.vel.draw(point.pos.dx,point.pos.dy,"red", 20)


 console.log(point.vel.magnitude)
 point.update();
 //myGO.update();
// myGo.draw(context);


}
