(function antiDoubleVariables() {
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

    list.addEventListener('click', (e)=>{ //вешаем обработчик насписок при клике
        let section2Container = document.querySelectorAll('.section2_container');//список подгружаемых элементов

        for (let i=0; i<listLi.length; i++){ //перебираем все li`шки
            if (e.target === listLi[i]){ //если элемент на который навели мышь это li`шка
                for (let j = 0; j<section2Container.length; j++){ // перебираем все элементы списка с подгружаемым контентом
                    section2Container[j].style.display = 'none'; // display = 'none' для ВСЕХ элементво
                    section2Container[i].style.display = 'block'; // display = 'block' для элемента номер которого в массиве равен
                    // номеру лишки на которую кликнули.
                }
            }
        }
    })

})();

