const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let runningCat,sw,sh,sx,sy,x,y,w,h,speed;

runningCat = new Image()
runningCat.src = "images/runningCat.png";
index = 0;
speed = 1;

runningCat.addEventListener('load',()=>{
  sw = runningCat.width/2;
  sh = runningCat.height/2;
  x = 1;
  y = 1;

  setInterval(animate,100)
})

function animate(){
  sx = index%1 * sw;
  sy = Math.floor(index/1) * sh;

  w = sw;
  h = sh;

  console.log(index,x)
  context.clearRect(0,0,width,height)
  context.drawImage(runningCat,sx,sy,sw,sh,x,y,w,h)
  index++;
  if(index>8){
    index = 0;
  }
  x += speed;
  if(x>width){
    x = -sh;
  }
}
