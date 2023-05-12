// Ocultar campos
document.querySelector('#id_id_paciente').value = document.querySelector('#pacientes').value

$('#id_id_paciente').hide(); 
$('#id_id_fonoaudilogo').hide();
// document.querySelector('#id_id_paciente').style.display = 'none'; 
// document.querySelector('#id_id_fonoaudilogo').style.display = 'none';

// Validar campos y evitar envío del formulario
var miFormulario = document.getElementById("mi-formulario");
miFormulario.addEventListener("submit", function(event) {
  // Prevenir el envío del formulario
  event.preventDefault();
  
  // Obtener valores de los selects
  var selectG = document.getElementById("id_G").value;
  var selectR = document.getElementById("id_R").value;
  var selectB = document.getElementById("id_B").value;
  var selectA = document.getElementById("id_A").value;
  var selectS = document.getElementById("id_S").value;
  
  // Comprobar que los selects tengan un valor seleccionado
  if (selectG == "null" || selectR == "null" || selectB == "null" || selectA == "null" || selectS == "null") {
    var errorMessage = document.querySelector('#error-message');
    errorMessage.innerHTML = 'Debe seleccionar un valor para todos los campos';  
  } else {
    // Asignar valor de paciente seleccionado al campo id_id_paciente
    document.querySelector('#id_id_paciente').value = document.querySelector('#pacientes').value;
    // Enviar el formulario manualmente
    miFormulario.submit();
  }
});
