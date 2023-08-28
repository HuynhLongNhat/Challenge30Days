var color = document.querySelector("#color");
var eraser = document.querySelector("#eraser");
var decrease = document.querySelector("#decrease");
var sizeElement = document.querySelector("#size");
var increase = document.querySelector("#increase");
var save = document.querySelector("#save");
var clear = document.querySelector("#clear");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

//init
var isDrawing = false;
var colorPaint = '#000000';
var size = 10
sizeElement.innerText =  size;
var currentPos = {
  x: 0,
  y: 0
};

var currentPosAfter = {
  x: 0,
  y: 0
};

document.addEventListener('mousedown', function (e) {
  currentPos = {
    x: e.offsetX,
    y: e.offsetY
  }
  isDrawing = true;
});

document.addEventListener('mousemove', function (e) {
  if (isDrawing) {
    currentPosAfter = {
      x: e.offsetX,
      y: e.offsetY
    };
    //fill net ve
    ctx.beginPath();
    ctx.arc(currentPos.x ,currentPos.y , size , 0 , 2 * Math.PI);
    ctx.fillStyle = colorPaint;
    ctx.fill();

     //ve outline
    ctx.beginPath();
    ctx.moveTo(currentPos.x, currentPos.y);
    ctx.lineTo(currentPosAfter.x, currentPosAfter.y);
    ctx.strokeStyle = colorPaint;
    ctx.lineWidth = size * 2;
    ctx.stroke();

    currentPos.x = currentPosAfter.x;
    currentPos.y = currentPosAfter.y;
  }
});

document.addEventListener('mouseup' , function(e){
    isDrawing = false ;
})

color.addEventListener('change' , function(e) {
    colorPaint = e.target.value;

})

eraser.addEventListener('click' ,function(){
    colorPaint = '#ffffff';
})


decrease.addEventListener('click' , function(){
    if(size > 5) {
         size -=5;
    }
    else {
        size = 5;
    }
    sizeElement.innerText =  size;
})

increase.addEventListener('click' , function(){
    if(size < 30) {
         size +=5;
    }
    else {
        size = 30;
    }
     sizeElement.innerText =  size;
})

clear.addEventListener('click', function(){
    var canvasStart = canvas.getClientRects()[0];
    ctx.clearRect(0 , 0 , canvasStart.width , canvasStart.height);
})

save.addEventListener('click' , function() {
   var output = canvas.toDataURL('image/png').replace('image/png' , 'image/octet-stream');
   save.setAttribute('href' , output)
  
})