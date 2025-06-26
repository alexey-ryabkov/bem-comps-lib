const menu = document.getElementById('burger-panel');
const menuClose = document.getElementById('burger-panel-close');
const menuOpen = document.getElementById('burger-panel-open');

if (menuOpen) {
  menuOpen.addEventListener('click', function () {
    if (menu) {
      menu.setAttribute('data-open', '');
    }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function () {
    if (menu) {
      menu.removeAttribute('data-open');
    }
  });
}
