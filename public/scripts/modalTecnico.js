"use strict"
$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#plantillaModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#pieModal").empty();
        modal.find("#perfilUniversitarioModal").empty();
        var array = $(this).get(0).id.split("-");
        let borrar = "Este aviso ha sido eliminado por el técnico " + array[8] + " debido a:\n";
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<textarea name="textoTec">' + borrar + array[4] + '</textarea>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[9] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Borrar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
        
    });
});

$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#verModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#perfilUniversitarioModal").empty();
        modal.find("#pieModal").empty();
        var array = $(this).get(0).id.split("-");
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<textarea name="textoTec">' + array[4] + '</textarea>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[9] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Terminar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
                
    });
});

//modal ver avisostecnico
$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#avisosTecnicoModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#perfilUniversitarioModal").empty();
        modal.find("#pieModal").empty();
        var array = $(this).get(0).id.split("-");
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<textarea name="textoTec">' + array[4] + '</textarea>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        //modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[9] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Terminar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
                
    });
});

//modal borrar avisostecnico

$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#avisosTecnicoBorrarModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#perfilUniversitarioModal").empty();
        modal.find("#pieModal").empty();
        var array = $(this).get(0).id.split("-");
        let borrar = "Este aviso ha sido eliminado por el técnico " + array[8] + " debido a:\n";
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<textarea name="textoTec">'+ borrar  + array[4] + '</textarea>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        //modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[9] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Borrar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
                
    });
});

//modal asignar avisos

$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#asignarAvisosModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#perfilUniversitarioModal").empty();
        modal.find("#pieModal").empty();
        var array = $(this).get(0).id.split("-");
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<textarea name="textoTec">' + array[4] + '</textarea>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Asignar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
                
    });
});
//modal borrar avisos
$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#asignarAvisosBorrarModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#pieModal").empty();
        modal.find("#perfilUniversitarioModal").empty();
        var array = $(this).get(0).id.split("-");
        console.log(array);
        let borrar = "Este aviso ha sido eliminado por el técnico " + array[9] + " debido a:\n";
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<textarea name="textoTec">' + borrar + array[4] + '</textarea>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Borrar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));        
    });
});

$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#verHistoricoModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#perfilUniversitarioModal").empty();
        modal.find("#pieModal").empty();
        var array = $(this).get(0).id.split("-");
        console.log(array)
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#textoTecnicoModal").append($('<p name="textoTec">' + array[4] + '</p>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#nombreUsuarioAviso").append($('<h4>'+ array[7] + '</h4>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[8] +'</h6>'));
        modal.find("#pieModal").append($('<input type="submit" value="Terminar aviso-'+ array[0] +'" id="#terminar" class="btn btn-dark" name="terminarAviso">'+  + '</input>'));
                
    });
});

$(document).ready(function(){
    $('#busqueda').on("keyup", function(){
        var buscar = new RegExp($(this).val());
        if($('#busquedaUsuarios').is(':checked')){
            $.each($(".getText"), function(){
                let lista = $(this).get(0).id.split("-");
                if(!buscar.test(lista[7]))
                    $(this).hide();
                else
                    $(this).show();
            });
        }
        else{
            $.each($(".getText"), function(){
                let lista = $(this).get(0).id.split("-");
                if(!buscar.test(lista[3]))
                    $(this).hide();
                else
                    $(this).show();
            });
        }
    });
});