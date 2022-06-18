'use strict';

const ratings = document.querySelectorAll('.rating');
const send = document.querySelector('#send');
const painel = document.querySelector('#painel');

painel.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
    }
})

function removeActive(){
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active');
    }
};