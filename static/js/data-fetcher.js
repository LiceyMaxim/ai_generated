document.addEventListener("DOMContentLoaded", () => {
  const notesList = document.getElementById("notes-list");
  const preloader = document.getElementById("preloader");

    function fetchTasks() {
    preloader.style.display = 'block';
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
        const currentSeconds = new Date().getSeconds();
        const filteredData = currentSeconds % 2 === 0
            ? data.filter(task => task.id >= 100)
            : data.filter(task => task.id <= 200);
        renderTasks(filteredData);
        })
        .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        notesList.innerHTML = '<li>Something went wrong</li>';
        })
        .finally(() => {
        preloader.style.display = 'none';
        });
    }

function renderTasks(tasks) {
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      notesList.removeChild(li);
    };

    li.appendChild(deleteButton);
    notesList.appendChild(li);
  });
}

  fetchTasks();
});