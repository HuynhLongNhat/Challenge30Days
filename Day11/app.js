var btnSuccess = document.querySelector('.btn.success');
var btnWarning = document.querySelector('.btn.warning');
var btnError = document.querySelector('.btn.error');

btnSuccess.addEventListener('click' , function(){
       createToast("success" , 10000) ;
})

btnWarning.addEventListener('click' , function(){
       createToast("warning");
})

btnError.addEventListener('click' , function(){
       createToast("error");
})

function createToast(status ,timeout){
   let templateInner ;
  
   switch(status){
      case 'success':  templateInner= `<i class="fa-solid fa-circle-check"></i>
                <span class="message">This is a success message</span>
                <div class="countdown ">` ;
            break;

      case 'warning':  templateInner= `<i class="fa-solid fa-circle-exclamation"></i>
                <span class="message">This is a warning message</span>
                <div class="countdown "></div>` ;
            break;
            
      case 'error':  templateInner= `<i class="fa-solid fa-triangle-exclamation"></i>
                <span class="message">This is a error message</span>
                  <div class="countdown "></div>` ;
            break;
   }
   
   
   
   
   var toast = document.createElement('div');
   toast.classList.add('toast');
   toast.classList.add(status);  
   toast.innerHTML = templateInner;
   var toastList = document.getElementById('toasts');
   toastList.appendChild(toast);
   timeout = timeout || 4000;
   setTimeout(function() {
       toast.style.animation = 'slide_hide 2s ease forwards';
   },timeout);

   setTimeout(function() {
       toast.remove();
   },timeout + 2000);
}

