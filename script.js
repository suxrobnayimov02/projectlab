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

// scroll to top navbar
// const scrollnavbar = document.getElementById('scroll-top-navbar');
// let datashow = false;

// window.addEventListener('scroll' , () =>{
//     if (window.scrollY > 450 && !datashow){
//         scrollnavbar.setAttribute('data-show' , 'true');
//         datashow = true;
//     }

//     if (window.scrollY <= 450 && datashow) {
//         scrollnavbar.setAttribute('data-show' , 'false');
//         datashow = false;
//     }

//     scrollnavbar.addEventListener('click' , () => {
//         window.scrollTo({
//             top:0,
//             behavior:'smooth'
//         });
//     });
// });

// const body = document.body;
// const triggerMenu = document.querySelector(".page-header .trigger-menu");
// const nav = document.querySelector(".page-header nav");
// const menu = document.querySelector(".page-header .menu");
// const lottieWrapper = document.querySelector(".lottie-wrapper");
// const lottiePlayer = document.querySelector("lottie-player");
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;

// triggerMenu.addEventListener("click", () => {
//   body.classList.toggle("menu-open");
// });

// lottieWrapper.addEventListener("click", (e) => {
//   e.preventDefault();
//   triggerMenu.click();
//   body.classList.toggle("menu-open-with-lottie");
// });

// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll <= 0) {
//     body.classList.remove(scrollUp);
//     return;
//   }

//   if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
//     // down
//     body.classList.remove(scrollUp);
//     body.classList.add(scrollDown);
//     lottiePlayer.play();
//   } else if (
//     currentScroll < lastScroll &&
//     body.classList.contains(scrollDown)
//   ) {
//     // up
//     body.classList.remove(scrollDown);
//     body.classList.add(scrollUp);
//     lottiePlayer.stop();
//   }
//   lastScroll = currentScroll;
// });

// Resources