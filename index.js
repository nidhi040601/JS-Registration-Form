let form = document.getElementById("regForm");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let number = document.getElementById("phone");
let dob  = document.getElementById("dob");
let gender = document.getElementById("gender");
let emailErr = document.getElementById("emailErr");
let phoneErr = document.getElementById("phoneErr");
let errDiv = document.getElementById("errDiv");
let alert = document.getElementById("alert");
let successBtn = document.getElementById("success");

form.addEventListener('submit', e => {
        e.preventDefault();
        validateInput();
    })

const validateInput = () => {
        let fnameVal = fname.value.trim();
        let lnameVal = lname.value.trim();
        let emailVal = email.value.trim();
        let numVal = number.value.trim();
        let dobVal = dob.value;
        let genderVal = gender.value;

        let err=0;
        

        if(emailVal.length > 0){
            const pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!pattern.test(emailVal)){
                emailErr.style.visibility = "visible";
                emailErr.innerHTML = "*Email not valid";
                email.style.borderBottom = "1px solid red";
                err=1;
            }else{
                emailErr.style.visibility= "hidden";
            }
        }

        if(numVal.length > 0){
            const phPattern = /^[6-9]\d{9}$/;
            if(isNaN(numVal)){
                phoneErr.style.visibility = "visible";
                phoneErr.innerHTML = "*Please enter Numeric value";
                number.style.borderBottom = "1px solid red";
                err=1;
            }else{
                phoneErr.style.visibility = "hidden";
                
                if(!phPattern.test(numVal)){
                    phoneErr.style.visibility = "visible";
                    phoneErr.innerHTML = "*Enter valid number";
                    number.style.borderBottom = "1px solid red";
                    err=1;
                }
            }
        }

        if(fnameVal=="" || lnameVal=="" || emailVal=="" 
            || numVal=="" || dobVal=="" || genderVal==""){
            err=1;
            errDiv.innerHTML = "All fields are required.";
        }else if(err==0){
            alert.style.visibility = "visible";
            errDiv.innerHTML = "";
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        if(err==0){
            fname.style.borderBottom = "1px solid rgb(255,218,185)";
            lname.style.borderBottom = "1px solid rgb(255,218,185)";
            email.style.borderBottom = "1px solid rgb(255,218,185)";
            number.style.borderBottom = "1px solid rgb(255,218,185)";
        }
}

successBtn.addEventListener('click',() => {
    alert.style.visibility = "hidden";
});