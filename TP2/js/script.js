
function borrarDatos() {


document.getElementById('firstname').value = '';
document.getElementById('lastname').value = '';
document.getElementById('fnac').value = '';




}


function Cancelar() {

  var conf = confirm("Cancelar encuesta?");
  if (conf === true) {
        borrarDatos();
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
