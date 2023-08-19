let token = [248871, 236542, 221489, 414141, 480215];

let login_details = {
    user_name: 'shepherd',
    password: "qwerty"
}
$(document).ready(
    $('#login').click(()=>{

        if (login_details.user_name === $('.username').val()
        && login_details.password === $('.password').val()){
            window.location.href = "verification.html";
        }
        else{
            alert('username or password not correct')
        } 
    })
)
let empty = null
 
$('#validate').click(()=>{
   
   if (token[0] == $("#input-otp").val()){
    window.location.href = "home.htm";
    } 
    else if (token[1] == $("#input-otp").val()){
        window.location.href = "home.htm";
    }
    else if (token[2] == $("#input-otp").val()){
        window.location.href = "home.htm";
    }
    else if (token[3] == $("#input-otp").val()){
        window.location.href = "home.htm";
    }
    else if (token[4] == $("#input-otp").val()){
        window.location.href = "home.htm";
    }
    else{
        alert('sorry, wrong OTP code entered !')
    }

   

   
})
