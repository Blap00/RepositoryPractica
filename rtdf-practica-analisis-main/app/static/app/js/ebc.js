// Verificar los campos al cargar la página y agregar eventos a los checkboxes
document.addEventListener("DOMContentLoaded", function() {
    // Definir los datos de los campos y secciones
    const campos = [
        { checkbox: "part2p1", clase: "resp1" },
        { checkbox: "part2p7", clase: "resp2" },
        { checkbox: "part2p13", clase: "resp3" },
        { checkbox: "part2p19", clase: "resp4" },
        // Agrega aquí más campos y secciones si es necesario
    ];

    // Función para verificar los campos y mostrar u ocultar las secciones correspondientes
    function verificarCampos() {
        for (const campo of campos) {
            const checkbox = document.getElementsByName(campo.checkbox)[0];
            const elementos = document.getElementsByClassName(campo.clase);

            if (checkbox.checked) {
                for (const elemento of elementos) {
                    elemento.style.display = "table-cell";
                }
            } else {
                for (const elemento of elementos) {
                    elemento.style.display = "none";
                }
            }
        }
    }

    // Función para agregar eventos a los checkboxes
    function agregarEventosCheckboxes() {
        for (const campo of campos) {
            const checkbox = document.getElementsByName(campo.checkbox)[0];
            checkbox.addEventListener("change", verificarCampos);
        }
    }

    const campos1 = [
        { radio: "p2p4i", input: "p2p4es" },
        { radio: "p2p4p", input: "p2p4es" },
        { radio: "p2p4c", input: "p2p4es" },
        { radio: "p2p4o", input: "p2p4es" },
        { radio: "p2p10i", input: "p2p10es" },
        { radio: "p2p10p", input: "p2p10es" },
        { radio: "p2p10c", input: "p2p10es" },
        { radio: "p2p10o", input: "p2p10es" },
        { radio: "p2p16i", input: "p2p16es" },
        { radio: "p2p16p", input: "p2p16es" },
        { radio: "p2p16c", input: "p2p16es" },
        { radio: "p2p16o", input: "p2p16es" },
        { radio: "p2p22i", input: "p2p22es" },
        { radio: "p2p22p", input: "p2p22es" },
        { radio: "p2p22c", input: "p2p22es" },
        { radio: "p2p22o", input: "p2p22es" },       
    ];
      
    function verificarCampos1() {
        for (const campo of campos1) {
            const radio = document.getElementById(campo.radio);
            const input = document.getElementById(campo.input);
            
            if (radio.checked && radio.value === "Otro" && radio.id === campo.radio) {
                input.style.display = "block";
                input.disabled = false; // Habilitar el input
            } else if (!radio.checked || radio.value !== "Otro" || radio.id !== campo.radio) { 
                input.style.display = "none";
                input.value = ""; // Limpiar el valor del input
                input.disabled = true; // Deshabilitar el input
            }
        }
    }
      
    // Agregar evento de cambio a los radio buttons
    for (const campo of campos1) {
        const radio = document.getElementById(campo.radio);
        radio.addEventListener('change', verificarCampos1);
    }
      
    // Llamar a la función verificarCampos1 para imprimir los valores chequeados inicialmente
    verificarCampos1();
    verificarCampos();
    agregarEventosCheckboxes();
});

  

//FUNCIONES CHECK
function checkchoice(preginicio, pregfinal, secc) {
    var hasCheckedField = false;
    var selectedValue = 0; // Variable para almacenar la suma de los valores seleccionados
    for (var i = preginicio; i <= pregfinal; i++) {
        var radioButtons = document.getElementsByName(`part${secc}p${i}`);
        var checked = false;
        for (var j = 0; j < radioButtons.length; j++) {
            if (radioButtons[j].checked) {        
                checked = true;
                selectedValue += Number(radioButtons[j].value); // Sumar el valor seleccionado
                break;
            }
        }

        if (!checked) {
            alert("ERROR EN EL GRUPO DE INPUTS RADIO, EN PREGUNTA: " + i);
            hasCheckedField = true;
            break;
        }
    }

    if (!hasCheckedField) {
        return selectedValue; // Devolver la suma de los valores seleccionados
    } else {
        return null; // No se seleccionó ningún valor
    }
}
function checkfirstData(){
    var isanalfab= document.querySelector('#RDA').checked
    var hasEmptyField = false;
    if(document.querySelector('#pacientes').value === "" ){
        alert("ERROR, tienes que tener un dato seleccionado en el Select de Pacientes.")
        hasEmptyField = true;
    } else if(document.querySelector('#pacientes').value === "null"){
        alert("ERROR, tienes que tener un dato seleccionado en el Select de Pacientes.")
        hasEmptyField = true;
    }
    if(!hasEmptyField){
        console.log(isanalfab);
        return true;
    }else{
        return false;
    }
}
function setAnswer(pregIni, pregFin, secc) {
    var isanalfab= document.querySelector('#RDA').checked
    var selectedValue=Number(0);
    var selectTotal=Number(0);
    for (let i = pregIni; i <= pregFin; i++) {
        var bdDate= document.querySelector("#id_part"+secc+"p"+i); //dato de BBDD
        // IDFBBDD_id_part1p1
        var radioButtons = document.getElementsByName(`part${secc}p${i}`); //GET RADIOBUTTONS
        for (var j = 0; j < radioButtons.length; j++) {
            if (radioButtons[j].checked) { //SI ESTA CHEQUEADO
                selectedValue = Number(radioButtons[j].value); // obtener el valor seleccionado
                bdDate.value=selectedValue; //enviar a BBDD
                selectTotal+=Number(radioButtons[j].value);
                break;
            }
        }
    }
    if(!isanalfab){
        if(selectTotal==19){
            return "Actividad comunicativa normal.";
        }
        else if(selectTotal<=18){
            return "Déficit de actividad comunicativa.";
        }
    }
    else{
        if(selectTotal>=17){
            return "Actividad comunicativa normal.";
        }else if(selectTotal<=16){
            return "Déficit de actividad comunicativa.";
        }
    }
}

  
  
value0=document.querySelector('#RDA');
// CUANDO EL DOCUMENTO ESTE LISTO:
$(document).ready(function() {
    // OCULTAR CAMPOS 
    $('#id_id_paciente').hide(); 
    $('#id_id_fonoaudiologo').hide();
    $('#id_timestamp').hide();
    //BOTONES
    $("#cont-form-ebc-1").click(function(){
        // console.log(checkfirstData())
        if(checkfirstData()==true){
            //SET ALL VALUES HIDDEN OR SHOWED
        }else{
            // console.log(checkfirstData)
        }
    })//FIN REGISTRO DATOS
    $("#cont-form-ebc-2").click(function(){
        // console.log("CHECKCHOICES: ")
        if(checkchoice(1,12,1)!=null){
            // HABILITAR EL OTRO FORMULARIO Y ENVIAR PARA LA PARTE SUPERIOR DEL SITIO
        }else{
            // console.log(checkfirstData)
        }
    })//FIN PARTE 1(1-1)
    $("#cont-form-ebc-3").click(function(){
        // console.log("CHECKCHOICES: ")
        if(checkchoice(13,19,1)!=null){
            let setansw=setAnswer(1,19,1)
            var s= document.querySelector("#id_ActComun").value=setansw;
            // HABILITAR EL OTRO FORMULARIO Y ENVIAR PARA LA PARTE SUPERIOR DEL SITIO
        }else{
            // console.log(checkfirstData)
        }
    }) //FIN PARTE 1(1-2), 
    $("#cont-form-ebc-4").click(function(){
        // if(checkchoice(1,24,2)!=null){
        // }
    })


    // REALIZAR BBDD


})