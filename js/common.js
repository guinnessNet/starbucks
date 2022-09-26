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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();