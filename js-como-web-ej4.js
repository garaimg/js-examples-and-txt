const tareas = [
    {
        id: 1,
        descripcion: 'Hacer compras',
        responsable: 'Mikel',
        fecha: '03-10-2020'
    },
    {
        id: 2,
        descripcion: 'Estudiar para el examen',
        responsable: 'Ana',
        fecha: '05-10-2020'
    },
    {
        id: 3,
        descripcion: 'Preparar presentación',
        responsable: 'Juan',
        fecha: '07-10-2020'
    },
    {
        id: 4,
        descripcion: 'Revisar informe',
        responsable: 'María',
        fecha: '10-10-2020'
    }
];

function generarTabla(tareas) {
    let tablaContainer = document.getElementById('tabla-container');
    let tablaHTML = '<table border="1">'; // Iniciamos la tabla

    // Encabezados de la tabla
    let encabezados = ['ID', 'Descripción', 'Responsable', 'Fecha'];
    tablaHTML += '<tr>';
    encabezados.forEach(encabezado => {
        tablaHTML += `<th>${encabezado}</th>`;
    });
    tablaHTML += '</tr>';

    // Filas de datos
    tareas.forEach(tarea => {
        tablaHTML += '<tr>';
        Object.keys(tarea).forEach(key => {
            tablaHTML += `<td>${tarea[key]}</td>`;
        });
        tablaHTML += '</tr>';
    });

    tablaHTML += '</table>'; // Cerramos la tabla

    tablaContainer.innerHTML = tablaHTML; // Establecemos el HTML dentro del contenedor
}

generarTabla(tareas);

