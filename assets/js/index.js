let solucion = ["B", "A", "C", "B", "B", "C"];
let texto = document.getElementById("texto");
let texto2 = document.getElementById("texto2");
let enunciado = document.getElementById("enunciado");
let btnOpcion1 = document.getElementById("opcion1");
let btnOpcion2 = document.getElementById("opcion2");
let btnOpcion3 = document.getElementById("opcion3");
let btnOpcion4 = document.getElementById("opcion4");
let btnEnviar = document.getElementById("enviar");
let btnContinuar = document.getElementById("continuar");
let acierto = true;
let pregunta = 1;
let respuesta = null;

const fn1 = () => {
  respuesta = "A";
  btnOpcion1.className = "elegida";
  btnOpcion2.className = "botones";
  btnOpcion3.className = "botones";
  btnOpcion4.className = "botones";
};
const fn2 = () => {
  respuesta = "B";
  btnOpcion1.className = "botones";
  btnOpcion2.className = "elegida";
  btnOpcion3.className = "botones";
  btnOpcion4.className = "botones";
};
const fn3 = () => {
  respuesta = "C";
  btnOpcion1.className = "botones";
  btnOpcion2.className = "botones";
  btnOpcion3.className = "elegida";
  btnOpcion4.className = "botones";
};
const fn4 = () => {
  respuesta = "D";
  btnOpcion1.className = "botones";
  btnOpcion2.className = "botones";
  btnOpcion3.className = "botones";
  btnOpcion4.className = "elegida";
};

const fn5 = () => {
  if (btnOpcion1.className == "elegida") {
    if (respuesta == solucion[pregunta - 1]) {
      btnOpcion1.className = "acertada";
    } else {
      btnOpcion1.className = "fallada";
    }
  }

  if (btnOpcion2.className == "elegida") {
    if (respuesta == solucion[pregunta - 1]) {
      btnOpcion2.className = "acertada";
    } else {
      btnOpcion2.className = "fallada";
    }
  }

  if (btnOpcion3.className == "elegida") {
    if (respuesta == solucion[pregunta - 1]) {
      btnOpcion3.className = "acertada";
    } else {
      btnOpcion3.className = "fallada";
    }
  }

  if (btnOpcion4.className == "elegida") {
    if (respuesta == solucion[pregunta - 1]) {
      btnOpcion4.className = "acertada";
    } else {
      btnOpcion4.className = "fallada";
    }
  }
};

const fn6 = () => {
  switch (pregunta) {
    case 1:
      if (respuesta == solucion[0]) {
        pregunta = 2;
        texto2.innerHTML = "pregunta 2";
        lasPreguntas();
      } else {
        alert("haz perdido");
        pregunta = 1;
        texto2.innerHTML = "pregunta 1";
        lasPreguntas();
      }
      break;
    case 2:
      if (respuesta == solucion[1]) {
        pregunta = 3;
        texto2.innerHTML = "pregunta 3";
        lasPreguntas();
      } else {
        alert("haz perdido");
        pregunta = 1;
        texto2.innerHTML = "pregunta 1";
        lasPreguntas();
      }
      break;
    case 3:
      if (respuesta == solucion[2]) {
        pregunta = 4;
        texto2.innerHTML = "pregunta 4";
        lasPreguntas();
      } else {
        alert("haz perdido");
        pregunta = 1;
        texto2.innerHTML = "pregunta 1";
        lasPreguntas();
      }
      break;
    case 4:
      if (respuesta == solucion[3]) {
        pregunta = 5;
        texto2.innerHTML = "pregunta 4";
        lasPreguntas();
      } else {
        alert("haz perdido");
        pregunta = 1;
        texto2.innerHTML = "pregunta 1";
        lasPreguntas();
      }
      break;
    default:
      break;
  }
};

const lasPreguntas = () => {
  btnOpcion3.className = "botones";
  btnOpcion4.className = "botones";
  btnOpcion1.className = "botones";
  btnOpcion2.className = "botones";

  if (pregunta == 1) {
    enunciado.innerHTML =
      "¿Cuál es el lugar más frío de la tierra?";
    btnOpcion1.innerHTML = "A. La costa atlantica";
    btnOpcion2.innerHTML = "B. Bogotá";
    btnOpcion3.innerHTML = "C. La antartida";
    btnOpcion4.innerHTML = "D. Groenlandia";
  } else if (pregunta == 2) {
    enunciado.innerHTML = "¿Cómo se llama la capital de Mongolia?";
    btnOpcion1.innerHTML = "A. Santorrini";
    btnOpcion2.innerHTML = "B. Ulan Bator";
    btnOpcion3.innerHTML = "C. Siloe";
    btnOpcion4.innerHTML = "D. Cerete";
  } else if (pregunta == 3) {
    enunciado.innerHTML ="¿Cuál es el río más largo del mundo?";
    btnOpcion1.innerHTML = "A. Nilo";
    btnOpcion2.innerHTML = "B. Amazonas";
    btnOpcion3.innerHTML = "C. Misisipi";
    btnOpcion4.innerHTML = "D. Yangtze";
  } else if (pregunta == 4) {
    enunciado.innerHTML = "¿Qué cantidad de huesos en el cuerpo humano adulto?";
    btnOpcion1.innerHTML = "A. 208";
    btnOpcion2.innerHTML = "B. 198";
    btnOpcion3.innerHTML = "C. 206";
    btnOpcion4.innerHTML = "D. 801";
} else if (pregunta == 5) {
    enunciado.innerHTML = "¿Quién pintó “la última cena”?";
    btnOpcion1.innerHTML = "A. Miguel Angel";
    btnOpcion2.innerHTML = "B. Picasso";
    btnOpcion3.innerHTML = "C. Leonardo Da vinci";
    btnOpcion4.innerHTML = "D. Gabriel Garcia Marquez";
} else if (pregunta == 6) {
    enunciado.innerHTML = "¿Qué cantidad de huesos en el cuerpo humano adulto?";
    btnOpcion1.innerHTML = "A. 208";
    btnOpcion2.innerHTML = "B. 198";
    btnOpcion3.innerHTML = "C. 206";
    btnOpcion4.innerHTML = "D. 801";
} else if (pregunta == 7) {
    enunciado.innerHTML = "¿Qué cantidad de huesos en el cuerpo humano adulto?";
    btnOpcion1.innerHTML = "A. 208";
    btnOpcion2.innerHTML = "B. 198";
    btnOpcion3.innerHTML = "C. 206";
    btnOpcion4.innerHTML = "D. 801";
} else if (pregunta == 8) {
    enunciado.innerHTML = "¿Qué cantidad de huesos en el cuerpo humano adulto?";
    btnOpcion1.innerHTML = "A. 208";
    btnOpcion2.innerHTML = "B. 198";
    btnOpcion3.innerHTML = "C. 206";
    btnOpcion4.innerHTML = "D. 801";
  }


};

// EJECUCION INICIAL
lasPreguntas();

btnOpcion1.onclick = function () {
  fn1();
};
btnOpcion2.onclick = function () {
  fn2();
};
btnOpcion3.onclick = function () {
  fn3();
};
btnOpcion4.onclick = function () {
  fn4();
};
btnEnviar.onclick = function () {
  fn5();
};

btnContinuar.onclick = function () {
  fn6();
};
