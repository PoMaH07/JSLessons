'use strict'

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрлеи?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movies1 = prompt('Один из последних просмотренных фильмов?');
let bals1 = prompt('Какую оценку ему поставите?');
let movies2 = prompt('Один из последних просмотренных фильмов?');
let bals2 = prompt('Какую оценку ему поставите?');

personalMovieDB.movies[movies1] = bals1;
personalMovieDB.movies[movies2] = bals2;

console.log(personalMovieDB);