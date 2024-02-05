$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#borrarUsuarioModal");
        modal.find("#pie").empty();
        var id = $(this).get(0).id.split("-");
        modal.find("#pie").append($('<input type="submit" value="Borrar usuario - '+ id[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
                
    });
});

$(document).ready(function(){
    $('#busqueda').on("keyup", function(){
        var buscar = new RegExp($(this).val());
        if($('#busquedaUsuarios').is(':checked')){
            $.each($(".getText"), function(){
                let lista = $(this).get(0).id.split("-");
                if(!buscar.test(lista[2]))
                    $(this).hide();
                else
                    $(this).show();
            });
        }
        else{
            $.each($(".getText"), function(){
                let lista = $(this).get(0).id.split("-");
                if(!buscar.test(lista[1]))
                    $(this).hide();
                else
                    $(this).show();
            });
        }
    });
});