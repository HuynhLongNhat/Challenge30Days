var listCounter = document.querySelectorAll(".counter");


function count(element){
  var numberEl = element.querySelector('.number');
  var to = parseInt(numberEl.innerText);
  var count = 0;
  var time = 250;
  var step = to / time;
 let counting = setInterval(() => {
    count += step;
   if(count > to)
   {
      // dừng đếm
      clearInterval(counting)    
      numberEl.innerText = to;
   }else{
      numberEl.innerText = Math.round(count);
   }
 
}, 1);
}

listCounter.forEach(item =>{
    count(item)
})
