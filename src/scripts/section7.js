(function antiDoubleVariables() {
    let list3 = document.querySelector('.section7_client-list'); //список
    let listLi3 = document.querySelectorAll('.section7_client-item'); //li`шки
    let listMarker3 = document.querySelector('.section7_list-marker'); //'Yoga'

    list3.addEventListener('mouseover', (e)=>{ //вешаем обработчик на список на наведение мыши
        for (let i=0; i<listLi3.length; i++){ //перебираем все li`шки
            if (e.target === listLi3[i]){ //если элемент на который навели мышь это li`шка
                listMarker3.style.top = e.target.offsetTop + 'px'; //присваиваем маркеру значение по вертикали равному li`шке на которую
                // навели мышь
            }
        }
    });
})();