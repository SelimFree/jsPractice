function start() {
    numberOfFilms = parseInt(prompt("How many you have watched?", ""));

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = parseInt(prompt("How many you have watched?", ""));
    }

    personalMovieDB.count = numberOfFilms;
}


function getMyAnswers() {
    for (let i = 0; i < 2; i++) {
        const movie = prompt("Last movie watched", "");
        const rating = prompt("What rating will you give", "");
        if (movie != "" && rating != "" && movie != null && rating != null && movie.length < 50 && rating.length < 50) {
            personalMovieDB.movies[movie] = rating;
        }
        else {
            i--;
        }
    }
}


function checkMyLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You have watched few films");
    } else if (personalMovieDB.count < 30) {
        console.log("You are a classic viewer");
    } else if (personalMovieDB.count > 30) {
        console.log("You are movie-monster!");
    } else {
        console.log("Error!");
    }
}

function showMyDB() {
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}


function writeMyGenres() {
    for (let i = 0; i < 3; i++) {
        const myGenre = prompt(`What is you favourite genre №${i + 1}`);
        if (myGenre != "" && myGenre != null && myGenre.length < 50) {
            personalMovieDB.genres[i] = myGenre; 
        }
        else {
            i--;
        }
    }
}


let numberOfFilms;
const personalMovieDB  = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};


start();
getMyAnswers();
checkMyLevel();
writeMyGenres();
showMyDB();


