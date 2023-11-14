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

  // 수정 라벨 생성
  const editLabel = document.createElement("label");
  editLabel.textContent = "✏️";
  editLabel.classList.add("edit");
  editLabel.addEventListener("click", function () {
    // 수정 로직 추가
  });

  // 삭제 라벨 생성
  const deleteLabel = document.createElement("label");
  deleteLabel.textContent = "❌";
  deleteLabel.classList.add("delete");
  deleteLabel.addEventListener("click", function () {
    todoList.removeChild(newTodoItem);
  });

  // 할 일 아이템에 요소 추가
  newTodoItem.appendChild(checkbox);
  newTodoItem.appendChild(todoText);
  newTodoItem.appendChild(editLabel);
  newTodoItem.appendChild(deleteLabel);

  // 할 일 목록에 새로운 할 일 추가
  todoList.appendChild(newTodoItem);

  // 입력 필드 초기화
  todoInput.value = "";
}

// 할 일 폼에 이벤트 리스너 추가
todoForm.addEventListener("submit", addTodo);
