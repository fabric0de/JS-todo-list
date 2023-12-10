const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const todoDeleteBtn = document.querySelector(".todo-deleteBtn");

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    appendTodo(); //투두리스트 추가
    todoInput.value = ""; //인풋창 비워주기
  }
});

// 투두리스트 추가 함수
function appendTodo(todo) {
  if (todoInput.value === "") {
    alert("내용을 입력해주세요.");
    return;
  }
  const newTodoItem = document.createElement("li");
  newTodoItem.addEventListener("dblclick", function () {
    editTodo(newTodoItem, todoText);
  });

  const todoText = document.createElement("span");
  todoText.textContent = todoInput.value;

  const todoCheckBox = document.createElement("input");
  todoCheckBox.classList.add("checkBox");
  todoCheckBox.type = "checkbox";
  todoCheckBox.addEventListener("change", function () {
    todoText.style.textDecoration = todoCheckBox.checked
      ? "line-through"
      : "none";
  });

  todoDeleteBtn.addEventListener("click", function () {
    const checkBoxes = document.querySelectorAll(".todo-list .checkBox");
    checkBoxes.forEach(function (checkBox) {
      if (checkBox.checked) {
        todoList.removeChild(checkBox.parentElement);
      }
    });
  });

  newTodoItem.appendChild(todoCheckBox);
  newTodoItem.appendChild(todoText);

  todoList.appendChild(newTodoItem);
}

// 할 일 수정 함수
function editTodo(todoItem, todoText) {
  const editInput = document.createElement("input");
  editInput.classList.add("editInput");
  editInput.type = "text";
  editInput.value = todoText.textContent;
  editInput.addEventListener("blur", function () {
    todoText.textContent = editInput.value;
    todoItem.replaceChild(todoText, editInput);
  });
  editInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      editInput.blur(); // Enter 키를 누르면 수정 완료
    }
  });

  todoItem.replaceChild(editInput, todoText);
  editInput.focus();
}
