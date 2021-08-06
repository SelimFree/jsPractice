const numberOfFilms = +prompt("How many you have watched?", "");

const personalMovieDB  = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const movie = prompt("Last movie watched", "");
    const rating = prompt("What rating will you give", "");
    if (movie != "" && rating != "" && movie.length < 50 && rating.length < 50 && movie != null && rating != null) {
        personalMovieDB.movies[movie] = rating;
    }
}

if (personalMovieDB.count < 10) {
    console.log("You have watched few films");
} else if (personalMovieDB.count < 30) {
    console.log("You are a classic viewer");
} else if (personalMovieDB.count > 30) {
    console.log("You are movie-monster!");
} else {
    console.log("Error!");
}

