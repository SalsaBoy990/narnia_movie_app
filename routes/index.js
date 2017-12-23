const moviesJSON = require('../movies.json');

// Home page callback function
exports.home = (req, res) => {
    let movies = moviesJSON.movies;

    res.render('home', {
        title: "Narnia Movies",
        movies: movies
    });
};

// Callback function for movies episodes
exports.movie_single = (req, res) => {
    let episode_number = req.params.episode_number;
    let movies = moviesJSON.movies;

    if (episode_number >= 1 && episode_number <= 3) {
        let movie = movies[episode_number - 1];
        let title = movie.title;

        let main_characters = movie.main_characters;

        res.render('movie_single', {
            movies: movies,
            title: title,
            movie: movie,
            main_characters: main_characters
        });
    }
    else {
        res.render('notFound', {
            movies: movies,
            title: "Nem ezt az oldalt keresed."
        });
    } 
};

// Callback function for a non-existing page
exports.notFound = (req, res) => {
    let movies = moviesJSON.movies;
    res.render('notFound', {
        movies: movies,
        title: "Nem ezt az oldalt keresed."
    });
};



