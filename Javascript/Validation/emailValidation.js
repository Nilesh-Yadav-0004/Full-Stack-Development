function myFunction(e){
    e.preventDefault();

    let email = document.myForm.email.value;
    let pass = document.myForm.pass.value;
    console.log('~ pass:', pass);
    console.log('~ email:', email);

    if(email.indexOf("@")<=0) {
        document.getElementById("Message").innerHTML = "Invalid Email by @";
        return false;
    }else if (
        email.charAt(email.length - 4) === "." &&
        email.charAt(email.length -3) === "."
    ){
        document.getElementById("Message").innerHTML =
        "Invalid Email by .com/.in domain";
        return false;
    }

    if(pass !== null){
        if(pass.trim() === ""){
            console.log(`please enter the value...`);
        }else if (pass.length > 8 && pass.length > 20){
            console.log(`please enter the correct length...`);
        }else{
            const hasUpperCase = /[A-Z]/.test(pass);
            const hasLowerCase = /[a-z]/.test(pass);
            const hasNumber = /[0-9]/.test(pass);
            const hasSpecialChar = /[!@#$%^&*(),.?\":{}|<>]/.test(pass);

            if (!hasUpperCase){
                document.getElementById("Message").innerHTML =
            "Password must included at least one UpperCase Letter...";
            return false;
            }else if (!hasLowerCase){
                document.getElementById("Message").innerHTML =
            "Password must included at least one LowerCase Letter...";
            return false;
            }else if (!hasNumber){
                document.getElementById("Message").innerHTML =
            "Password must included at least one Number Letter...";
            return false;
            }else if (!hasSpecialChar){
                document.getElementById("Message").innerHTML =
            "Password must included at least one SpecialChar Letter...";
            return false;
            }
            else{
                document.getElementById("Message").innerHTML =
            "Password is Valid...";
            }
        }
    }
}