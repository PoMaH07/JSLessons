'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрлеи?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрлеи?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 {
     
 }
function rememberMyFilms() {
    for (let i=0; i < 2; i++){
        let a = prompt('Один из последних просмотренных фильмов?','');
        let b = prompt('Какую оценку ему поставите?','');
    
        if (a!=null && b!=null && a!='' && b!='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            alert('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <=30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30){
        alert('Вы киноман');
    }else {
        alert('Произошла ошибка!');
    }
    
}

detectPersonalLevel();

function showmyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showmyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();