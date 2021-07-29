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

const questions = window.dataQues.questions;

const q2 = questions.find( q => {
    return q.id === 2; 
});

console.log(q2);
