'use strict';
const 
    promoBg = document.querySelector('.promo__bg'),
    promoInteractiveList = document.querySelector('.promo__interactive-list'),
    gener = promoBg.querySelector('.promo__genre');

const movieDB = {
    movies: [
        "Логан",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Лига справедливости",
    ]
};

// удаление рекламных блоков
document.querySelectorAll('.promo__adv img').forEach(item => {
    item.remove();
});

//замена жанра на промопостере
gener.textContent = 'Драмма';

// замена промопостера
promoBg.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';

// сортировка массива с фильмами и добавление их на страницу
movieDB.movies.sort();
for (let i = 0; i < movieDB.movies.length; i++) {
    promoInteractiveList.insertAdjacentHTML('beforeend', `
    <li class="promo__interactive-item"> ${i + 1} ${movieDB.movies[i]}
        <div class="delete"></div>
    </li>`)
};







