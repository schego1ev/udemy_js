const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i += 1) {
      const answerFilmName = prompt('Один из последних просмотренных фильмов?', '');
      const answerFilmRating = prompt('На сколько оцените его?', '');

      if (answerFilmName !== null && answerFilmRating !== null &&
        answerFilmName !== '' && answerFilmRating !== '' &&
        answerFilmName.length < 50) {
        personalMovieDB.movies[answerFilmName] = answerFilmRating;
        console.log('done');
      } else {
        console.log('error');
        i -= 1;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else if (personalMovieDB.count >= 10) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i += 1) {
      const answerGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
      if (answerGenres === null || answerGenres === '') {
        console.log('Вы введи некорректные данные или не ввели их вообще');
        i -= 1;
      } else {
        personalMovieDB.genres.push(answerGenres);
      }
    }

    personalMovieDB.genres.forEach(function (item, i) {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    })
    console.log(personalMovieDB);
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true;
  }
};
