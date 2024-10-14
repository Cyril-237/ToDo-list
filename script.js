// script.js

const taskInput = document.getElementById('taskInput');

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        ajouterTache()
    }
});

function ajouterTache() {
    
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const todolist = document.getElementById('todolist');

    // Créer un nouvel <li> par tâche
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Ajouter un bouton pour supprimer la tâche
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        newTask.remove();
    };

    // Marquer la tâche comme complétée
    newTask.addEventListener('click', function () {
        newTask.classList.toggle('completed');
    });

    newTask.appendChild(deleteButton);
    todolist.appendChild(newTask);

    // Réinitialiser le champ de texte
    taskInput.value = "";
}
