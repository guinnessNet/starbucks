const searchEl =  document.querySelector('.search');//document는 html문서를 지칭
const searchInputEl = searchEl.querySelector('input');//위에서 찾은 searchEl 안에서 input을 찾음.

searchEl.addEventListener('click', function () {
  //logic....
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused'); //특정요소에 클래스 정보를 가지고있는 객체에서 클래스 정보를 추가하겠다.
  searchInputEl.setAttribute('placeholder','통합검색');//HTML요소를 지정함.
});// 인풋창이 포커스가되면 서치엘리먼트에 포커스드라는 클래스를 추가해서 css에서 스타일을 바꿔줌.

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused'); //특정요소에 클래스 정보를 가지고있는 객체에서 클래스 정보를 추가하겠다.
  searchInputEl.setAttribute('placeholder','');//HTML요소를 지정함.
});


const badgeEl =   document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  // console.log(window.scrollY)
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, 0.6, {
      opacity:0,
      display: 'none'
    })
    // 버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    })
    //버튼 숨기기!
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

//_.throttle(함수, 시간)

toTopEl.addEventListener('click',function (){
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl ,index) {
  gsap.to(fadeEl, 1,{
    delay:(index+1) * .7,
    opacity:1
  });

});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,//ms단위
  },
  pagination : {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container',{
  direction: 'horizontal',//기본값
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
  
})
function random(min, max){
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// do {console.log(random(1,5) == 1)} while (true);

function floatingObject(selector,delay,size){
  // gsap.to(selector,시간,옵션);
  gsap.to(// 선택자
    selector,random(1.5,2.5),//애니메이션 동작시간
  {//옵션
    y: size,
    repeat: -1, //무한반복
    yoyo:1,// 다시돌아오게해줌 true
    ease: Power1.easeInOut,
    delay: random(0,delay)
  })
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',0.5,15);
floatingObject('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, //
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});