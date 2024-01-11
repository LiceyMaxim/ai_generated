document.addEventListener("DOMContentLoaded", () => {
  const noteForm = document.getElementById("note-form");
  const notesList = document.getElementById("notes-list");
  const noteInput = document.getElementById("note-input");

  // Загрузка
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => {
      addTaskToList(taskText);
    });
  }

  // Сохранить
  function saveTasks() {
    const tasks = Array.from(notesList.children).map((li) => li.firstChild.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Добавить
  function addTaskToList(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      notesList.removeChild(li);
      saveTasks(); // Удалить
    };
    li.appendChild(deleteButton);
    notesList.appendChild(li);
  }

  // Подгрузить
  loadTasks();

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText) {
      addTaskToList(noteText);
      saveTasks(); // Сохранить
      noteInput.value = "";
    }
  });
});