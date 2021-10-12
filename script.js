const scrolltotop = document.getElementById('scroll-to-top');
let datashow = false;

window.addEventListener('scroll' , () =>{
    if (window.scrollY > 550 && !datashow){
        scrolltotop.setAttribute('data-show' , 'true');
        datashow = true;
    }

    if (window.scrollY <= 550 && datashow) {
        scrolltotop.setAttribute('data-show' , 'false');
        datashow = false;
    }

    scrolltotop.addEventListener('click' , () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    });
});