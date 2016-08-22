var data = [
    {
        "nombre": "Tiger Nixon",
        "fecha": "2016-01-01",
        "estatus": "PENDIENTE",
        "monto": "$3,556",
    },
    {
        "nombre": "Juan Perez",
        "fecha": "2016-01-02",
        "estatus": "PAGADO",
        "monto": "$550",
    },
    {
        "nombre": "Tiger Nixon",
        "fecha": "2016-01-03",
        "estatus": "PENDIENTE",
        "monto": "$3,556",
    },
    {
        "nombre": "Juan Perez",
        "fecha": "2016-01-01",
        "estatus": "PAGADO",
        "monto": "$550",
    },
    {
        "nombre": "Tiger Nixon",
        "fecha": "2016-01-02",
        "estatus": "PENDIENTE",
        "monto": "$3,556",
    },
    {
        "nombre": "Juan Perez",
        "fecha": "2016-01-03",
        "estatus": "PAGADO",
        "monto": "$550",
    },
    {
        "nombre": "Tiger Nixon",
        "fecha": "2016-01-01",
        "estatus": "PENDIENTE",
        "monto": "$3,556",
    },
    {
        "nombre": "Juan Perez",
        "fecha": "2016-01-01",
        "estatus": "PAGADO",
        "monto": "$550",
    },
    {
        "nombre": "Tiger Nixon",
        "fecha": "2016-01-01",
        "estatus": "PENDIENTE",
        "monto": "$3,556",
    },
    {
        "nombre": "Juan Perez",
        "fecha": "2016-01-01",
        "estatus": "PAGADO",
        "monto": "$550",
    },
    {
        "nombre": "Tiger Nixon",
        "fecha": "2016-01-01",
        "estatus": "PENDIENTE",
        "monto": "$3,556",
    },
    {
        "nombre": "Juan Perez",
        "fecha": "2016-01-01",
        "estatus": "PAGADO",
        "monto": "$550",
    }
];

$(document).ready(function () {
    // $('#example').DataTable( {
    //     "ajax": "data/objects.txt",
    //     "columns": [
    //         { "data": "name" },
    //         { "data": "position" },
    //         { "data": "office" },
    //         { "data": "extn" },
    //         { "data": "start_date" },
    //         { "data": "salary" }
    //     ]
    // } );
    $('#tblTramites').DataTable({
        data: data,
        columns: [
            { data: 'nombre' },
            { data: 'fecha' },
            { data: 'estatus' },
            { data: 'monto' }
        ],
        language: {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }


    });

    $('td').click(function (row) {
        window.location = '/tramite'
    });
});

