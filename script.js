const select = (element) => document.querySelector(element);

const header = select('header');
const main = select('main');

select('.menu-icons').addEventListener('click', () => {
  header.classList.toggle('active');
  main.classList.toggle('active');
})
