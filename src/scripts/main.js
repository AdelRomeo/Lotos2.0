let container = document.querySelector('.main-container');

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