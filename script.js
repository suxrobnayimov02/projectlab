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

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.background = "#004A80";
    } else {
        document.getElementById("header").style.background = "";
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.color = "white";
    } else {
        document.getElementById("header").style.color = "";
    }
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.opacity = "1";
    } else {
        document.getElementById("header").style.opacity = "";
    }
}
