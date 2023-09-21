var nameEror = document.getElementById('name-error');
var emailEror = document.getElementById('email-error');
var messageEror = document.getElementById('message-error');
var submitEror = document.getElementById('submit-error');


function validatename(){
    var name = document.getElementById('contact-name').value;

    if(name.length === 0){
        nameEror.innerHTML = '*Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameEror.innerHTML = 'write full name';
        return false;
    }
    nameEror.innerHTML = '';
    return true


}


function validatEmail(){

    var email = document.getElementById('contact-email').value;




    if(email.length === 0){
        emailEror.innerHTML ='*Email is Required'
        return false;
    }

    if(!email.match(/^[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,4}$/)){
        emailEror.innerHTML = 'Email invalid';
        return false;
    }
  
    emailEror.innerHTML = 'Valid'; 
    return true;



}
function validatemessage(){

    var message = document.getElementById('contact-message').value; 
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageEror.innerHTML = left + ' more charactor required';
        return false;
    }

    messageEror.innerHTML = 'valid '; 
    return true;
}

function validForm(){
    
    if(!validatename() || !validatEmail() || !validatemessage()){
        submitEror.style.display = 'block';
        submitEror.innerHTML = 'please Add Required Details to Submit';
        setTimeout(function(){submitEror.style.display = 'none';},3000);
        
        return false;
    }
   
    alert('Click OK to submit!');  
   
    return true;
 
}
// function validForm(){
//     document.getElementById("submit-form").reset();
// }


