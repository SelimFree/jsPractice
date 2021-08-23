'use strict';
const personalMovieDB  = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start: function() {
        let numberOfFilms = parseInt(prompt("How many you have watched?", ""));

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = parseInt(prompt("How many you have watched?", ""));
        }
    
        this.count = numberOfFilms;
    },

    getAnswers: function() {
        for (let i = 0; i < 2; i++) {
            const movie = prompt("Last movie watched", "");
            const rating = prompt("What rating will you give", "");
            if (movie != "" && rating != "" && movie != null && rating != null && movie.length < 50 && rating.length < 50) {
                this.movies[movie] = rating;
            }
            else {
                i--;
            }
        }
    },

    checkLevel: function() {
        console.log(this.count);
        if (this.count < 10) {
            console.log("You have watched few films");
        } else if (this.count < 30) {
            console.log("You are a classic viewer");
        } else if (this.count > 30) {
            console.log("You are movie-monster!");
        } else {
            console.log("Error!");
        }
    },

    showDB: function() {
        if (this.privat) {
            console.log(this);
        }
    },

    writeGenres: function() {
        for (let i = 0; i < 3; i++) {
            const myGenre = prompt(`What is you favourite genre №${i + 1}`);
            if (myGenre != "" && myGenre != null && myGenre.length < 50) {
                this.genres[i] = myGenre; 
            }
            else {
                i--;
            }
        }
        let j = 1;
        this.genres.forEach(genre => {
           console.log(`Your favourite genre №${j} is ${genre}`);
           j++;
        });
    },

    triggerVisible: function() {
        this.privat = !(this.privat);
    }
};


personalMovieDB.start();
personalMovieDB.getAnswers();
personalMovieDB.checkLevel();
personalMovieDB.writeGenres();
personalMovieDB.showDB();

personalMovieDB.triggerVisible();
personalMovieDB.showDB();



