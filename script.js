let but = document.querySelector('.aside')
let aside = document.querySelector('aside');
but.addEventListener('click', () => {
  aside.style.display = 'block';
})
aside.addEventListener('click', () => {
  aside.style.display = 'none';
});

