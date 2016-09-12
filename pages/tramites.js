$(document).ready(function () {

    //[{"_id":"57d7091c8baa081b84a6cc2e","fechaEntrega":"2016-09-18T23:00:00.000Z","contacto":"22222","totalDebe":3800,"totalCosto":4000},

    $.getJSON("api/tramite/todos", function (data) {

        $('#tblTramites').DataTable({
            data: data,
            columns: [
                { data: 'numero' },
                { data: 'contacto' },
                { data: 'fechaEntrega' },
                { data: 'estatus' },
                { data: 'totalCosto' },
                { data: 'totalDebe' }
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

        $('#tblTramites td').click(function () {
            var clickedRow = $(this).parent();
            var numberCell = $('td', clickedRow)[0];
            window.location = '/tramite/' + numberCell.innerText;

        });

    });


});

