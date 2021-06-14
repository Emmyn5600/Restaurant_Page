export const navigateToHome = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  if (!home.classList.contains('active')) {
    home.classList.add('active');
    menu.classList.remove('active');
    contact.classList.remove('active');
  }
};

export const navigateToMenu = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
    home.classList.remove('active');
    contact.classList.remove('active');
  }
};

export const navigateToContact = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  if (!contact.classList.contains('active')) {
    contact.classList.add('active');
    menu.classList.remove('active');
    home.classList.remove('active');
  }
};