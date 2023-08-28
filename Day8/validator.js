var userName = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');



function showError(input , message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {

    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(ListInput){
    let isEmptyError = false
     ListInput.forEach(input => {
        input.value  = input.value.trim();

        if(!input.value) {
            isEmptyError = true;
            showError(input , 'Không được để trống');
        }
        else {
            showSuccess(input);
        }
     });
     return isEmptyError;
}

function checkEmailError(input) {
   const regex =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
   
   input.value = input.value.trim();
    
   let isEmailError = !regex.test(input.value)

    if(regex.test(input.value)) {
        showSuccess(input);
    }
    else {
        showError(input , 'Email Invalid' );
    }
     return isEmailError;
}

function CheckLengthError(input , min , max){
       input.value  = input.value.trim();
       
       if(input.value.length < min) {
          showError(input , `Phải có ít nhất ${min} kí tự`);
         
       }
       else if(input.value.length > max) {
          showError(input , `Không được vượt quá ${max} kí tự`);
          return true;
       }
   
}

function checkMatchPassword(password , confirmPassword) {
    if(password.value !== confirmPassword.value) {
        showError(confirmPassword , 'Mật khẩu không trùng khớp');
        return true;
    }
    return false;
}



form.addEventListener('submit' , function(e) {
     e.preventDefault();
     let isEmptyError = checkEmptyError([userName , email , password , confirmPassword]);
     let isEmailError = checkEmailError(email);
     let usernameLengthError = CheckLengthError(userName , 6 , 100);
     let passwordLength = CheckLengthError(password , 6 , 100);
     let isCheckMatchPassword = checkMatchPassword(password , confirmPassword);
    
     if(isEmptyError || isEmailError || usernameLengthError || passwordLength || isCheckMatchPassword){
          //do nothing
     }
     else {
        // call api
     }

    })
