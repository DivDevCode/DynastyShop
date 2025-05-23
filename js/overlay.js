const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const loginBtn = document.getElementById("loginBtn");
const frame = document.getElementById("authFrame");

const deviceWidth = window.matchMedia("(min-width: 768px)");

const Login = () => {
  if (window.innerWidth >= 768) {
    const openOverlay = () => {
      overlay.style.display = "flex";
    };
    closeBtn.onclick = () => {
      overlay.style.display = "none";
      frame.src = "";
    };
    loginBtn.onclick = () => {
      frame.src = "./app/auth/login.html";
      openOverlay();
    };
  } else {
    loginBtn.onclick = () => {
      window.location.href = "./app/auth/login.html";
    };
  }
};

deviceWidth.addEventListener("change", Login);
Login(deviceWidth);
