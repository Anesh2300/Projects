window.onload = function(){  
    console.log("hello from JavaScript!");

let form = document.getElementById("Appointment-form");
 let email = form.email;
 let emailconfirm = form.emailconfirm;

let date = form.Book;
let dob = form.birthday;
form.addEventListener("submit",function(submit){
    console.log("Submit Button");
    submit.preventDefault();

    checkEmails(form);
    checkDate(form);

    validateForm();
    
    function validateForm(){
    if(dob.validity.valid && date.validity.valid && email.validity.valid && emailconfirm.validity.valid){
        form.submit();
        console.log("Successful submission");
    }
} 
});
}

date.onchange = checkDate;
dob.onchange = checkDate;

function checkDate(form){
    let error = '';
    let error2 = '';
    let date = form.Book;
    let dob = form.birthday;

    if(new Date(dob.value)<new Date()){
        dob.setCustomValidity('');
    }else{        
        dob.setCustomValidity("Invalid Date, Refresh and enter a past date");
              error += "Date needs to be before today, Refresh and re-enter"
    }

    if (new Date(date.value)<new Date()){
        date.setCustomValidity("Invalid Date, Refresh and enter a future date");
        error2 += "Date needs to be after today, Refresh and re-enter"
    }else{
        date.setCustomValidity('');
    }
    dob.reportValidity();
    dob.reportValidity(error);
    date.reportValidity();
    date.reportValidity(error2);
   

}



 email.onchange = checkEmails;
 emailconfirm.onchange = checkEmails;

function checkEmails(form){
    let email = form.email;
    let emailconfirm = form.emailconfirm;
    let error = '';
    if (email.value != emailconfirm.value){
        emailconfirm.setCustomValidity('Emails need to match, Refresh and re-enter');
        error +=  "Emails need to match, Refresh and re-enter";
    }else{
        emailconfirm.setCustomValidity('');
    }
    email.reportValidity();
    
    


    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!regex.test(email.value)){
        
    //     error += "invalid email requires @ and .com";

    // }
   
}