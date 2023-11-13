// DOM 요소 찾기
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// 할 일 추가 함수
function addTodo(event) {
  event.preventDefault(); // 폼 제출 기본 이벤트 방지

  // 입력 값이 비어있는 경우 추가하지 않음
  if (todoInput.value.trim() === "") {
    return;
  }

  // 새로운 할 일 아이템 생성
  const newTodoItem = document.createElement("li");
  newTodoItem.classList.add("todo");
  const todoText = document.createElement("span");
  todoText.classList.add("text");
  todoText.textContent = todoInput.value;

  // 체크박스 생성 및 이벤트 추가
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    todoText.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  // 수정 버튼 생성
  const editButton = document.createElement("button");
  editButton.textContent = "수정";
  editButton.classList.add("edit");
  editButton.addEventListener("click", function () {
    // 수정 로직 추가
  });

  // 삭제 버튼 생성
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", function () {
    todoList.removeChild(newTodoItem);
  });

  // 할 일 아이템에 요소 추가
  newTodoItem.appendChild(checkbox);
  newTodoItem.appendChild(todoText);
  newTodoItem.appendChild(editButton);
  newTodoItem.appendChild(deleteButton);

  // 할 일 목록에 새로운 할 일 추가
  todoList.appendChild(newTodoItem);

  // 입력 필드 초기화
  todoInput.value = "";
}

// 할 일 폼에 이벤트 리스너 추가
todoForm.addEventListener("submit", addTodo);
