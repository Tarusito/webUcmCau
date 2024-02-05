"use strict"
function abrirVentana() {
    $("#ventana").show();
}
function cerrarVentana() {
    $("#ventana").hide();
}
$(function() {
    cerrarVentana();
    $("#mostrarVentana").on("click", abrirVentana);
    $("#ventana span.cerrar").on("click", cerrarVentana);
    $("#cerrar").on("click", cerrarVentana);
});

$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#plantillaModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#tituloComentarioTecnico").empty();
        var array = $(this).get(0).id.split("-");
        modal.find("#textoModal").append($('<p>' + array[3] + '</p>'));
        modal.find("#tituloComentarioTecnico").append($('<h6>' + 'Comentarios del técnico' + '</h6>'));
        modal.find("#textoTecnicoModal").append($('<p>' + array[4] + '</p>'));
        modal.find("#avisoTipoModal").append($('<h4>Aviso ' + array[0] + ': ' + array[1] + '</h4>'));
        modal.find("#fechaModal").append($('<h6>Fecha: ' + array[2] + '</h6>'));
        modal.find("#comunicacionesModal").append($('<h6>'+ array[5] + ': ' + array[6] + '</h6>'));
        modal.find("#perfilUniversitarioModal").append($('<h6>Perfil: '+ array[7] +'</h6>'));
    });
});

$( document ).ready(function() {
    $(".getText").click(function(){
        var modal = $("#avisosHistoricoTecnicoModal");
        modal.find("#textoModal").empty();
        modal.find("#textoTecnicoModal").empty();
        modal.find("#avisoTipoModal").empty();
        modal.find("#fechaModal").empty();
        modal.find("#comunicacionesModal").empty();
        modal.find("#nombreUsuarioAviso").empty();
        modal.find("#perfilUniversitarioModal").empty();
        modal.find("#pieModal").empty();
        var array = $(this).get(0).id.split("-");
        console.log(array);
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

$(document).ready(function(){
    $('#busqueda').on("keyup", function(){
        var buscar = new RegExp($(this).val());
        $.each($(".getText"), function(){
            let lista = $(this).get(0).id.split("-");
            if(!buscar.test(lista[3]))
                $(this).hide();
            else
                $(this).show();
        });
    });
});

$(document).ready(function(){
    $('.miBoton').hide();

    $('.miSelect').change(function(){
        checkFields();
    });

    $('.miTextArea').change(function(){
        checkFields();
    });

    function checkFields() {
        if ($('.miSelect').val() && $('.miTextArea').val()) {
          $('.miBoton').show();
        } else {
          $('.miBoton').hide();
        }
      }
});

$(document).ready(function(){
    $('.miBoton2').hide();

    $('.miSelect2').change(function(){
        checkFields();
    });

    $('.miTextArea2').change(function(){
        checkFields();
    });

    function checkFields() {
        if ($('.miSelect2').val() && $('.miTextArea2').val()) {
          $('.miBoton2').show();
        } else {
          $('.miBoton2').hide();
        }
      }
});

$(document).ready(function(){
    $('.miBoton3').hide();

    $('.miSelect3').change(function(){
        checkFields();
    });

    $('.miTextArea3').change(function(){
        checkFields();
    });

    function checkFields() {
        if ($('.miSelect3').val() && $('.miTextArea3').val()) {
          $('.miBoton3').show();
        } else {
          $('.miBoton3').hide();
        }
      }
});