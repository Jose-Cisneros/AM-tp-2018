



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
        Alert_jq();
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


      var errors = 0;
      $("#encuesta :input").map(function(){
           if( !$(this).val() ) {

                errors++;
          }
      });
      if(errors > 0){
        $("#encuestafail").toggle(1000);
          setTimeout(function(){
        $("#encuestafail").toggle(1000);
      },5000);
      } else {
        $("#encuestaok").toggle(1000);
          setTimeout(function(){
        $("#encuestaok").toggle(1000);
        }, 5000);



      }
      // do the ajax..
      return errors;

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
}

function Alert_jq() {


if (Validar_jq()  === 0) {
  var nom = $('#firstname').val();
  var ap = $('#lastname').val();
  var fnac = $('#fnac').val();
  var comentario = $('#comentario').val();
  var valoracion = $('input[name="valoracion"]:checked').val();
  var sexo = $('input[name="gender"]:checked').val();

  alert("Nombre: " +  nom + " - Apellido: " + ap + " - FNac: " + fnac + " - Coment:"  + comentario + " - Val: " + valoracion + " - Sexo: " + sexo );



}

}
