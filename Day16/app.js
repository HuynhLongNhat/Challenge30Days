
var animationElement = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementWindow(element){
    console.log(element)
  var rect = element.getClientRects()[0];
    var heightScreen = window.innerHeight;

   // check xem khoi nay co ben trong hay ben ngoai man hinh
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        //ben trong thi vao day
        element.classList.add('start');
    }
    else {
        element.classList.remove('start');
    } 
}


function checkAnimation(){
   animationElement.forEach(element => {
     toggleAnimationElementWindow(element);
   });


   
}

window.onscroll = checkAnimation