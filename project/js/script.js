/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };
  const advertisingBanners = document.querySelectorAll('.promo__adv img');
  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const movieInput = addForm.querySelector('.adding__input');
  const favoriteCheckbox = addForm.querySelector('[type=checkbox]');
  const deleteButtons = document.querySelectorAll('.delete');

  function sortArr(arr) {
    arr.sort();
  }

  function deleteAdv(arr) {
    arr.forEach(item => {
      item.remove();
    });
  }

  function makeChanges() {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
  }

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = movieInput.value;
    const isFavorite = favoriteCheckbox.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      if (isFavorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
    }
  });

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
      </li>
    `
    });
  }

  deleteButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btn.parentElement.remove();
      movieDB.movies.splice(index, 1);

      createMovieList(films, parent);
    });
  });

  deleteAdv(advertisingBanners);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});



// advertisingBanners.forEach(element => { element.remove() });

// function refreshMovieList() {
//   movieList.innerHTML = '';
//   movieDB.movies.sort();
//   movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//     <li class="promo__interactive-item">${i + 1}. ${film}
//       <div class="delete"></div>
//     </li>
//   `
//   });
// }
// refreshMovieList();

// addMovieButton.addEventListener('click', (event) => {
//   if (favoriteCheckbox.checked) {
//     console.log('Добавляем любимый фильм');
//   }
//   event.preventDefault();
//   let twentyOneSymbols = movieInput.value;
//   if (twentyOneSymbols.length > 21) {
//     twentyOneSymbols = `${twentyOneSymbols.split('').slice(0, 21).join('')}...`;
//   };
//   movieDB.movies[movieDB.movies.length] = twentyOneSymbols;
//   console.log(movieDB.movies);
//   refreshMovieList();
// });

// deleteButtons.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     btn.parentElement.remove();
//     movieDB.movies.splice(index, 1);
//     refreshMovieList();
//   });
// }); 
