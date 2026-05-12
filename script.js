let burger=document.querySelector('.burger');
let menu=document.querySelector('ul');

burger.addEventListener('click',run)
function run(){
    burger.classList.toggle('active');
    menu.classList.toggle('show');
}

const btn = document.getElementById("scrollToTop");

  // Показать кнопку при прокрутке вниз
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Прокрутка вверх при клике
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

const loadingScreen = document.getElementById("loading-screen");
const loaderDots = document.querySelectorAll(".loader .dot");

if (loadingScreen && loaderDots.length) {
  anime.timeline({
    loop: true,
    easing: 'easeInOutSine'
  })
  .add({
    targets: loaderDots,
    translateY: [-10, 10],
    scale: [0.8, 1],
    opacity: [0.4, 1],
    duration: 450,
    delay: anime.stagger(120)
  })
  .add({
    targets: loaderDots,
    translateY: 0,
    scale: 0.85,
    opacity: 0.6,
    duration: 450,
    delay: anime.stagger(120)
  });

  anime({
    targets: '.loader-text',
    opacity: [0.7, 1],
    duration: 1000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      anime({
        targets: '#loading-screen',
        opacity: [1, 0],
        duration: 700,
        easing: 'easeInOutQuad',
        complete: () => loadingScreen.classList.add('hidden')
      });
    }, 500);
  });
}