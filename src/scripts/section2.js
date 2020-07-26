let list = document.querySelector('.section2_list-variety'); //список
let listLi = document.querySelectorAll('.section2_list-variety>li'); //li`шки
let listMarker = document.querySelector('.section2_list-marker'); //'Yoga'

list.addEventListener('mouseover', (e)=>{ //вешаем обработчик на список на наведение мыши
    for (let i=0; i<listLi.length; i++){ //перебираем все li`шки
        if (e.target === listLi[i]){ //если элемент на который навели мышь это li`шка
            listMarker.style.top = e.target.offsetTop + 'px'; //присваиваем маркеру значение по вертикали равному li`шке на которую
            // навели мышь
        }
    }
});

