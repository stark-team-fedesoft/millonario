const name_        = document.getElementById('name');
const challenge    = document.getElementById('challenge');
const submitButton = document.getElementById('submit-button');
const gameForm     = document.getElementById('game-form');

const activateButton = () => {
    if( name_.value && challenge.value ) submitButton.removeAttribute('disabled');
    else submitButton.setAttribute('disabled', true);
}

const setDataToGame = () => {
    localStorage.setItem('name', name_.value);
    localStorage.setItem('challenge', challenge.value);
    window.location.href = 'game.html';
}

name_.onchange     = function() { activateButton(); };
challenge.onchange = function() { activateButton(); };
gameForm.onsubmit  = function(e) {
    e.preventDefault();
    setDataToGame();
};
