const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const Year = String(date.getFullYear()).padStart(4, "0");
    const month = String(date.getMonth()+1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${Year}-${month}-${day}  ${hours}:${minutes}:${seconds}`;
}

getClock() //getClock을 먼저 한번 호출해야 시계가 바로 뜸
setInterval(getClock, 1000); 

//padStart(string이 가져야 하는 길이, 그렇지 않을경우 앞쪽에 비어있는 만큼 문자 추가)