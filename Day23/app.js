var mirror = document.querySelector("#mirror");
var imgList = document.querySelectorAll(".zoomer img");
var scope = 4;

imgList.forEach(function (img) {
  img.addEventListener("mousemove", function (e) {
      mirror.classList.remove('hide');
     let width = this.offsetWidth;
    let height = this.offsetHeight;
    let percentMouseByWidth = (e.offsetX / width) * 100;
    let percentMouseByHeight = (e.offsetY / height) * 100;
    mirror.style.top = `${e.clientY}px`;
    mirror.style.left = `${e.clientX}px`;
    mirror.style.backgroundSize = `1000px 1000px`;
   

    //offsetWidth/Height : lấy chiều dài và rộng của vật thể
    //offset Left / Top : là khoảng cách của vật thể với lề trái / trên của màn hình
    // e.pageX là khoảng cách giữa chuột với lề trái của màn hình
    // let mouseWithImgBorderX = e.pageX - this.offsetLeft;
    // let mouseWithImgBorderY = e.pageY - this.offsetTop;

    
    mirror.style.backgroundPosition = `${percentMouseByWidth}% ${percentMouseByHeight}%`;

    //set background anh
    var imgSource  = this.getAttribute('src');
    mirror.style.backgroundImage = `url(${imgSource})`
   
  });

  img.addEventListener('mouseleave' , function(e) {
     mirror.classList.add('hide');
  })
});
