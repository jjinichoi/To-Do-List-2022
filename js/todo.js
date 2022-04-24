const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = []; //빈값이기 때문에 이미 작성후 새로고침하여 추가작성하려면 배열 초기화 됐음 toDos = parsedToDos;로 해서 기존 toDos를 복원(toDos값이 변경되어야 하니까 let사용)

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //1. JSON.stringify(): JS의 object나 array등을 string으로 변환
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoList){
    const li = document.createElement("li");
    li.id = newTodoList.id;
    const span = document.createElement("span");
    span.innerText = `• ${newTodoList.text}`;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleToDoSubmit(event){   
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // 2. JSON.parse(savedToDos): 다시 string이 아닌 JS에서 사용 가능한 object로 만듬
    toDos = parsedToDos; //빈 array가 아니면 기존 toDos를 복원
    parsedToDos.forEach(paintToDo);
    //3. array의 각 item에 대해 하나의 function을 실행
    //3.1. parsedToDos에 있는 각각의 item에 대해서 각각의 item을 paintToDo()할 것이라는 뜻
    //3.2. forEach함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행
}
