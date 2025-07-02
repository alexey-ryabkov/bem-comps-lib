const switchers = document.querySelectorAll('[id^="theme-changer"]');
const switchTheme = (/** @type {Event} */ e) => {
  document.documentElement.toggleAttribute('data-theme-dark');
  switchers.forEach((element) => {
    const switcher = /** @type {HTMLInputElement} */ (element);
    if (switcher != e.target) {
      switcher.checked = !switcher.checked;
    }
  });
};
switchers.forEach((switcher) =>
  switcher.addEventListener('change', switchTheme),
);
