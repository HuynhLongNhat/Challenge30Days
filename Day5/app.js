var searchButton = document.querySelector('.search_button');

searchButton.addEventListener('click' , function(){
      this.parentElement.classList.toggle('open'); 
      //lấy phần tử ở trước của phần tử hiện tại
      this.previousElementSibling.focus();
  
});