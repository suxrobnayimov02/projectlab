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

function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
