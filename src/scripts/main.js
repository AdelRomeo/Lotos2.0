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
            console.log(pageNumb);
            console.log(page);
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
        container.innerHTML = text;
    });