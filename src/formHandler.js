export function handleFormSubmission(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const taskDescription = document.getElementById('taskDescription').value;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <strong>${taskTitle}</strong> - ${dueDate} - ${priority}
    <p>${taskDescription}</p>
    `;

    const delButton = document.createElement('button');
    delButton.textContent = 'del';

    delButton.addEventListener('click', function() {
        taskItem.remove();
    })

    taskItem.appendChild(delButton);

    document.getElementById('tasks').appendChild(taskItem);

    document.getElementById('toDoForm').reset();
}