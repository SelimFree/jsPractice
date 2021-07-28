const numberOfFilms = +prompt("How many you have watched?", "");

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movie = prompt("Last movie watched", "");
const rating = prompt("What rating will you give", "");

const movie_2 = prompt("Last movie watched", "");
const rating_2= prompt("What rating will you give", "");

personalMovieDB.movies[movie] = rating;
personalMovieDB.movies[movie_2] = rating_2;