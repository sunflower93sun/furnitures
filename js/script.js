
const swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination"
  },
});
const topswiper = new Swiper(".top-swiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
const bottomswiper = new Swiper(".bottom-swiper", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/*=================================================
ハンバーガーメニュー
===================================================*/


const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');
const menus = document.querySelectorAll('.menu-section')
open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
});

menus.forEach((menu) => {
  menu.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    close.classList.add('hide');
  })
});


/*=================================================
gsap
===================================================*/

const fadeInTarget = document.querySelectorAll('.fade-in');

fadeInTarget.forEach(el => {
  gsap.from(el, 2, {
    y: 100,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    scrollTrigger: {
      trigger: el,
      start: 'top center',
      // markers: true,
    },
  })
})

gsap.timeline({
  scrollTrigger: {
    trigger: '.about_descitem',
    start: 'top center',
  }
})
  .from('.about_descimg', 0.9, {
    scale: 1.1,
    opacity: 0,
  })
  .from('.about_desccaption', 1, {
    opacity: 0,
  })
  .from('.sub-title', 0.8, {
    y: 240,
    opacity: 0,
  })
  .from('.about_descblock', 0.8, {
    y: 240,
    opacity: 0,
  })
  
gsap.timeline({
    scrollTrigger: {
      trigger: '.about_descitemre',
      start: 'top center',
    }
  })
 .from('.about_descimgre', 1, {
    scale: 1.1,
    opacity: 0,
  })
 .from('.about_desccaptionre', 1, {
    opacity: 0,
  })
.from('.sub-titlere', 0.8, {
    y: 240,
    opacity: 0,
  })
 .from('.about_descblockre', 0.8, {
    y: 240,
    opacity: 0,
    onComplete: function () {
      // アニメーションが完了したときに実行されるコールバック
      console.log('Animation completed');
    },
  })


