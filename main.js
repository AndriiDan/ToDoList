// button з ToDoList 
const addTaskBtn = document.getElementById('add-task-btn');
// input з ToDoList
const deskTaskInput = document.getElementById('description-task');
// <div class="todos-wrapper"> з "Завдання на день:"
const todoWrapper = document.querySelector('.todos-wrapper');

// створюємо пустий масив (для зберігання завдань) 
let tasks = [];

// Створюю конструктор, для формування списку завдань, які будуть зберігатися в F12-Application-LocalStorage-file(http)
function Task(description) {
    // description будемо передавати
    this.description = description;
    // по замовчуванню виконання завдання (completed)
    this.completed = false;
}

// Функція для оновлення Local Storage
const updateLocal = () => {
    // localStorage - глобальна назва (яд document); setItem(key: string, value: string); JSON.stringify(tasks) - перетворює масив tasks в JSON-формат (так краще для Local Storage) 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// При натисненні на кнопку відправимо завдання в кінець масиву
addTaskBtn.addEventListener('click', () => {
    // 'new Task' створюємо об'єкт за констуктором з значенням 'deskTaskInput.value' (інпута)
    tasks.push(new Task(deskTaskInput.value));
    // викликаємо після додавання (оновлення) завдання
    updateLocal();
})