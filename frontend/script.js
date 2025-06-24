const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const API_URL = 'http://localhost:3000/tasks';

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  taskList.innerHTML = '';
  tasks.forEach(addTaskToDOM);
}

function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.textContent = task.content;
  li.className = task.is_done ? 'completed' : '';

  li.addEventListener('click', async () => {
    await fetch(`${API_URL}/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_done: !task.is_done }),
    });
    fetchTasks();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.addEventListener('click', async () => {
    await fetch(`${API_URL}/${task.id}`, { method: 'DELETE' });
    fetchTasks();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const content = taskInput.value;
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  });
  taskInput.value = '';
  fetchTasks();
});

fetchTasks();
