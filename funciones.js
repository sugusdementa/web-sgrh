// Funciones asociadas

// Boton guardar : Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // Seleccionar los elementos del botón
    const boton = document.getElementById('btnGuardar');
    const icono = document.getElementById('btnIcono');
    const texto = document.getElementById('btnTexto');

    // Escuchar el evento de click
    boton.addEventListener('click', () => {
        ejecutarGuardado();
    });

    // Función que simula el proceso de guardar datos
    function ejecutarGuardado() {
        // 1. Cambiar estado visual a "Guardando..."
        boton.disabled = true;
        texto.textContent = 'Guardando...';

        // Cambiar el icono de guardado por uno de carga (spinner)
        icono.className = 'fas fa-spinner';

        // 2. Simular una petición al servidor (2 segundos de espera)
        setTimeout(() => {

            // 3. Restaurar el botón al estado original tras el éxito
            boton.disabled = false;
            texto.textContent = 'Guardar';
            icono.className = 'fas fa-save';

            // Mensaje de confirmación en consola o alerta
            console.log('¡Datos guardados con éxito!');
            alert('¡Guardado correctamente!');

        }, 2000);
    }
});

// Boton Limpiar : Seleccionamos el botón y el campo de texto usando sus IDs
const botonLimpiar = document.getElementById('btnLimpiar');
const campoTexto = document.getElementById('miCampo');

// Escuchamos el evento de clic en el botón
botonLimpiar.addEventListener('click', () => {
    campoTexto.value = ''; // Borra el contenido asignando un texto vacío
});

// Seleccionamos el botón de cancelar por su ID
const botonCancelar = document.getElementById('btnCancelar');

// Boton cancelar : Escuchamos el clic para ejecutar la acción de cancelar
botonCancelar.addEventListener('click', () => {
    // Opción 1: Regresar a la página anterior en el historial del navegador
    window.history.back();

    // Opción 2 (Alternativa): Si quieres redirigir a una página fija (ej. inicio), usa:
    // window.location.href = 'index.html';
});
// Boton de busqueda
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResult = document.getElementById('searchResult');

function realizarBusqueda() {
    const query = searchInput.value.trim();
    if (query !== '') {
        searchResult.textContent = `Buscando resultados para: "${query}"`;
        // Aquí puedes agregar la lógica para filtrar elementos o hacer una petición
    } else {
        searchResult.textContent = 'Por favor, escribe algo para buscar.';
    }
}

// Evento al hacer clic en el botón
searchButton.addEventListener('click', realizarBusqueda);

// Evento al presionar "Enter" en el input
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        realizarBusqueda();
    }
});

