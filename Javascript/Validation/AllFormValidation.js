function myform(e){
    e.preventDefault();
    let username = document.getElementById("user").Value;
    let password = document.getElementById("pass").Value;
    let confirmPassword = document.getElementById("confpass").Value;
    let mobile = document.getElementById("mobile_number").Value;
    let email = document.getElementById("email").Value;

    //  user Validation

    if(username ==""){
        document.getElementById("username_msg").innerHTML =
        "** please fill the username field";
        document.getElementById("username_msg").style.color = "red";
        return false;
    }else if (username.length <= 2 || userName.length > 20){
        document.getElementById("username_msg").innerHTML =
        "** Please enter the length between 2 to 20 ";
        document.getElementById("username_msg").style.color ="red";
        return false;
    }
    else{
        document.getElementById("username_msg").innerHTML = ""
    }

    // pass Validation
    if(password = ""){
        document.getElementById("pass_org").innerHTML = 
        "** please fill the password field";
        document.getElementById("pass_msg").style.color = "red";
    }
}