// questions
const data = {
    "games" : [
        {
            "questions" : [
                // 1
                {
                    "question" : " Cuál de las siguientes etiquetas NO es de bloque block",
                    "content" : [
                        "hr",
                        "p",
                        "h1 ",
                        "span"
                    ],
                    "correct" : 3
                },
                // 2
                {
                    "question" : "La etiqueta strong da máxima importancia al texto que encierra y por defecto se representa:",
                    "content" : [
                        "de color rojo red",
                        "como negrita",
                        "como versalita",
                        "como cursiva"
                    ],
                    "correct" : 1
                },
                // 3
                {
                    "question" : "como se cierra una etiqueta",
                    "content" : [
                        "/H1",
                        "$H1",
                        "&H1",
                        "*H1"
                    ],
                    "correct" : 0
                },
                // 4
                {
                    "question" : "Que etiqueta se usa para crear un botton",
                    "content" : [
                        "P",
                        "H3",
                        "body",
                        "button"
                    ],
                    "correct" : 3
                },
                // 5
                {
                    "question" : "Cual es la estructura del html",
                    "content" : [
                        "html,head,body",
                        "head,body",
                        "body,head",
                        "head,body,html"
                    ],
                    "correct" : 0
                },
                // 6
                {
                    "question" : "Cual de las siguientes etiquetas realizan un salto de linea",
                    "content" : [
                        "br",
                        "p",
                        "td",
                        "body"
                    ],
                    "correct" : 0
                },
                // 7
                {
                    "question" : "para que sirve la etiqueta h1",
                    "content" : [
                        "Para escribir un parrafo",
                        "Para escribir un titulo",
                        "Para insertar una imagen",
                        "Para escribir texto justificado"
                    ],
                    "correct" : 1
                },
                // 8
                {
                    "question" : "Para insertar ina imagen se usa la etiqueta",
                    "content" : [
                        "h1",
                        "div",
                        "img",
                        "title"
                    ],
                    "correct" : 2
                },
                // 9
                {
                    "question" : "Para insertar una imagen se usa la etiqueta",
                    "content" : [
                        "h1",
                        "div",
                        "img",
                        "title"
                    ],
                    "correct" : 3
                }
            ]
        },
        {
            "questions" : [
                // 1
                {
                    "question" : "Instrucción que permite almacenar un valor en una variable.",
                    "content" : [
                        "Leer",
                        "Asignar",
                        "Escribir ",
                        "Si entonces"
                    ],
                    "correct" : 1
                },
                // 2
                {
                    "question" : "Un compilador es:",
                    "content" : [
                        "El que permite traducir un programa escrito en un lenguaje de programación a lenguaje maquina",
                        "Un lenguaje de alto nivel",
                        "Una instruccion",
                        "Una directiva de pre procesamiento"
                    ],
                    "correct" : 0
                },
                // 3
                {
                    "question" : "Las etapas que deben seguirse en la construccion de un programa son:",
                    "content" : [
                        "Analisis, algoritmo, diagrama de flujo, seudocodigo",
                        "Analisis, seudocodigo, prueba de escritorio, implementacion (codificar en un lenguaje de programacion).",
                        "Analisis, algoritmo, prueba de escritorio, implementacion (codificar en un lenguaje de programacion), prueba, instalación y uso del aplicativo.",
                        "Analisis, algoritmo, diagrama de flujo, seudocodigo, prueba de escritorio, implementacion (codificar en un lenguaje de programacion), prueba, instalacion y uso del aplicativo."
                    ],
                    "correct" : 3
                },
                // 4
                {
                    "question" : "El diagrama de flujo es la representación grafica de un algoritmo, donde se visualiza el flujo de los datos y las operaciones (procesos) de un programa. Se caracteriza por:",
                    "content" : [
                        "Que debe ser construido por herramientas muy tecnicas",
                        "Utilizar formas geometricas elementales",
                        "Su sencillez, claridad, uso de normas y simbolos, flexibilidad.",
                        "Requerir un buen análisis del problema"
                    ],
                    "correct" : 2
                },
                // 5
                {
                    "question" : "En caso de presentarse una falla de sintaxis, en el proceso de programacion, se procede a:",
                    "content" : [
                        "Ignorar los errores y ejecutar el programa",
                        "Comprender el mensaje de error que reporta el ambiente de programacion, examinar el codigo del programa para identificar en cual instruccion se encuentra la falla, corregir la falla, probar el programa de nuevo.",
                        "Examinar el codigo del programa para identificar en cual instruccion se encuentra la falla, Comprender el mensaje de error que reporta el ambiente de programacion.",
                        "Examinar el código del programa para identificar en cuál instrucción se encuentra la falla, corregir la falla."
                    ],
                    "correct" : 1
                },
                // 6
                {
                    "question" : "La palabra \"alert\" en el lenguage Javascript, se utiliza cuando:",
                    "content" : [
                        "Se desea mostrar un mensaje al usuario",
                        "Se desea que el usuario ingrese un dato",
                        "Se desea advertir al usuario del proceso que va a realizar",
                        "Se desea extender un cuadro de alerta con un mensaje ya establecio."
                    ],
                    "correct" : 3
                },
                // 7
                {
                    "question" : "Cuál es la forma de sumar un valor en javascript",
                    "content" : [
                        "valor = valor + 1",
                        "valor += 1",
                        "A y B son correctas",
                        "No se puede sumar en Javascript"
                    ],
                    "correct" : 2
                },
                // 8
                {
                    "question" : "Una variable acumulador se utiliza para:",
                    "content" : [
                        "Contar el número de veces que se repite un ciclo",
                        "Guardar el resultado de una operacion",
                        "Guardar datos del programa",
                        "Contar los errores del programa"
                    ],
                    "correct" : 0
                },
                // 9
                {
                    "question" : "Para almacenar un Byte, usted necesita ____ interruptores electrónicos.",
                    "content" : [
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    "correct" : 3
                }
            ]
        },
        {
            "questions" : [
                // 1
                {
                    "question" : "¿JavaScript sirve para?",
                    "content" : [
                        "definir el contenido de la página web",
                        "programar el comportamiento de las páginas web",
                        "hacer consultas en las bases de datos ",
                        "para especificar el diseño de las paginas web"
                    ],
                    "correct" : 1
                },
                // 2
                {
                    "question" : "la manera correcta de agregar archivo javascript",
                    "content" : [
                        "link  href=./assets/js/archivo.js",
                        "script type=text/javascript src=./assets/js/archivo.js",
                        "script type=text/javascript id=./assets/js/archivo.js",
                        "scrip type=text/javascript title=./assets/js/archivo.js"
                    ],
                    "correct" : 1
                },
                // 3
                {
                    "question" : "para que se usa la palabra clave try",
                    "content" : [
                        "para declarar variables",
                        "para declarar una función",
                        "para salir de una función",
                        "para manejar errores en un bloque de declaraciones"
                    ],
                    "correct" : 3
                },
                // 4
                {
                    "question" : "como se realiza un comentario de varias líneas en javascript",
                    "content" : [
                        "#este es un comentario",
                        "/este es un comentario",
                        "$este es un comentario",
                        "este es un comentario"
                    ],
                    "correct" : 1
                },
                // 5
                {
                    "question" : "cual es el resultado del siguiente código Let numero=4 If numero >=3  ,  Numero =10; ",
                    "content" : [
                        "el numero es: 4",
                        "el numero es: 3",
                        "el numero es: 10",
                        "el numero es: 2"
                    ],
                    "correct" : 2
                },
                // 6
                {
                    "question" : "para que sirven los bucles",
                    "content" : [
                        "para ejecutar un bloque de código varias veces",
                        "para comentar código",
                        "para el manejo de errores en los bloques de código",
                        "para declarar variables"
                    ],
                    "correct" : 0
                },
                // 7
                {
                    "question" : "Cuál es la forma de sumar un valor en javascript",
                    "content" : [
                        "valor = valor + 1",
                        "valor += 1",
                        "A y B son correctas",
                        "No se puede sumar en Javascript"
                    ],
                    "correct" : 2
                },
                // 8
                {
                    "question" : "en cual de las siguientes se puede almacenar varios valores en la misma variable",
                    "content" : [
                        "var números=1,2,3",
                        "let números=1,2,3",
                        "const números=[1,2,3]",
                        "números=123"
                    ],
                    "correct" : 2
                },
                // 9
                {
                    "question" : "Para almacenar un Byte, usted necesita ____ interruptores electrónicos.",
                    "content" : [
                        "1",
                        "2",
                        "4",
                        "8"
                    ],
                    "correct" : 3
                }
            ]
        },
        {
            "questions" : [
                // 1
                {
                    "question" : " ¿Cuál de las siguientes afirmaciones es correcta sobre Bootstrap?",
                    "content" : [
                        " El CSS sensible de Bootstrap se ajusta a computadoras de escritorio, tabletas y móviles.",
                        "proporciona una solución limpia y uniforme para crear una interfaz para desarrolladores.",
                        "Contiene componentes incorporados hermosos y funcionales que son fáciles de personalizar.",
                        "Todo lo anterior."
                    ],
                    "correct" : 3
                },
                // 2
                {
                    "question" : "¿Cuál de las siguientes clases diseña una tabla como una bonita tabla básica con rayas en las filas?",
                    "content" : [
                        "table",
                        "table-striped",
                        "table-bordered",
                        "table-hover"
                    ],
                    "correct" : 1
                },
                // 3
                {
                    "question" : "¿Cuál de las siguientes clases se debe agregar a la etiqueta de formulario para que quede horizontal?",
                    "content" : [
                        "horizontal",
                        "form-horizontal",
                        "back-horizontal",
                        "*Ninguno de los anteriores"
                    ],
                    "correct" : 1
                },
                // 4
                {
                    "question" : "¿Cuál de los siguientes estilos de imagen bootstrap hace que toda la imagen sea redonda agregando un radio de borde: 500px?",
                    "content" : [
                        ".img-rounded",
                        ".img-circle",
                        ".img-thumbnail",
                        "Ninguno de los anteriores"
                    ],
                    "correct" : 1
                },
                // 5
                {
                    "question" : "¿Cuál de los siguientes estilos de arranque se utiliza para agregar texto a .navbar?",
                    "content" : [
                        ".navbar-text",
                        ".text",
                        ".form-text",
                        "Ninguno de los anteriores"
                    ],
                    "correct" : 0
                },
                // 6
                {
                    "question" : "¿Cuál de las siguientes afirmaciones es correcta sobre las insignias de Bootstrap?",
                    "content" : [
                        "Las insignias son similares a las etiquetas; la principal diferencia es que las esquinas están más redondeadas.",
                        "Las insignias se utilizan principalmente para resaltar elementos nuevos o no leídos.",
                        "Para usar insignias, simplemente agregue <span class = insignia a los enlaces, navegadores Bootstrap y más.d",
                        "Todo lo anterior."
                    ],
                    "correct" : 3
                },
                // 7
                {
                    "question" : "¿Con cuál de las siguientes formas puede agregar encabezado a un panel?",
                    "content" : [
                        "Use la clase .panel-header para agregar fácilmente un contenedor de encabezado a su panel.",
                        "Use cualquier h1 - h6 con una clase .panel-title para agregar un encabezado con estilo.",
                        "Ambos de los anteriores.",
                        "Ninguno de los anteriores."
                    ],
                    "correct" : 2
                },
                // 8
                {
                    "question" : "¿Cuál de las siguientes afirmaciones es correcta sobre el atributo de datos de animación de datos del complemento de información sobre herramientas?",
                    "content" : [
                        "aplica una transición de atenuación CSS a la información sobre herramientas.",
                        "inserta HTML en la información sobre herramientas. Si es falso, se utilizará el método de texto de jQuery para insertar contenido en el dominio.",
                        "especifica cómo colocar la información sobre herramientas (es decir, arriba | abajo | izquierda | derecha | automático).",
                        "Delegados a los objetivos especificados."
                    ],
                    "correct" : 0
                },
                // 9
                {
                    "question" : "¿Cuál de las siguientes afirmaciones es correcta sobre el atributo de datos de animación de datos del complemento de información sobre herramientas?",
                    "content" : [
                        "aplica una transición de atenuación CSS a la información sobre herramientas.",
                        "inserta HTML en la información sobre herramientas. Si es falso, se utilizará el método de texto de jQuery para insertar contenido en el dominio.",
                        "especifica cómo colocar la información sobre herramientas (es decir, arriba | abajo | izquierda | derecha | automático).",
                        "Delegados a los objetivos especificados."
                    ],
                    "correct" : 0
                }
            ]
        },
        {
            "questions" : [
                // 1
                {
                    "question" : "Que es un repositorio",
                    "content" : [
                        "Es un sitio para hacer copias de seguridad",
                        "Es un espacio para hacer codigo",
                        "Es un motor grafico",
                        "Es un espacio para subir codigo y compartir con otros usuarios"
                    ],
                    "correct" : 3
                },
                // 2
                {
                    "question" : "como se inicia un repositorio",
                    "content" : [
                        "git init",
                        "git main",
                        "git fetch",
                        "git checkout"
                    ],
                    "correct" : 0
                },
                // 3
                {
                    "question" : "que plataforma esta enfocado a subir repositorios",
                    "content" : [
                        "Facebook",
                        "Github",
                        "Drive",
                        "Mongo"
                    ],
                    "correct" : 1
                },
                // 4
                {
                    "question" : "Que comando existe en Git",
                    "content" : [
                        "git ingresar",
                        "git insert",
                        "git push",
                        "git deletes"
                    ],
                    "correct" : 2
                },
                // 5
                {
                    "question" : "que comando se usa para crear una rama nueva",
                    "content" : [
                        "git branch stark",
                        "git init stark",
                        "git pull stark",
                        "git checkout stark"
                    ],
                    "correct" : 0
                },
                // 6
                {
                    "question" : "como se llama la rama principal en git",
                    "content" : [
                        "start",
                        "main",
                        "init",
                        "Todo los anterior."
                    ],
                    "correct" : 1
                },
                // 7
                {
                    "question" : "Para que sirve la funcion Git push",
                    "content" : [
                        "Salir del repositorio",
                        "Iniciar el repositorio",
                        "Subir archivos a plataforma github",
                        "eliminar archivos"
                    ],
                    "correct" : 2
                },
                // 8
                {
                    "question" : "Para que sirve la funcion Git init",
                    "content" : [
                        "Salir del repositorio",
                        "Iniciar el repositorio",
                        "Subir archivos a plataforma github",
                        "eliminar archivos"
                    ],
                    "correct" : 1
                },
                // 9
                {
                    "question" : "¿Cuál de las siguientes afirmaciones es correcta sobre el atributo de datos de animación de datos del complemento de información sobre herramientas?",
                    "content" : [
                        "aplica una transición de atenuación CSS a la información sobre herramientas.",
                        "inserta HTML en la información sobre herramientas. Si es falso, se utilizará el método de texto de jQuery para insertar contenido en el dominio.",
                        "especifica cómo colocar la información sobre herramientas (es decir, arriba | abajo | izquierda | derecha | automático).",
                        "Delegados a los objetivos especificados."
                    ],
                    "correct" : 0
                }
            ]
        }
    ]
}
// DOM els
const preStart = document.getElementById('pre-start');
const start    = document.getElementById('start');
const game     = document.getElementById('game');
const gameOverEl = document.getElementById('game-over');
const question = document.getElementById('question');
const answer1  = document.getElementById('answer-one');
const answer2  = document.getElementById('answer-two');
const answer3  = document.getElementById('answer-three');
const answer4  = document.getElementById('answer-four');

const startSound = (id, loop) => {
	const soundHandle = document.getElementById(id);
    // canción de fondo repetir hasta el infinuito
	if(loop) soundHandle.setAttribute('loop', loop);
	soundHandle.play();
}

let levelGame         = 0;
let topLevel          = 0;
let challengeSelected = 0;

const setGame = ( dataGame=[], level=0 ) => {
    levelGame = level;
    topLevel = dataGame.questions.length - 1;

    if( levelGame === topLevel ) {
        gameOverEl.innerHTML = `Ganaste ${localStorage.getItem('name')}`;
        gameOverEl.style.display = 'block';
        game.style.display     = 'none';
        localStorage.removeItem('name');
        localStorage.removeItem('challenge');
        return;
    }
    
    setQuestion(dataGame.questions[level].question);
    setAnswers(dataGame.questions[level].content, level);
}

const setQuestion = ( q='' ) => {
    let string = q;
    // question.innerHTML = decodeURIComponent( escape( string ) );
    question.innerHTML =  string;
}

const setAnswers = ( answers=[], level)  => {
    // answer 1
    answer1.setAttribute('level', level);
    answer1.setAttribute('answer', 0);
    const spans1 = answer1.getElementsByTagName('span');
    const span1 = spans1[1];
    // span1.innerHTML = decodeURIComponent( escape( answers[0] ));
    span1.innerHTML = answers[0];

    // answer 2
    answer2.setAttribute('level', level);
    answer2.setAttribute('answer', 1);
    const spans2 = answer2.getElementsByTagName('span');
    const span2 = spans2[1];
    // span2.innerHTML = decodeURIComponent( escape( answers[1] ));
    span2.innerHTML = answers[1];

    // answer 3
    answer3.setAttribute('level', level);
    answer3.setAttribute('answer', 2);
    const spans3 = answer3.getElementsByTagName('span');
    const span3 = spans3[1];
    // span3.innerHTML = decodeURIComponent( escape(  answers[2] ));
    span3.innerHTML = answers[2];

    // answer 4
    answer4.setAttribute('level', level);
    answer4.setAttribute('answer', 3);
    const spans4 = answer4.getElementsByTagName('span');
    const span4 = spans4[1];
    // span4.innerHTML = decodeURIComponent( escape( answers[3] ));
    span4.innerHTML = answers[3];
}

const evaluateAnswer = ( answer ) => {
    const level     = parseInt( answer.getAttribute('level') );
    const ans       = parseInt( answer.getAttribute('answer') );
    const qSelected = data.games[ challengeSelected ].questions[level];

    if( qSelected.correct === ans ) nextLevel( answer );
    else gameOver( answer );
}

const gameOver = ( answer ) => {
    startSound('wrongsound', 0);
    answer.style.backgroundColor = 'red';
    gameOverEl.innerHTML = `Perdiste ${localStorage.getItem('name')}`;

    setTimeout(() => {
        gameOverEl.style.display = 'block';
        game.style.display     = 'none';
    }, 1000);

    localStorage.removeItem('name');
    localStorage.removeItem('challenge');
}

const nextLevel = ( answer ) => {
    const level = parseInt( answer.getAttribute('level') );
    startSound('rightsound', 0);
    answer.style.backgroundColor = 'green';

    setTimeout(() => {
        setGame(data.games[challengeSelected], level + 1);
        answer.style.backgroundColor = 'transparent';
    }, 1000);

    document.getElementById(`price-${ level + 1 }`).className = "active";
}

preStart.style.display = 'block';

const name_     = localStorage.getItem('name');
const challenge = localStorage.getItem('challenge');

if( !name_ || !challenge ) window.location.href = "index.html";

start.onclick = function() {
    // reduscir uno porque es un arreglo
    let index = parseInt( challenge ) - 1;
    challengeSelected = index;

    setGame(data.games[index], 0);

    preStart.style.display = 'none';
    startSound('background', true);
    game.style.display = 'block';
}

answer1.onclick = () => { evaluateAnswer(answer1) }
answer2.onclick = () => { evaluateAnswer(answer2) }
answer3.onclick = () => { evaluateAnswer(answer3) }
answer4.onclick = () => { evaluateAnswer(answer4) }
