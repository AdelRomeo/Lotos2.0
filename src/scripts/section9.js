(function f() {
    let container = document.querySelector('.section9_address');
    let closeBtn = document.querySelector('.section9_vision-address');

    closeBtn.addEventListener('click', ()=>{
        container.classList.toggle('section9_address-anim');
        closeBtn.classList.toggle('section9_vision-address-anim');
    });
})();