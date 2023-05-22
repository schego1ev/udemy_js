/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
const movieInput = document.querySelector('.adding__input');
const addMovieButton = document.querySelector('form.add button');
const deleteButtons = document.querySelectorAll('.delete');

advertisingBanners.forEach(element => { element.remove() });
genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';

function refreshMovieList() {
  movieList.innerHTML = '';
  movieDB.movies.sort();
  movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
      <div class="delete"></div>
    </li>
  `
  });
}
refreshMovieList();

addMovieButton.addEventListener('click', (event) => {
  event.preventDefault();
  let twentyOneSymbols = movieInput.value;
  if (twentyOneSymbols.length > 21) {
    twentyOneSymbols = `${twentyOneSymbols.split('').slice(0, 21).join('')}...`;
  };
  movieDB.movies[movieDB.movies.length] = twentyOneSymbols;
  console.log(movieDB.movies);
  refreshMovieList();
});

// deleteButton.addEventListener('click', (event) => {
//   event.target.this.parentNode.parentNode.removeChild(this.parentNode);;
// });

deleteButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.remove();
    refreshMovieList();
  });
});

