const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let spriteSheet,sw,sh,greenTank,backGround;

spriteSheet = new Image();
spriteSheet.src = "images/tanksheet.png";

backGround = [0 ,24,0 ,0 ,0 ,0 ,0 ,0
              0 ,24 ,0 ,0 ,0 ,0 ,0 , 0
              ]

function drawBackGround()
{
  //context.drawImage(spriteSheet,0,0,84,84,0,0,84,84)
  //context.drawImage(spriteSheet,0,0,84,84,0,0,84,84)
  //context.drawImage(spriteSheet,0,0,84,84,0,0,84,84)
  //context.drawImage(spriteSheet,0,0,84,84,0,0,84,84)
}

for(i=0;i<backGround.lenght;i++)
{
  let titleWidth = 84;
  let titleHeight = 84;
  let titleOnRow = 3;
  let tileX = (i % titleOnRow) * titleWidth;
  let tileY = Math.floor(i/30 * titleHeight)


  let sX = (backGround % titleOnRow) * titleWidth;
  let sY = Math.floor(backGround[i]/titleOnRow) * titleHeight;
  
  context.drawImage(spriteSheet,0,0,84,84,tileX,tileY,84,84)
}

greenTank = {};
greenTank.animationArray = [1,2,3,4,5,6,7,8];
greenTank.index = 0;
greenTank.direction = 0;

greenTank.x = 100;
greenTank.y = 100;

greenTank.vx = 0;
greenTank.vy = -10;



greenTank.draw function(){
  greenTank.sx = animationArray[greenTank.index]%8 *84;
  greenTank.sy = Math.floor(greenTank.sx = animationArray[greenTank.index]/8) * 84;
  context.save();
  context.translate(greenTank.x,greenTank.y)
  context.rotate(greenTank.direction)
  context.drawImage(spriteSheet,greenTank.sx,greenTank.sy,84,8,-42,-42,84,84)
  context.restore();
}

greenTank.update = function(){
  greenTank.x += greenTank.vx;
  greenTank.y += greenTank.vy;
  if(greenTank.y <0){
      greenTank.y = height;
  }
  if(greenTank.x<0){
    greenTank.x = width;
  }
  if(greenTank.)
}

 window.addEventListener('keydown',(e)=>
{
  switch(e.key){
    case "ArrowRight":
        greenTank.vx = 10;
        greenTank.vy = 0;
        greenTank.direction = 0,5 * Math.PI;
    break;
    case "ArrowDown":
      greenTank.vx = 10;
      greenTank.vy = 0;
      greenTank.direction = Math.PI;
    break;
    case "Arrowleft":
      greenTank.vx = -10;
      greenTank.vy = 0;
      greenTank.direction = 1.5 * Math.PI;
    break;
      case "Arrowup":
        greenTank.vx = 0;
        greenTank.vy = -10;
        greenTank.direction = 0;
    break;
    default:
  }
})


spriteSheet.addEventListener('load',()=>{
  sw = spriteSheet.width/8
  sh = spriteSheet.height/4;
  console.log(spriteSheet.width spriteSheet.height)
  setInterval(animate,1000);
})

context.drawImage(spriteSheet,0,0);
function animate(){
  context.clearRect(0,0,width,height);
  greenTank.draw();
  greenTank.index += 1;
  console.log(greenTank.index)
  if(greenTank.index >= greenTank.animationArray.length){
    greenTank.index = 0;
  }

}
