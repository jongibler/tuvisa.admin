$( function() {
            $( ".datepicker " ).datepicker();
        } );

function btnPlusServices_click(btn) {
    $('#servicesTable').append('<tr><td> <select class="form-control"> <option>Australia</option> <option>China</option> <option>Vietnam</option> </select> </td> <td> <select class="form-control"> <option>Turista</option> <option>Estudios</option> <option>Negocio</option> </select> </td> <td> <div class="form-group input-group"> <span class="input-group-addon">$</span> <input type="text" class="form-control" placeholder="0.00"> </div> </td> <td><button class="btn btn-danger btn-remove" onclick="$(this).parent().parent().remove(); return false;">X</button></td> </tr>');

};

function btnPlusPerson_click(btn) {
    $('#personsTable').append('<tr> <td><input class="form-control " placeholder="Nombre de la persona... "></td> <td><div class="col-sm-2"><button class="btn btn-danger btn-remove" onclick="$(this).parent().parent().parent().remove(); return false; " ">X</button></div></td> </tr>');
};