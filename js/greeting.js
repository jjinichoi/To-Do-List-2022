const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; 
const USERNAME_KEY = "username"; 
//일반적으로 string만 포함된 변수는 대문자로 표기학 string을 저장하고 싶을 때 사용

function onLoginSubmit(event){
    event.preventDefault(); //브라우저가 기본동작을 실행하지 못하게 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typeUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typeUsername) //localStorage.setItem(key, value) 
    paintGreeting(typeUsername);
} 

function paintGreeting(username){
    greeting.innerText = `Hi, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
//savedUserName === null or "username"

if(savedUserName === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greeting
    paintGreeting(savedUserName);
    
}






