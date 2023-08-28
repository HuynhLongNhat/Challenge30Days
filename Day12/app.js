var process = document.querySelector('.process');
var range = document.querySelector('.range');
var value = document.querySelector('.process span');

function UpdateProcess(percent){
   process.style.width = `${percent}%`;
   value.innerText =  process.style.width;
}

range.addEventListener('mousemove', function(e){
  var processWith = e.pageX - this.offsetLeft ;
  var percent = processWith / this.offsetWidth *100;
  percent = Math.round(percent)
  UpdateProcess(percent)
 
})

  UpdateProcess(30)

var slider = document.querySelector('#slider');
slider.addEventListener('change' , function(val){
      console.log(this.value)
})