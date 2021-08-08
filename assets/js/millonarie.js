// questions
const data = {
    "games" : [
        {
            "questions" : [
                {
                    "question" : "In what children's game are participants chased by someone designated \"It\"?",
                    "content" : [
                        "Tag",
                        "Simon Says",
                        "Charades",
                        "Hopscotch"
                    ],
                    "correct" : 0
                },
                {
                    "question" : "On a radio, stations are changed by using what control?",
                    "content" : [
                        "Tuning",
                        "Volume",
                        "Bass",
                        "Treble"
                    ],
                    "correct" : 0
                },
                {
                    "question" : "Which material is most dense?",
                    "content" : [
                        "Silver",
                        "Styrofoam",
                        "Butter",
                        "Gold"
                    ],
                    "correct" : 3
                },
                {
                    "question" : "Which state in the United States is largest by area?",
                    "content" : [
                        "Alaska",
                        "California",
                        "Texas",
                        "Hawaii"
                    ],
                    "correct" : 0
                },
                {
                    "question" : "What is Aurora Borealis commonly known as?",
                    "content" : [
                        "Fairy Dust",
                        "Northern Lights",
                        "Book of ages",
                        "a Game of Thrones main character"
                    ],
                    "correct" : 1
                },
                {
                    "correct": 3,
                    "content": [
                        "developed the telescope",
                        "discovered four satellites of Jupiter",
                        "discovered that the movement of pendulum produces a regular time measurement",
                        "All of the above"
                    ],
                    "question": "Galileo was an Italian astronomer who"
                },
                {
                    "correct": 3,
                    "content": [
                        "the infrared light kills bacteria in the body",
                        "resistance power increases",
                        "the pigment cells in the skin get stimulated and produce a healthy tan",
                        "the ultraviolet rays convert skin oil into Vitamin D"
                    ],
                    "question": "Exposure to sunlight helps a person improve his health because"
                },
                {
                    "correct": 0,
                    "content": [
                        "a club or a local sport association for remarkable achievements",
                        "amateur athlete, not necessarily an Olympian",
                        "National Olympic Committee for outstanding work",
                        "None of the above"
                    ],
                    "question": "Sir Thomas Fearnley Cup is awarded to"
                },
                {
                    "correct": 1,
                    "content": [
                        "1968",
                        "1929",
                        "1901",
                        "1965"
                    ],
                    "question": "Oscar Awards were instituted in"
                },
                {
                    "correct": 2,
                    "content": [
                        "1998",
                        "1989",
                        "1979",
                        "1800"
                    ],
                    "question": "When did Margaret Thatcher became the first female Prime Minister of Britain?"
                },
                {
                    "correct": 2,
                    "content": [
                        "15th April",
                        "12th December",
                        "1st May",
                        "1st August"
                    ],
                    "question": "When is the International Workers' Day?"
                },
                {
                    "correct": 2,
                    "content": [
                        "1962",
                        "1963",
                        "1964",
                        "1965"
                    ],
                    "question": "When did China test their first atomic device?"
                },
                {
                    "correct": 3,
                    "content": [
                        "1904",
                        "1905",
                        "1908",
                        "1909"
                    ],
                    "question": "When did Commander Robert Peary discover the North Pole?"
                },
                {
                    "correct": 0,
                    "content": [
                        "819/sq. km",
                        "602/sq. km",
                        "415/sq. km",
                        "500/sq. km"
                    ],
                    "question": "What is the population density of Kerala?"
                },
                {
                    "correct": 1,
                    "content": [
                        "4 km",
                        "25 km",
                        "500 m to 9 km",
                        "150 km"
                    ],
                    "question": "What is the range of missile 'Akash'?"
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
                },
                // 10
                {
                    "question" : "De lo siguiente ¿que puede clasificarse como dato?.",
                    "content" : [
                        "Voz",
                        "Video",
                        "Audio",
                        "Todas las anteriores"
                    ],
                    "correct" : 3
                },
                // 11
                {
                    "question" : "La minima unidad de almacenamiento en un sistema de computo se denomina...",
                    "content" : [
                        "Word",
                        "Bit",
                        "Ascii",
                        "Byte"
                    ],
                    "correct" : 3
                },
                // 12
                {
                    "question" : "La información en los sistemas telegráficos se comunicaba por código...",
                    "content" : [
                        "Código Ascci",
                        "Código Morse",
                        "Bit",
                        "Hertz"
                    ],
                    "correct" : 1
                },
                // 13
                {
                    "question" : "La representación gráfica de un algorítmo se denomina...",
                    "content" : [
                        "Diagrama de Flujo",
                        "Diagrama de Venn",
                        "Pseudocódigo",
                        "Prueba de escritorio"
                    ],
                    "correct" : 0
                },
                // 14
                {
                    "question" : "¿Qué es una tabla de la verdad?",
                    "content" : [
                        "Es una tabla que muestra el valor de verdad de una proposició compuesta",
                        "Es un elemento para crear tablas en la sintaxis de HTML",
                        "Es una palabre reservada de JavaScript",
                        "Ninguna de las anteriores"
                    ],
                    "correct" : 0
                },
                // 15
                {
                    "question" : "¿Qué es un arreglo de datos?",
                    "content" : [
                        "Es un archivo de música",
                        "Sirve para comprimir objetos en formato ZIP",
                        "Es un vector ó matriz donde se almacena conjuntamente una serie de elementos del mismo tipo",
                        "Es un comando de linux usado para listar archivos en la consola"
                    ],
                    "correct" : 2
                },
            ]
        },
        {
            "questions" : [
                {
                    "question" : "An albino gorilla usually has what color fur?",
                    "content" : [
                        "Brown",
                        "Black",
                        "White",
                        "Golden"
                    ],
                    "correct" : 2
                },
                {
                    "question" : "When you enter a situation without a definite plan of action, you are said to be \"playing it by\" what?",
                    "content" : [
                        "Fingertips",
                        "Ear",
                        "Nose",
                        "Mouth"
                    ],
                    "correct" : 1
                },
                {
                    "question" : "What is commonly known as the \"Emerald City\" in the United States?",
                    "content" : [
                        "Palos Verdes, CA",
                        "Seattle, WA",
                        "New York, NY",
                        "Dallas, TX"
                    ],
                    "correct" : 1
                },
                {
                    "question" : "What is the national emblem of Canada?",
                    "content" : [
                        "Maple Leaf",
                        "Brown Bear",
                        "Maple Syrup",
                        "Waffle"
                    ],
                    "correct" : 0
                },
                {
                    "question" : "What is the name of the largest freshwater lake in the world?",
                    "content" : [
                        "Lake Union",
                        "Lake Superior",
                        "Lake Largest",
                        "Lake Goodwin"
                    ],
                    "correct" : 0
                },
                {
                    "correct": 2,
                    "content": [
                        "Birds",
                        "Cell formation",
                        "Relation between organisms and their environment",
                        "Tissues"
                    ],
                    "question": "Ecology deals with"
                },
                {
                    "correct": 0,
                    "content": [
                        "Earth's gravitational pull",
                        "Moon's gravitational pull",
                        "Centripetal force due to the earth's rotation",
                        "Pressure of the atmosphere"
                    ],
                    "question": "The escape velocity of a rocket fired from the earth towards the moon is the velocity required to overcome"
                },
                {
                    "correct": 3,
                    "content": [
                        "was a great Italian painter, sculptor and architect",
                        "got universal fame form his masterpiece \"Mona lisa\"",
                        "drew models of organs such as the heart, lungs and womb",
                        "All of the above"
                    ],
                    "question": "Leonardo da Vinci"
                },
                {
                    "correct": 2,
                    "content": [
                        "2000",
                        "2001",
                        "2002",
                        "2003"
                    ],
                    "question": "Hamid Karzai was chosen president of Afghanistan in"
                },
                {
                    "correct": 0,
                    "content": [
                        "New York, USA",
                        "Haque (Netherlands)",
                        "Geneva",
                        "Paris"
                    ],
                    "question": "The headquarters of UN are situated at"
                },
                {
                    "correct": 2,
                    "content": [
                        "friction between the earth and the bus",
                        "friction between the passengers and the earth",
                        "inertia of the passengers",
                        "inertia of the bus"
                    ],
                    "question": "When a moving bus stops suddenly, the passenger are pushed forward because of the"
                },
                {
                    "correct": 1,
                    "content": [
                        "1908 at London",
                        "1980 at Moscow",
                        "1936 at Berlin",
                        "1924 at Paris"
                    ],
                    "question": "When and where was hockey introduced for women in Olympics?"
                },
                {
                    "correct": 0,
                    "content": [
                        "increase the alkalinity of the soil",
                        "increase the acidity of the soil",
                        "restore nitrates to the soil",
                        "make the soil more porous"
                    ],
                    "question": "Lime is sometimes applied to soil in order to"
                },
                {
                    "correct": 1,
                    "content": [
                        "discovered Greenland",
                        "travelled through China, India and other parts of Asia",
                        "travelled round the cape of Good Hope",
                        "discovered Canada"
                    ],
                    "question": "Marco Polo"
                },
                {
                    "correct": 1,
                    "content": [
                        "Guruji",
                        "Man of Peace",
                        "Punjab Kesari",
                        "Mahamana"
                    ],
                    "question": "Lal Bahadur Shastri is also known as"
                }
            ]
        },
        {
            "questions" : [
                {
                    "question" : "Which of the following consumer goods is the Gerber Products Co. best known for?",
                    "content" : [
                        "Potato chips",
                        "Fine wines",
                        "Chewing gum",
                        "Baby Food"
                    ],
                    "correct" : 3
                },
                {
                    "question" : "In which of these household appliances would you find a lint screen?",
                    "content" : [
                        "Dishwasher",
                        "Microwave oven",
                        "Clothes dryer",
                        "Trash compactor"
                    ],
                    "correct" : 2
                },
                {
                    "question" : "What are the three primary colors?",
                    "content" : [
                        "Red, green, blue",
                        "Magenta, pink, cyan",
                        "Yellow, salmon, brown",
                        "White, grey, black"
                    ],
                    "correct" : 0
                },
                {
                    "question" : "In aviation, what does UFO stand for?",
                    "content" : [
                        "Unified Flying Object",
                        "Unitary Flinging Obsession",
                        "United Flag Opposition",
                        "Unidentified Flying Object"
                    ],
                    "correct" : 3
                },
                {
                    "question" : "In aviation, what does UFO stand for?",
                    "content" : [
                        "Unified Flying Object",
                        "Unitary Flinging Obsession",
                        "United Flag Opposition",
                        "Unidentified Flying Object"
                    ],
                    "correct" : 3
                },
                {
                    "correct": 0,
                    "content": [
                        "low melting point",
                        "high resistance",
                        "high melting point",
                        "low specific heat"
                    ],
                    "question": "For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having"
                },
                {
                    "correct": 3,
                    "content": [
                        "slowing down of economic activity over a limited period",
                        "period during which unemployment may rise and demand and output may fall, leading to slump in trade",
                        "period that results from accumulation of unsold goods, owing to fall in demand",
                        "All of the above"
                    ],
                    "question": "Recession is"
                },
                {
                    "correct": 3,
                    "content": [
                        "Nagaland",
                        "Arunachal Pradesh",
                        "Assam",
                        "All of the above"
                    ],
                    "question": "Guwahati High Court is the judicature of"
                },
                {
                    "correct": 0,
                    "content": [
                        "Orissa",
                        "Tamil nadu",
                        "Andhra Pradesh",
                        "Kerala"
                    ],
                    "question": "Heavy Water Project (Talcher) and Fertilizer plant (Paradeep) are famous industries of"
                },
                {
                    "correct": 0,
                    "content": [
                        "the amount of moisture it can hold decreases",
                        "its absolute humidity decreases",
                        "its relative humidity remains constant",
                        "its absolute humidity increases"
                    ],
                    "question": "When a given amount of air is cooled"
                },
                {
                    "correct": 2,
                    "content": [
                        "1789 AD",
                        "1798 AD",
                        "1792 AD",
                        "1729 AD"
                    ],
                    "question": "When did France became Republic?"
                },
                {
                    "correct": 2,
                    "content": [
                        "Group A only",
                        "Group B only",
                        "Group A and O",
                        "Group AB only"
                    ],
                    "question": "Of the blood groups A, B, AB and O, which one is transfused into a person whose blood group is A?"
                },
                {
                    "correct": 0,
                    "content": [
                        "coins",
                        "numbers",
                        "stamps",
                        "space"
                    ],
                    "question": "Numismatics is the study of"
                },
                {
                    "correct": 2,
                    "content": [
                        "a classed unique society",
                        "a united society",
                        "a classed society",
                        "None of the above"
                    ],
                    "question": "Karl Marx's ideology advocated"
                },
                {
                    "correct": 0,
                    "content": [
                        "Maharashtra",
                        "Rajasthan",
                        "Madhya Pradesh",
                        "Himachal Pradesh"
                    ],
                    "question": "Mahabaleshwar is located in"
                }
            ]
        },
        {
            "questions" : [
                {
                    "question" : "What kind of animal traditionally lives in a sty?",
                    "content" : [
                        "Cow",
                        "Pig",
                        "Fox",
                        "Teenager"
                    ],
                    "correct" : 1
                },
                {
                    "question" : "The EPA urges people to produce less waste by engaging in efforts to reduce, reuse and what?",
                    "content" : [
                        "Recycle",
                        "Rewrap",
                        "Repossess",
                        "Retire"
                    ],
                    "correct" : 0
                },
                {
                    "question" : "What is the second most common gas in the air?",
                    "content" : [
                        "Nitrogen",
                        "Oxygen",
                        "Water",
                        "Helium"
                    ],
                    "correct" : 1
                },
                {
                    "question" : "Which month has only 28 days (unless it's a leap year)?",
                    "content" : [
                        "March",
                        "September",
                        "June",
                        "Feburary"
                    ],
                    "correct" : 3
                },
                {
                    "correct": 1,
                    "content": [
                        "give",
                        "prove",
                        "both",
                        "None of the above"
                    ],
                    "question": "Pythagoras was first to ____ the universal validity of geometrical theorem."
                },
                {
                    "correct": 0,
                    "content": [
                        "George Washington",
                        "Bill Clinton",
                        "George Bush",
                        "None of the above"
                    ],
                    "question": "The American General who led the revolt against the British and declared American independence was"
                },
                {
                    "correct": 0,
                    "content": [
                        "1986 at Athens",
                        "1988 at Seoul",
                        "1924 at St. Louis",
                        "1908 at London"
                    ],
                    "question": "When and where was weightlifting introduced in Olympics?"
                },
                {
                    "correct": 1,
                    "content": [
                        "Junagarh, Gujarat",
                        "Diphu, Assam",
                        "Kohima, Nagaland",
                        "Gangtok, Sikkim"
                    ],
                    "question": "Garampani sanctuary is located at"
                },
                {
                    "correct": 3,
                    "content": [
                        "states that no one was to be imprisoned without a writ or warrant stating the charge against him",
                        "provided facilities to a prisoner to obtain either speedy trial or release in bail",
                        "safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders",
                        "All of the above"
                    ],
                    "question": "The Habeas Corpus Act of 1679"
                },
                {
                    "correct": 1,
                    "content": [
                        "1960",
                        "1961",
                        "1962",
                        "1963"
                    ],
                    "question": "When did Yuri Alekseyevich Gagaris of Russia, the first man to reach space, reach space?"
                },
                {
                    "question" : "What are the dimensions of A4 paper?",
                    "content" : [
                        "8.3\" x 11.7\"",
                        "8.5\" x 11\"",
                        "30cm x 50cm",
                        "8.5\" x 14\""
                    ],
                    "correct" : 0
                },
                {
                    "correct": 2,
                    "content": [
                        "energy",
                        "speed",
                        "distance",
                        "intensity"
                    ],
                    "question": "Light Year is related to"
                },
                {
                    "correct": 2,
                    "content": [
                        "a type of asset that is in cash in the current account of the commercial bank",
                        "a type of asset that is in the form of a deposit in the current account of the commercial bank",
                        "either of these",
                        "None of the above"
                    ],
                    "question": "A liquid asset is"
                },
                {
                    "correct": 1,
                    "content": [
                        "largest airport",
                        "highest airport",
                        "lowest airport",
                        "busiest airport"
                    ],
                    "question": "Lhasa airport at Tibet is the World's"
                },
                {
                    "correct": 2,
                    "content" : [
                        "Ethiopia",
                        "Nigeria",
                        "Zambia",
                        "Chad"
                    ],
                    "question": "Which of these African countries is situated south of the equator?"
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
    question.innerHTML = decodeURIComponent( escape( string ) );
}

const setAnswers = ( answers=[], level)  => {
    // answer 1
    answer1.setAttribute('level', level);
    answer1.setAttribute('answer', 0);
    const spans1 = answer1.getElementsByTagName('span');
    const span1 = spans1[1];
    span1.innerHTML = decodeURIComponent( escape( answers[0] ));

    // answer 2
    answer2.setAttribute('level', level);
    answer2.setAttribute('answer', 1);
    const spans2 = answer2.getElementsByTagName('span');
    const span2 = spans2[1];
    span2.innerHTML = decodeURIComponent( escape( answers[1] ));

    // answer 3
    answer3.setAttribute('level', level);
    answer3.setAttribute('answer', 2);
    const spans3 = answer3.getElementsByTagName('span');
    const span3 = spans3[1];
    span3.innerHTML = decodeURIComponent( escape(  answers[2] ));

    // answer 4
    answer4.setAttribute('level', level);
    answer4.setAttribute('answer', 3);
    const spans4 = answer4.getElementsByTagName('span');
    const span4 = spans4[1];
    span4.innerHTML = decodeURIComponent( escape( answers[3] ));
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
