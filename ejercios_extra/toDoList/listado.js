// Array para almacenar las tareas
let tareas = [];

// Función para mostrar las tareas en la interfaz de usuario
function mostrarTareas() {
  const listaTareas = document.getElementById('lista-tareas');
  listaTareas.innerHTML = '';

  // Iteramos sobre cada tarea en el array
  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.textContent = tarea;

    // Creamos botones para editar y eliminar la tarea actual
    const botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    botonEditar.onclick = () => editarTarea(index);

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarTarea(index);

    // Agregamos los botones al elemento <li>
    li.appendChild(botonEditar);
    li.appendChild(botonEliminar);
    
    // Agregamos el elemento <li> a la lista de tareas
    listaTareas.appendChild(li);
  });
}

// Función para agregar una nueva tarea
function agregarTarea() {
  const tareaInput = document.getElementById('tarea');
  const nuevaTarea = tareaInput.value.trim();

  // Verificamos que la tarea ingresada no esté vacía
  if (nuevaTarea !== '') {
    // Agregamos la nueva tarea al array
    tareas.push(nuevaTarea);
    // Actualizamos la lista de tareas en la interfaz
    mostrarTareas();
    // Vaciamos el campo de entrada de texto
    tareaInput.value = '';
  }
}

// Función para editar una tarea existente
function editarTarea(index) {
  // Mostramos un cuadro de diálogo para que el usuario ingrese el nuevo texto
  const nuevaTarea = prompt('Editar tarea:', tareas[index]);

  // Verificamos si el usuario ingresó un texto y no canceló el cuadro de diálogo
  if (nuevaTarea !== null && nuevaTarea !== '') {
    // Actualizamos la tarea en el array con el nuevo texto
    tareas[index] = nuevaTarea;
    // Actualizamos la lista de tareas en la interfaz
    mostrarTareas();
  }
}

// Función para eliminar una tarea
function eliminarTarea(index) {
  // Mostramos un cuadro de diálogo de confirmación antes de eliminar la tarea
  if (confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
    // Eliminamos la tarea del array
    tareas.splice(index, 1);
    // Actualizamos la lista de tareas en la interfaz
    mostrarTareas();
  }
}

// Mostramos las tareas al cargar la página por primera vez
mostrarTareas();
