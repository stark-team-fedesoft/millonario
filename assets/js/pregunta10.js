const strQuestions = localStorage.getItem('questions');
const questionsOb  = JSON.parse( strQuestions );
const questionsArr = questionsOb.questions;

let answer = '';

// obtener pregunta10 y 11
const q10 = questionsArr.find( q => q.id === 10 );
const q11 = questionsArr.find( q => q.id === 11 );

// redireccionar a pregunta nueve si no hay acceso
if( !q10.access ) window.location.href = "pregunta9.html";

// enviar pregunta a titulo h2
const enunciado = document.getElementById('enunciado');
const enh2Arr   = enunciado.getElementsByTagName('h2');
const enh2      = enh2Arr[0];
enh2.innerHTML = q10.question;

// obtener elementos de opciones de respuesta
const opcion1 = document.getElementById('opcion1');
const opcion2 = document.getElementById('opcion2');
const opcion3 = document.getElementById('opcion3');
const opcion4 = document.getElementById('opcion4');
// obtener boton de confirmar respuesta
const enviar = document.getElementById('enviar');

// setear opcion y id a cada opcion
opcion1.innerHTML = q10.options[0].answer;
opcion1.setAttribute('data-value', q10.options[0].id);

opcion2.innerHTML = q10.options[1].answer;
opcion2.setAttribute('data-value', q10.options[1].id);

opcion3.innerHTML = q10.options[2].answer;
opcion3.setAttribute('data-value', q10.options[2].id);

opcion4.innerHTML = q10.options[3].answer;
opcion4.setAttribute('data-value', q10.options[3].id);

// setear posible respuesta
const setAnswer = ( val ) => {
    answer = val;
    // limpiar clases de todos los elementos respuesta
    opcion1.className = "col-sm-5 caja respuesta";
    opcion2.className = "col-sm-5 caja respuesta";
    opcion3.className = "col-sm-5 caja respuesta";
    opcion4.className = "col-sm-5 caja respuesta";
}

opcion1.onclick = function( ev ) { setAnswer(ev.target.getAttribute('data-value')); ev.target.className += " bg-primary" }
opcion2.onclick = function( ev ) { setAnswer(ev.target.getAttribute('data-value')); ev.target.className += " bg-primary" }
opcion3.onclick = function( ev ) { setAnswer(ev.target.getAttribute('data-value')); ev.target.className += " bg-primary" }
opcion4.onclick = function( ev ) { setAnswer(ev.target.getAttribute('data-value')); ev.target.className += " bg-primary" }

enviar.onclick = function() {
    if( !answer ){
        alert('Seleccione al menos una respuesta');
        return;
    }

    if( answer !== q10.correctOp ) {
        alert('Respuesta incorrecta');
        return;
    }

    // PENDIEDNTE Aumentar saldo
    // dar acceso a pregunta 11
    q11.access = true;
    // pasar a str obj de preguntas
    const strQuestions = JSON.stringify( questionsOb );
    // guardar obj de preguntas en localStorage
    localStorage.setItem('questions', strQuestions);
    // redireccionar a pregunta 11
    window.location.href = "pregunta11.html";

}
