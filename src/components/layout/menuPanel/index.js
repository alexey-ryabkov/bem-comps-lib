const menu = document.getElementById('menu-panel');
const menuClose = document.getElementById('menu-panel-close');
const menuOpen = document.getElementById('menu-panel-open');

if (menuOpen) {
  menuOpen.addEventListener('click', function () {
    if (menu) {
      // menu.setAttribute('data-open', true);
      menu.classList.add('menuPanel_opened');
      menu.closest('.page').classList.add('page_menuPanelOpened');
    }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function () {
    if (menu) {
      // menu.removeAttribute('data-open');
      menu.classList.remove('menuPanel_opened');
      menu.closest('.page').classList.remove('page_menuPanelOpened');
    }
  });
}
