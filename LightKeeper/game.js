let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d')
let img = new Image()
img.src = 'Character.png'
let keeperWidth = img.width / 3.8904// 284px width
let keeperHeight = img.height //0px height
img.onload = function(){
    console.log(keeperWidth, keepHeight) 
}
let walk = 0;
let counter = 0;
let canvasPositionX = 0; 
canvasPositionY = 0; 
// document.onkeydown = function(e){
//     console.log(e.key)
//     switch(e.key){
//         case 'ArrowLeft': 
//             canvasPositionX -= 10
//         break;
//         case 'ArrowRight':
//             canvasPositionX += 10
//         break; 
//     }
// }
function animate(){
    window.requestAnimationFrame(animate);
    counter+=0.1;
    canvasPositionX+=2;
    let frame = Math.floor(counter % 3.8904); //0, 1, 2, 3, 4, 5, 0, 1, 2, 3, ... 
    let step = frame * keeperWidth; //0, 200, 400, 600, 800, 1000, 1200, 1400, 0, 200, ... 
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.drawImage(img, step, 0, keeperWidth, keeperHeight, canvasPositionX, canvasPositionY, keeperWidth, keeperHeight)
}
window.requestAnimationFrame(animate);

