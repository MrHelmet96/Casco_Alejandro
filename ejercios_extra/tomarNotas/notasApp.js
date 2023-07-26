// Función para obtener las notas almacenadas en localStorage
function obtenerNotas() {
    const notasJSON = localStorage.getItem('notas');
    return notasJSON ? JSON.parse(notasJSON) : [];
  }
  
  // Función para guardar las notas en localStorage
  function guardarNotas(notas) {
    localStorage.setItem('notas', JSON.stringify(notas));
  }
  
  // Función para mostrar las notas en la interfaz de usuario
  function mostrarNotas() {
    const listaNotas = document.getElementById('lista-notas');
    listaNotas.innerHTML = '';
  
    const notas = obtenerNotas();
  
    // Iteramos sobre cada nota en el array
    notas.forEach((nota, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${nota.titulo}</strong>
        <p>${nota.contenido}</p>
        <button onclick="editarNota(${index})">Editar</button>
        <button onclick="eliminarNota(${index})">Eliminar</button>
      `;
      
      // Agregamos el elemento <li> a la lista de notas
      listaNotas.appendChild(li);
    });
  }
  
  // Función para agregar una nueva nota
  function agregarNota() {
    const tituloInput = document.getElementById('titulo');
    const contenidoInput = document.getElementById('contenido');
    const nuevoTitulo = tituloInput.value.trim();
    const nuevoContenido = contenidoInput.value.trim();
  
    // Verificamos que tanto el título como el contenido no estén vacíos
    if (nuevoTitulo !== '' && nuevoContenido !== '') {
      // Obtenemos las notas actuales almacenadas en localStorage
      const notas = obtenerNotas();
      // Agregamos la nueva nota al array de notas
      notas.push({ titulo: nuevoTitulo, contenido: nuevoContenido });
      // Guardamos las notas actualizadas en localStorage
      guardarNotas(notas);
      // Actualizamos la lista de notas en la interfaz
      mostrarNotas();
      // Vaciamos los campos de entrada de texto
      tituloInput.value = '';
      contenidoInput.value = '';
    }
  }
  
  // Función para editar una nota existente
  function editarNota(index) {
    const notas = obtenerNotas();
    const nota = notas[index];
  
    // Mostramos cuadros de diálogo para que el usuario ingrese el nuevo título y contenido
    const nuevoTitulo = prompt('Editar título:', nota.titulo);
    const nuevoContenido = prompt('Editar contenido:', nota.contenido);
  
    // Verificamos si el usuario ingresó un título y contenido y no canceló los cuadros de diálogo
    if (nuevoTitulo !== null && nuevoTitulo !== '' && nuevoContenido !== null && nuevoContenido !== '') {
      // Actualizamos la nota en el array de notas con los nuevos datos
      nota.titulo = nuevoTitulo;
      nota.contenido = nuevoContenido;
      // Guardamos las notas actualizadas en localStorage
      guardarNotas(notas);
      // Actualizamos la lista de notas en la interfaz
      mostrarNotas();
    }
  }
  
  // Función para eliminar una nota
  function eliminarNota(index) {
    // Mostramos un cuadro de diálogo de confirmación antes de eliminar la nota
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
      const notas = obtenerNotas();
      // Eliminamos la nota del array de notas
      notas.splice(index, 1);
      // Guardamos las notas actualizadas en localStorage
      guardarNotas(notas);
      // Actualizamos la lista de notas en la interfaz
      mostrarNotas();
    }
  }
  
  // Mostramos las notas al cargar la página por primera vez
  mostrarNotas();
  