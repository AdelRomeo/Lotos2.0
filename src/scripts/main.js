let container = document.querySelector('.main-container');
let nextPage = document.querySelector('.next-page_btn');

let pageNumb = 2; //счетчик для изменения страницы через нижнюю кнопку

nextPage.addEventListener('click', ()=>{
    fetchRequest(pageNumb);
});


fetch('section1.html')
    .then((response)=>{
        if (response.status === 404){
            return Promise.reject();
        }
        return response.text()
    })
    .then((text)=>{
        container.innerHTML = text; // закидываем на страницу подгруженный контент

        let section = document.querySelector('.section'); //секция с подгружаемым контентом
        if (section.clientWidth > 1200){
            section.style.maxHeight = maxHeightSection(); //начальный размер страницы
        }

        window.addEventListener('resize', ()=>{ // resize - изменение размера окна
            if (section.clientWidth > 1200){ // если ширина секции больше 1200px (desktop version)(ширина секции = ширина окна)
                section.style.maxHeight = maxHeightSection();
            } else { // если ширина секции меньше 1200px (mobile version)
                section.style.maxHeight = 'max-content';
                section.style.height = 'max-content';
            }
        });
    });
//----------------------------------------------

//-- открытие и подгрузка контента по кликами в верхнем меню
let menu = document.querySelector('.header_menu'); //кнопка по которой кликают
let menuList = document.querySelector('.main-nav_list'); //список меню

menu.addEventListener('click', ()=>{ //клик по кнопке
   menuList.classList.toggle('vision-menu'); //переключение списка видимости меню
   menu.classList.toggle('header_menu-affect'); //анимацию бурнера меню
});

let menuListItem = document.querySelectorAll('.main-nav_item'); //элементы списка меню (li`шки)

for (let i=0; i<menuListItem.length; i++){ //перебираем все лишки
    menuListItem[i].addEventListener('click', ()=>{ //кликаем по лишке
        let counter = i + 1; //увеличиваем i чтобы не было нуля и счетки для переключения страниц через верхнее меню
        fetchRequest(counter); //запускаем функцию подгрузки контента с  нужным счетчиком
    })
}

function maxHeightSection(){ // универсальная функция которая возвращает высоты для section
    let mainHeader = document.querySelector('.main-header'); //header
    let mainHeaderHeight = mainHeader.clientHeight; //высота header

    let mainFooter = document.querySelector('.main-footer'); //footer
    let mainFooterHeight = mainFooter.clientHeight; //высота footer

    let section = document.querySelector('.section'); //секция с подгружаемым контентом
    let maxHeeight = document.documentElement.clientHeight; // высота всей страницы (body)

    return section.style.height = maxHeeight - mainHeaderHeight - mainFooterHeight + 'px'; //задаем высоты секции (высота страницы
    // -header и footer)
}

function fetchRequest(pageCount) { //универсальная функция для подгрузки секций через разные способы
    let page = 'section' + pageCount +'.html'; //составляем адрес страницы для подрузки
    fetch(page)
        .then((response)=>{
            if (response.status === 404){
                return Promise.reject();
            }
            return response.text()
        })
        .then((text)=>{
            container.innerHTML = text;

            let section = document.querySelector('.section'); //секция с подгружаемым контентом
            section.style.maxHeight = maxHeightSection(); //начальный размер страницы
            let counterFirst= document.querySelector('.counter>span:first-child');//первая цифра счетчика на страница section
            let counterLast = document.querySelector('.counter>span:last-child');//последняя цифра счетчика на страница section
            let counterFirstFooter= document.querySelector('.main-footer_counter>span:first-child');//первая цифра счетчика на страница section
            let counterLastFooter = document.querySelector('.main-footer_counter>span:last-child');//последняя цифра счетчика на страница section
            counterFirstFooter.innerText = counterFirst.innerText;
            counterLastFooter.innerText = counterLast.innerText;

            if (page === 'section2.html'){
                let script = document.createElement('script'); //создаем элемент скрипт
                script.src = "src/scripts/section2.js"; // путь до нужного скрипта
                section.appendChild(script); // добавляем скрипт в секцию
            }

            if (page === 'section4.html'){
                let script = document.createElement('script'); //создаем элемент скрипт
                script.src = "src/scripts/section4.js"; // путь до нужного скрипта
                section.appendChild(script); // добавляем скрипт в секцию
            }

            if (page === 'section7.html'){
                let script = document.createElement('script'); //создаем элемент скрипт
                script.src = "src/scripts/section7.js"; // путь до нужного скрипта
                section.appendChild(script); // добавляем скрипт в секцию
            }

            if (page === 'section9.html'){
                let script = document.createElement('script'); //создаем элемент скрипт
                script.src = "src/scripts/yandexMap.js"; // путь до нужного скрипта
                section.appendChild(script); // добавляем скрипт в секцию
            }

            pageNumb = pageCount + 1; // изменение счетчика для страницы
            page = 'section' + pageNumb + '.html'; // изменение страницы
        });
}
//-----------------------------------------

