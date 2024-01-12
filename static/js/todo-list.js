document.addEventListener("DOMContentLoaded", () => {
  const noteForm = document.getElementById("note-form");
  const notesList = document.getElementById("notes-list");
  const noteInput = document.getElementById("note-input");
  const deleteAllBtn = document.getElementById('delete-all-btn');

  // Load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => {
      addTaskToList(taskText);
    });
  }

  // Save tasks to local storage
  function saveTasks() {
    const tasks = Array.from(notesList.children).map((li) => li.firstChild.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTaskToList(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      notesList.removeChild(li);
      saveTasks();
    };
    li.appendChild(deleteButton);
    notesList.appendChild(li);
  }

  loadTasks();

  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const noteText = noteInput.value.trim();
    if (noteText) {
      addTaskToList(noteText);
      saveTasks();
      noteInput.value = "";
    }
  });

  function deleteAllTasks() {
    while (notesList.firstChild) {
      notesList.removeChild(notesList.firstChild);
    }
    saveTasks();
  }

  if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', deleteAllTasks);
  }
});