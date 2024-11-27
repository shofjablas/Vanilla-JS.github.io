const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  h1.style.color = 'blue';
}

function handleMouseEnter() {
  h1.innerText = 'Mouse is here!';
}

function handleMouseLeave() {
  h1.innerText = 'Mouse is gone';
}

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}
// 클릭 이벤트 리스너를 설정
title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

window.addEventListener('resize', handleWindowResize);
