let container = document.querySelector('.main-container');
let nextPage = document.querySelector('.next-page_btn');

let pageNumb = 2; //счетчик для изменения страницы через нижнюю кнопку

nextPage.addEventListener('click', ()=>{
    fetchRequest(pageNumb);
});


fetch('section9.html')
    .then((response)=>{
        if (response.status === 404){
            return Promise.reject();
        }
        return response.text()
    })
    .then((text)=>{
        container.innerHTML = text; // закидываем на страницу подгруженный контент

        let section = document.querySelector('.section'); //секция с подгружаемым контентом
        section.style.maxHeight = maxHeightSection(); //начальный размер страницы

        window.addEventListener('resize', ()=>{ // resize - изменение размера окна
            section.style.maxHeight = maxHeightSection();
        });
    });
//----------------------------------------------

//-- открытие и подгрузка контента по кликами в верхнем меню
let menu = document.querySelector('.header_menu'); //кнопка по которой кликают

menu.addEventListener('click', ()=>{ //клик пок нопке
   let menuList = document.querySelector('.main-nav_list'); //список меню

   menuList.classList.toggle('vision-menu'); //переключение списка видимости меню
   menu.classList.toggle('header_menu-affect'); //анимацию бурнера меню
});

let menuListItem = document.querySelectorAll('.main-nav_item'); //элементы списка меню (li`шки)

for (let i=0; i<menuListItem.length; i++){ //перебираем все лишки
    menuListItem[i].addEventListener('click', ()=>{ //кликаем по лишке
        let counter = i + 1; //увеличиваем i чтобы не было нуля и счетки для переключения страниц через верхнее меню
        fetchRequest(counter);
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

            pageNumb = pageCount + 1; // изменение счетчика для страницы
            page = 'section' + pageNumb + '.html'; // изменение страницы
        });
}