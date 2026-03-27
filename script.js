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