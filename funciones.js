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
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. BOTÓN GUARDAR (Intercepta el envío del formulario) ---
    const formulario = document.getElementById('form-empleado');
    const botonGuardar = document.getElementById('btn-guardar');
    const icono = document.getElementById('btn-icono');
    const texto = document.getElementById('btn-texto');

    if (formulario && botonGuardar) {
        formulario.addEventListener('submit', (event) => {
            // Evita que la página se recargue al enviar el formulario
            event.preventDefault();
            ejecutarGuardado();
        });
    }

    function ejecutarGuardado() {
        botonGuardar.disabled = true;
        if (texto) texto.textContent = 'Guardando...';
        if (icono) icono.className = 'fas fa-spinner fa-spin';

        // Simular petición al servidor (2 segundos)
        setTimeout(() => {
            botonGuardar.disabled = false;
            if (texto) texto.textContent = 'Guardar';
            if (icono) icono.className = 'fas fa-save';

            console.log('¡Datos guardados con éxito!');
            alert('¡Empleado guardado correctamente!');
            formulario.reset(); // Limpia los campos tras guardar
        }, 2000);
    }

    // --- 2. BOTÓN LIMPIAR ---
    const botonLimpiar = document.getElementById('btn-limpiar');
    if (botonLimpiar && formulario) {
        botonLimpiar.addEventListener('click', () => {
            formulario.reset();
            console.log('Formulario limpiado.');
        });
    }

    // --- 3. BOTÓN CANCELAR ---
    const botonCancelar = document.getElementById('btn-cancelar');
    if (botonCancelar) {
        botonCancelar.addEventListener('click', () => {
            if (confirm('¿Seguro que deseas cancelar? Se perderán los datos no guardados.')) {
                window.location.href = 'index.html';
            }
        });
    }

    // --- 4. BUSCADOR (Solo se activa si existen los elementos en la página) ---
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResult = document.getElementById('searchResult');

    if (searchInput && searchButton && searchResult) {
        function realizarBusqueda() {
            const query = searchInput.value.trim();
            if (query !== '') {
                searchResult.textContent = `Buscando resultados para: "${query}"`;
            } else {
                searchResult.textContent = 'Por favor, escribe algo para buscar.';
            }
        }

        searchButton.addEventListener('click', realizarBusqueda);
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                realizarBusqueda();
            }
        });
    }
});
// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-sectores");
    const contenedorResultados = document.getElementById("contenedor-resultados");
    const tablaBody = document.getElementById("tabla-resultados-body");

    // Referencias a los botones
    const btnAlta = document.getElementById("btn-alta");
    const btnBaja = document.getElementById("btn-baja");
    const btnModificar = document.getElementById("btn-modificar");
    const btnConsultar = document.getElementById("btn-consultar");

    // Obtener lista de sectores guardados en el navegador
    function obtenerSectores() {
        return JSON.parse(localStorage.getItem("sectores")) || [];
    }

    // Guardar lista actualizada en el navegador
    function guardarSectores(lista) {
        localStorage.setItem("sectores", JSON.stringify(lista));
    }

    // Leer los valores actuales de tus 7 inputs
    function obtenerDatosFormulario() {
        return {
            codigo: document.getElementById("codigo").value.trim(),
            nombre: document.getElementById("nombre").value.trim(),
            responsable: document.getElementById("responsable").value.trim(),
            presup_anual: document.getElementById("presup_anual").value.trim(),
            alta: document.getElementById("alta").value,
            baja: document.getElementById("baja").value,
            motiv: document.getElementById("motiv").value.trim()
        };
    }

    // Cargar un sector encontrado en los inputs del formulario
    function cargarDatosFormulario(sector) {
        document.getElementById("codigo").value = sector.codigo || "";
        document.getElementById("nombre").value = sector.nombre || "";
        document.getElementById("responsable").value = sector.responsable || "";
        document.getElementById("presup_anual").value = sector.presup_anual || "";
        document.getElementById("alta").value = sector.alta || "";
        document.getElementById("baja").value = sector.baja || "";
        document.getElementById("motiv").value = sector.motiv || "";
    }

    // Dibujar resultados en la tabla HTML
    function mostrarTablaResultados(lista) {
        if (!tablaBody || !contenedorResultados) return;

        tablaBody.innerHTML = "";
        contenedorResultados.style.display = "block";

        if (lista.length === 0) {
            tablaBody.innerHTML = `
                <tr>
                    <td colspan="8" style="text-align: center; color: #64748b; padding: 20px;">
                        No se encontraron sectores registrados.
                    </td>
                </tr>`;
            return;
        }

        lista.forEach((sector) => {
            const fila = document.createElement("tr");
            const estadoHtml = sector.baja
                ? `<span class="estado estado-pendiente">Inactivo</span>`
                : `<span class="estado estado-calculada">Activo</span>`;

            fila.innerHTML = `
                <td><strong>${sector.codigo}</strong></td>
                <td>${sector.nombre}</td>
                <td>${sector.responsable}</td>
                <td>${sector.presup_anual ? "$" + sector.presup_anual : "-"}</td>
                <td>${sector.motiv || "-"}</td>
                <td>${sector.alta || "-"}</td>
                <td>${sector.baja || "-"}</td>
                <td>${estadoHtml}</td>
            `;

            fila.style.cursor = "pointer";
            fila.title = "Haz clic para cargar este sector en el formulario";
            fila.addEventListener("click", () => cargarDatosFormulario(sector));

            tablaBody.appendChild(fila);
        });
    }

    // =========================================
    // 1. FUNCIÓN ALTA
    // =========================================
    btnAlta.addEventListener("click", () => {
        const datos = obtenerDatosFormulario();

        if (!datos.codigo || !datos.nombre || !datos.responsable || !datos.alta) {
            alert("Por favor, completa los campos obligatorios (Código, Nombre, Responsable y Fecha de Alta).");
            return;
        }

        if (datos.baja && datos.baja < datos.alta) {
            alert("La fecha de Baja no puede ser anterior a la fecha de Alta.");
            return;
        }

        const sectores = obtenerSectores();
        const existe = sectores.some(s => s.codigo.toLowerCase() === datos.codigo.toLowerCase());

        if (existe) {
            alert("Ya existe un sector registrado con ese Código. Usa 'Modificar' si deseas actualizarlo.");
            return;
        }

        sectores.push(datos);
        guardarSectores(sectores);
        alert("Sector dado de alta correctamente.");
        formulario.reset();
        mostrarTablaResultados(sectores);
    });

    // =========================================
    // 2. FUNCIÓN CONSULTAR (Busca por Código o muestra todos)
    // =========================================
    btnConsultar.addEventListener("click", () => {
        const codigoBuscado = document.getElementById("codigo").value.trim().toLowerCase();
        const nombreBuscado = document.getElementById("nombre").value.trim().toLowerCase();
        const sectores = obtenerSectores();

        let resultados = sectores;

        if (codigoBuscado || nombreBuscado) {
            resultados = sectores.filter(s =>
                (codigoBuscado && s.codigo.toLowerCase().includes(codigoBuscado)) ||
                (nombreBuscado && s.nombre.toLowerCase().includes(nombreBuscado))
            );
        }

        if (codigoBuscado) {
            const exacto = sectores.find(s => s.codigo.toLowerCase() === codigoBuscado);
            if (exacto) cargarDatosFormulario(exacto);
        }

        mostrarTablaResultados(resultados);
    });

    // =========================================
    // 3. FUNCIÓN MODIFICAR (Actualiza por Código)
    // =========================================
    btnModificar.addEventListener("click", () => {
        const datos = obtenerDatosFormulario();

        if (!datos.codigo) {
            alert("Ingresa el Código del sector que deseas modificar.");
            return;
        }

        if (datos.baja && datos.baja < datos.alta) {
            alert("La fecha de Baja no puede ser anterior a la fecha de Alta.");
            return;
        }

        const sectores = obtenerSectores();
        const indice = sectores.findIndex(s => s.codigo.toLowerCase() === datos.codigo.toLowerCase());

        if (indice === -1) {
            alert("No existe un sector con ese Código para modificar.");
            return;
        }

        sectores[indice] = datos;
        guardarSectores(sectores);
        alert("Sector modificado correctamente.");
        formulario.reset();
        mostrarTablaResultados(sectores);
    });

    // =========================================
    // 4. FUNCIÓN BAJA (Elimina por Código)
    // =========================================
    btnBaja.addEventListener("click", () => {
        const codigoBorrar = document.getElementById("codigo").value.trim();

        if (!codigoBorrar) {
            alert("Ingresa el Código del sector que deseas dar de baja.");
            return;
        }

        const sectores = obtenerSectores();
        const indice = sectores.findIndex(s => s.codigo.toLowerCase() === codigoBorrar.toLowerCase());

        if (indice === -1) {
            alert("No se encontró ningún sector con ese Código.");
            return;
        }

        if (confirm(`¿Estás seguro de eliminar el sector "${sectores[indice].nombre}"?`)) {
            sectores.splice(indice, 1);
            guardarSectores(sectores);
            alert("Sector eliminado correctamente.");
            formulario.reset();
            mostrarTablaResultados(sectores);
        }
    });
});


