
// Ocultar campos
document.querySelector('#id_id_paciente').value = document.querySelector('#pacientes').value
$('#id_id_paciente').hide(); 
$('#id_id_fonoaudilogo').hide();

// Validar campos y evitar envío del formulario
var miFormulario = document.getElementById("mi-formulario");
miFormulario.addEventListener("submit", function(event) {
  // Prevenir el envío del formulario
  event.preventDefault();
  //REALIZAR VALIDACIONES:
//   if(){

//   }
  // Asignar valor de paciente seleccionado al campo id_id_paciente
  document.querySelector('#id_id_paciente').value = document.querySelector('#pacientes').value;
  // Enviar el formulario manualmente
  miFormulario.submit();
}); 