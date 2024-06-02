import { Tarea } from "./task.js";

//Importar la clase Tarea desde task.js

//Obtener referencias de los elementos del DOM
const tareaForm = document.getElementById('task-form');
const tareaInput = document.getElementById('task-input');
const tareaList = document.getElementById('task-list');

//Crear array para almacenar las tareas
let tareas = [];
//Funcioón para agregar una nueva tarea
function addTask(descripcion) {
    //Crear una nueva instancia de la clase Tarea
    const nuevaTarea = new Tarea(descripcion)

    //Agregar la tarea al array de tareas
    tareas.push(nuevaTarea);

    //Actualizar    la lista de tareas del DOM
    renderTareas();
}

//Función para renderizar la lista de tareas en el DOM
function renderTareas() {
    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML = '';

    //Iterar sobre todas las tareas
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = tarea.descripcion;
        //tareaList.appendChild(li);

        //Botón para eliminar una tarea
        const eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.classList.add('eliminar-btn');
        eliminarBtn.addEventListener('click', () => {
            eliminarTarea(tarea);
        });

    //Agregar clase completado si la tarea está completa

    if(tarea.completado){
        li.classList.add('completada');
    }

    //Agregar un evento clic para marcar una tarea completada
    li.addEventListener('click', () => {
        tarea.tareaCompletada();
        renderTareas();
    });

    li.appendChild(eliminarBtn);
    tareaList.appendChild(li);
})
}



tareaForm.addEventListener('submit', event => {
    event.preventDefault();
    const descripcion = tareaInput.value.trim();
    if (descripcion !== '') {
        addTask(descripcion);
        tareaInput.value = '';
    }
});

function eliminarTarea(tareaEliminar){
    tareas = tareas.filter(tarea => tarea !==tareaEliminar);
    renderTareas();
}
//Renderizar la lista de tareas al cargar la página
renderTareas();
