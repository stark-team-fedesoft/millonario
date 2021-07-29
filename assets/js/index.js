let solucion = ["B","A","C","B","B","C"];
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




const fn1 = () =>{
    respuesta= "A";
    btnOpcion1.className="elegida";
    btnOpcion2.className="botones";
    btnOpcion3.className="botones";
    btnOpcion4.className="botones";

}
const fn2 = () =>{
    respuesta= "B";
    btnOpcion1.className="botones";
    btnOpcion2.className="elegida";
    btnOpcion3.className="botones";
    btnOpcion4.className="botones";
}
const fn3 = () =>{
    respuesta= "C";
    btnOpcion1.className="botones";
    btnOpcion2.className="botones";
    btnOpcion3.className="elegida";
    btnOpcion4.className="botones";
}
const fn4 = () =>{
    respuesta= "D";
    btnOpcion1.className="botones";
    btnOpcion2.className="botones";
    btnOpcion3.className="botones";
    btnOpcion4.className="elegida";
}

const fn5 = () =>{
    btnOpcion1.className="botones";
    btnOpcion2.className="acertada";
    btnOpcion3.className="botones";
    btnOpcion4.className="botones";
}

const fn6 = () =>{
    switch (pregunta) {
        case 1:
            if(respuesta == solucion[0]){
                pregunta = 2;
                texto2.innerHTML="pregunta 2";
                lasPreguntas();
                btnOpcion3.className="botones";
                btnOpcion4.className="botones";
                btnOpcion1.className="botones";
                btnOpcion2.className="botones";

            }
            else{

                alert("haz perdido");
                pregunta = 1;
                texto2.innerHTML="pregunta 1";
                lasPreguntas();
            }
            break;
        case 2:
            if(respuesta == solucion[1]){
                pregunta = 3;
                texto2.innerHTML="pregunta 3";
                lasPreguntas();
            }
            else{

                alert("haz perdido");
                pregunta = 1;
                texto2.innerHTML="pregunta 1";
                lasPreguntas();
            }
            break;
        case 3:
            if(respuesta == solucion[2]){
                pregunta = 4;
                texto2.innerHTML="pregunta 4";
                lasPreguntas();
            }
            else{

                alert("haz perdido");
                pregunta = 1;
                texto2.innerHTML="pregunta 1";
                lasPreguntas();
            }
            break;
        case 4:
            if(respuesta == solucion[3]){
                pregunta = 5;
                texto2.innerHTML="pregunta 4";
                lasPreguntas();
            }
            else{

                alert("haz perdido");
                pregunta = 1;
                texto2.innerHTML="pregunta 1";
                lasPreguntas();
            }
            break;
        default:
            break;

    }
}

const lasPreguntas = () =>{
    if (pregunta==1){
        enunciado.innerHTML="Cuando un carro frena en seco, el sonido que se suele producir es";
        btnOpcion1.innerHTML="A. Un berrido";
        btnOpcion2.innerHTML="B. Un chirrido";
        btnOpcion3.innerHTML="C. Un trino";
        btnOpcion4.innerHTML="D. Un coro";
    }
    else if (pregunta==2) {
        enunciado.innerHTML="El borrador de un lapiz suele estar hecho de";
        btnOpcion1.innerHTML="A. Arcilla";
        btnOpcion2.innerHTML="B. Goma";
        btnOpcion3.innerHTML="C. Metal";
        btnOpcion4.innerHTML="D. Grafito";
    }
    else if (pregunta==3) {
        enunciado.innerHTML="Cual de las siguientes preguntas no es un sinonimo de profesor?";
        btnOpcion1.innerHTML="A. Educador";
        btnOpcion2.innerHTML="B. Pedagogo";
        btnOpcion3.innerHTML="C. Personero";
        btnOpcion4.innerHTML="D. Catedrático";
    }
    else if (pregunta==4) {
        enunciado.innerHTML="Edgar Rice Burroughs es el creador de";
        btnOpcion1.innerHTML="A. Batman";
        btnOpcion2.innerHTML="B. Tarzan";
        btnOpcion3.innerHTML="C. Superman";
        btnOpcion4.innerHTML="D. El Hombre araña";
    }

}



// EJECUCION INICIAL   
lasPreguntas();






btnOpcion1.onclick = function () {
    fn1();
}
btnOpcion2.onclick = function () {
    fn2();
}
btnOpcion3.onclick = function () {
    fn3();
}
btnOpcion4.onclick = function () {
    fn4();
}
btnEnviar.onclick = function () {
    fn5();
}

btnContinuar.onclick = function () {
    fn6();
}