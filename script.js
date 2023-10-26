const body = document.body;
const bodyConteiner = document.createElement('div');
bodyConteiner.classList.add('flex-conteiner');

const mainHeader = document.createElement('header');
mainHeader.classList.add('mainHeader');

const navBarConteiner = document.createElement('aside');
navBarConteiner.classList.add('navBarConteiner');

const footerConteiner = document.createElement('footer');
footerConteiner.classList.add('footerConteiner');

const mainContentConteiner = document.createElement('div');
mainContentConteiner.classList.add('mainContentConteiner');

const mainConteiner = document.createElement('main');
mainConteiner.classList.add('mainConteiner');

body.appendChild(bodyConteiner);
bodyConteiner.appendChild(mainHeader);
bodyConteiner.appendChild(mainConteiner);
bodyConteiner.appendChild(footerConteiner);
mainConteiner.insertAdjacentElement('beforeend', navBarConteiner);
mainConteiner.insertAdjacentElement('beforeend', mainContentConteiner);

