// const loginBtn= document.getElementById("loginBtn")

// const overlay =()=>{
//     return(
//          loginBtn.onclick=()=>{
//         window.location.href="app/auth/login.html"
//     }
//     )
   
// }
// overlay();

    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    eyeIcon.addEventListener("click", function(){
        if(password.type ==="password"){
            password.type = "text";
            eyeIcon.src ="../../assets/svg/eye-open-svgrepo-com.svg"
        }else{
            password.type = "password";
            eyeIcon.src ="../../assets/svg/eye-closed-duotone-svgrepo-com.svg"
        }
    })