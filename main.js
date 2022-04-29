// button з ToDoList 
const addTaskBtn = document.getElementById('add-task-btn');
// значення input з ToDoList
const deskTaskInput = document.getElementById('description-task');
// <div class="todos-wrapper"> з "Завдання на день:"
const todosWrapper = document.querySelector('.todos-wrapper');

// створюємо пустий масив (для зберігання завдань) 
let tasks = [];
// Перевіримо, чи є в LocalStorage в масиві tasks якісь об'єкти; якщо в LocalStorage нічого немає, то створимо пустий масив, якщо щось є, то отримаємо значення
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

// Створюю конструктор, для формування списку завдань, які будуть зберігатися в F12-Application-LocalStorage-file(http)
function Task(description) {
    // description будемо передавати при створенні завдання (з input)
    this.description = description;
    // по замовчуванню виконання завдання (completed)
    this.completed = false;
}

// Створимо ф-цію для створення завдання
const createTemplate = (task, index) => {
    return `
        <div class="todo-item">
            <div class="description">${task.description}</div>
            <div class="buttons">
                <input class="btn-complete" type="checkbox">
                <button class="btn-delete">Delete</button>
            </div>
        </div>
    `
}

// Створимо ф-цію для заповнення списку в HTML
const fillHtmlList = () => {
    // зачистимо дані, які початково були в div todosWrapper
    todosWrapper.innerHTML = "";
    // перевіримо, чи є щось в масиві tasks
    if (tasks.length > 0) {
        // переберемо всі елемента в масиві. Параметри item (кожний елемент масива tasks), index для кожного елемента.
        tasks.forEach((item, index) => {
            todosWrapper.innerHTML += createTemplate(item, index);
        })
    }
}

// Виклик ф-ції при ініціалізації сторінки, щоб відобразити завдання, які були раніше записані
fillHtmlList();

// Функція для оновлення Local Storage
const updateLocal = () => {
    // localStorage - глобальна назва (як document); setItem(key: string, value: string) - встановити значення; JSON.stringify(tasks) - перетворює масив tasks в JSON-формат (так краще для Local Storage) 
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// При натисненні на кнопку відправимо завдання в кінець масиву
addTaskBtn.addEventListener('click', () => {
    // 'new Task' створюємо об'єкт за констуктором з значенням 'deskTaskInput.value' (інпута)
    tasks.push(new Task(deskTaskInput.value));
    // викликаємо після додавання (оновлення) завдання
    updateLocal();
    fillHtmlList();
})