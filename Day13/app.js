var upload =document.querySelector('#my-picture');
var preview  = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change'  , function(event){

    var file = upload.files[0];
    if(!file) {
        return ;
    }
    if(!file.name.endsWith('.jpg')){
         error.innerText = 'Hình ảnh phải thuộc định dạng jpg';
     
       return ;
    }
    else {
         error.innerText = '' ;
    }

    if(file.size /(1024 * 1024 )  > 5){
         error.innerText = 'Chỉ được upload hình ảnh < 5MB';     
         return ;
    }
    else {
         error.innerText = '' ;
    }
   
    var img =  document.createElement('img');
    // console.log(URL.createObjectURL(upload.files[0]));
    img.src = URL.createObjectURL(upload.files[0]);
    preview.appendChild(img);
 
})