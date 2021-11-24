(function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menuBurger = document.querySelector('.menu-btn-burger');
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.list');
  const menuItem = document.querySelectorAll('.list-item');
  const logo = document.querySelector('.logo_small');

  let showMenu = false;
  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBurger.classList.add('open');
      nav.classList.add('open');
      menu.classList.add('open');
      menuItem.forEach(item => item.classList.add('open'));
      menuBtn.classList.add('open');

      showMenu = true;
    } else {
      menuBurger.classList.remove('open');
      nav.classList.remove('open');
      menu.classList.remove('open');
      menuItem.forEach(item => item.classList.remove('open'));
      menuBtn.classList.remove('open');


      showMenu = false;
    }
  }
}());

(function() {

  const container = document.getElementsByClassName('container');
  const content = document.getElementsByClassName('faq_content');
  for (let i = 0; i < container.length; i++) {
    container[i].addEventListener('click', function() {
      this.classList.toggle('active');
      if (content[i].style.maxHeight) {
        content[i].style.maxHeight = null;
      } else {
        content[i].style.maxHeight = content[i].scrollHeight + 'px';
      }
      
    })
  }
}());
//animation
(function () {
  const animItems = document.querySelectorAll('._anim-items');
  console.log(animItems);
  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
      for(let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if(!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
          
        }

      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
  }
  setTimeout(() => {
    animOnScroll();
  }, 100);
  
}());