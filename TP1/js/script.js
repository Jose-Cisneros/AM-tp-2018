



function borrarDatos() {

document.getElementById('firstname').value = '';
document.getElementById('lastname').value = '';
document.getElementById('fnac').value = '';

}

function borrarDatos_jq() {

$('#firstname').val('');
$('#lastname').val('');
$('#fnac').val('');
$('#comentario').val('');


}

function Cancelar() {

  var conf = confirm("Cancelar encuesta?");
  if (conf === true) {
        borrarDatos_jq();
      } else {
        Alert();
      }

  }








function Validar() {
    var nom = document.getElementById('firstname').value;
    var ap = document.getElementById('lastname').value;
    var fnac = document.getElementById('fnac').value;
    var comentario = document.getElementById('comentario').value;


    if (nom == "" || ap == "" || fnac == "" || comentario == "") {
        alert("Complete todos los campos");
        return false;
    } else {
      return true;
    }


}

function Validar_jq() {


  var nom = $('#firstname').val();
  var ap = $('#lastname').val();
  var fnac = $('#fnac').val();
  var comentario = $('#comentario').val();
  var valoracion = $('input[name="valoracion"]:checked').val();
  var sexo = $('input[name="gender"]:checked').val();


  $('#encuesta input').blur(function() {
     if(!$.trim(this.value).length) { // zero-length string AFTER a trim
            $(this).parents('p').addClass('warning');
     }
});

}


function Alert() {
  if (Validar() === true) {
    var nom = document.getElementById('firstname').value;
    var ap = document.getElementById('lastname').value;
    var fnac = document.getElementById('fnac').value;
    var comentario = document.getElementById('comentario').value;
    var valoracion = document.querySelector('input[name="valoracion"]:checked').value;
    var sexo = document.querySelector('input[name="gender"]:checked').value;

    alert("Nombre: " +  nom + " - Apellido: " + ap + " - FNac: " + fnac + " - Coment:"  + comentario + " - Val: " + valoracion + " - Sexo: " + sexo );


  }

function Alert_jq() {

  var nom = $('#firstname').val();
  var ap = $('#lastname').val();
  var fnac = $('#fnac').val();
  var comentario = $('#comentario').val();
  var valoracion = $('input[name="valoracion"]:checked').val();
  var sexo = $('input[name="gender"]:checked').val();

  alert("Nombre: " +  nom + " - Apellido: " + ap + " - FNac: " + fnac + " - Coment:"  + comentario + " - Val: " + valoracion + " - Sexo: " + sexo );




}





}
