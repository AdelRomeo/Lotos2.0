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

    //подгрузка выбранного элемента в мобильной версии
    let leftBtn = document.querySelector('.section2_move-left'); //кнопка влево
    let rightBtn = document.querySelector('.section2_move-right'); //кнопка вправо
    let btnCont = document.querySelector('.section2_move-cont'); //контейнер в котором находятся кнопки
    let section2Container = document.querySelectorAll('.section7_client-info');
    let counter = 0; //начальное состояния счетчика для смены элементов
    leftBtn.setAttribute("disabled", "disabled");//состояние левой кнопки по умолчанию

    btnCont.addEventListener('click', (e)=>{ //вешаем обработчик на контейнер
        console.log(1);
        if (e.target === leftBtn){ //если нажали на левую кнопку
            counter = counter -1; //изменение счетчика
        }
        if (e.target === rightBtn){ //если нажали на правую кнопку
            counter = counter +1; //изменение счетчика
        }
        for (let i = 0; i<section2Container.length; i++){ //перебираем все элементы для подгрузки
            section2Container[i].style.display = 'none'; //скрываем все элементы
            section2Container[counter].style.display = 'block'; //показываем элемент номер которого равен counter
        }
        if (counter >= section2Container.length -1){ //ограничение counter`a
            rightBtn.setAttribute("disabled", "disabled"); //отключение кнопки если значения counter`a НЕкорректно
        } else {
            rightBtn.removeAttribute("disabled"); //включение кнопки если значения counter`a корректно
        }
        if (counter <= 0){ //ограничение counter`a
            leftBtn.setAttribute("disabled", "disabled"); //отключение кнопки если значения counter`a НЕкорректно
        } else {
            leftBtn.removeAttribute("disabled"); //включение кнопки если значения counter`a корректно
        }
    })
})();