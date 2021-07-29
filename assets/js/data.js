window.dataQues = {
    questions : [
        {
            id        : 1,
            question  : '¿Quién conquisto América?',
            options   : [
                { id: 'A', answer : 'Simón Bolivar' },
                { id: 'B', answer : 'George Washington' },
                { id: 'C', answer : 'Cristobal Colón' },
                { id: 'D', answer : 'Bad Bunny' },
            ],
            value     : 200000.00,
            correctOp : 'C',
            access    : true,
        },
        {
            id        : 2,
            question  : '¿Quién inventó el primer vehículo de la historia?',
            options   : [
                { id: 'A', answer : 'Henry Ford' },
                { id: 'B', answer : 'Karl Benz' },
                { id: 'C', answer : 'Michael Schumacher' },
                { id: 'D', answer : 'Louis Chevrolet' },
            ],
            value     : 500000.00,
            correctOp : 'B',
            access    : false,
        },
    ]
}
// si no hay preguntas almacenadas en localStorage, guardarlas.
const isQuestionsSaved = localStorage.getItem('questions');
if( !isQuestionsSaved ) {
    const strQuestions = JSON.stringify( window.dataQues );
    localStorage.setItem( 'questions', strQuestions );
}

// recuperar de localStorage y convertir a JSON
// const strQuestions = localStorage.getItem('questions');
// const questions = JSON.parse( strQuestions );
