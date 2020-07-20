let container = document.querySelector('.main-container');
let nextPage = document.querySelector('.next-page_btn');

let pageNumb = 2; //счетчик для изменения страницы

let page = 'section' + pageNumb + '.html'; //страница которая подставляется в fetch

nextPage.addEventListener('click', ()=>{
    fetch(page)
        .then((response)=>{
            if (response.status === 404){
                return Promise.reject();
            }
            return response.text()
        })
        .then((text)=>{
            container.innerHTML = text;
            pageNumb = pageNumb + 1; // увелечение счетчика для страницы
            page = 'section' + pageNumb + '.html'; // изменение страницы
        });
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

        let mainHeader = document.querySelector('.main-header'); //header
        let mainHeaderHeight = mainHeader.clientHeight; //высота header

        let mainFooter = document.querySelector('.main-footer'); //footer
        let mainFooterHeight = mainFooter.clientHeight; //высота footer

        let section = document.querySelector('.section'); //секция с подгружаемым контентом
        let maxHeeight = document.documentElement.clientHeight; // высота всей страницы (body)

        console.log(mainHeaderHeight);
        console.log(mainFooterHeight);

        section.style.maxHeight = maxHeeight - mainHeaderHeight - mainFooterHeight + 'px'; //задаем высоты секции (высота страницы -header и footer)
    });
//----------------------------------------------
