'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const promoBg = document.querySelector('.promo__bg'),
        promoInteractiveList = document.querySelector('.promo__interactive-list'),
        gener = promoBg.querySelector('.promo__genre'),
        subBtn = document.querySelector('.add__btn'),
        addInput = document.querySelector('.adding__input'),
        favoreatCheck = document.querySelector('.favoreat'),
        adv = document.querySelectorAll('.promo__adv img');


    const movieDB = {
        movies: [
            // "Логан",
            // "Ла-ла лэнд",
            // "Одержимость",
            // "Скотт Пилигрим против...",
            // "Лига справедливости",
        ]
    };

    // удаление рекламных блоков
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    }
    deleteAdv(adv);

    const makeChange = () => {
    //замена жанра на промопостере
    gener.textContent = 'Драмма';
    // замена промопостера
    promoBg.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';
    }
    makeChange();

    // по нажатию кнопки отправки срабатывает функция добавления объекта в массив с фильмами.
    // если нажать при пустой строке появится красная тень
    // если фильм длинее 21 символа, строка обрезается и добавляется "...".Затем отправляется в массив. 
    subBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (addInput.value != '') {
            if (addInput.value.length > 21) {
                addInput.value = addInput.value.slice(0, 21) + '...';
            }
            pushFilm();
        } else {
            addInput.style.boxShadow = '0px 0px 4px 3px rgba(255, 0, 0, 0.2)';
        }
    })


    // сортировка массива с фильмами и добавление их на страницу
    // перед показом фильмов на страницу список очищается, затем добавляется новый на страницу
    // после добавления на страницу получаем кнопку delete по нажатию на которую из массива с фильмами вырезается фильм под индеком кнопки и функция показа фильмов срабатывает снова 
    function showFilms() {
        movieDB.movies.sort();
        promoInteractiveList.innerHTML = '';
        for (let i = 0; i < movieDB.movies.length; i++) {
            promoInteractiveList.insertAdjacentHTML('beforeend', `
        <li class="promo__interactive-item"> ${i + 1} ${movieDB.movies[i]}
            <div class="delete"></div>
        </li>`)
        }
        const deleteBtns = promoInteractiveList.querySelectorAll('.delete');
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                showFilms();
            })
        }
    }


    //  добавляет знаение введенное пользователем в массив с фильмами и показывает фильмы на страницу с помощью showFilm
    // убирает красную тень когда фильмы добавленны
    //  если стоит check добавить в избранное воводится log об этом. check убирается после каждого добавления
    function pushFilm() {
        movieDB.movies.push(addInput.value);
        showFilms();
        addInput.style.boxShadow = '0px 0px 0px 0px';
        if (favoreatCheck.checked) {
            console.log(`${addInput.value} добавлен в любимые фильмы`);
            favoreatCheck.checked = false;
        }
        addInput.value = '';
    }

    
})











