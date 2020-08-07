(function antiDoubleVariables() {
    let list2 = document.querySelector('.section4_list-trainer'); //список
    let listLi2 = document.querySelectorAll('.section4_list-trainer>li'); //li`шки
    let listMarker2 = document.querySelector('.section4_list-marker'); //'Yoga'

    list2.addEventListener('mouseover', (e)=>{ //вешаем обработчик на список на наведение мыши
        for (let i=0; i<listLi2.length; i++){ //перебираем все li`шки
            if (e.target === listLi2[i]){ //если элемент на который навели мышь это li`шка
                listMarker2.style.top = e.target.offsetTop + 'px'; //присваиваем маркеру значение по вертикали равному li`шке на которую
                // навели мышь
            }
        }
    });
})();