const $074c641abdae77e6$var$switchers = document.querySelectorAll('[id^="theme-changer"]');
const $074c641abdae77e6$var$switchTheme = (/** @type {Event} */ e)=>{
    document.documentElement.toggleAttribute('data-theme-dark');
    $074c641abdae77e6$var$switchers.forEach((element)=>{
        const switcher = /** @type {HTMLInputElement} */ element;
        if (switcher != e.target) switcher.checked = !switcher.checked;
    });
};
$074c641abdae77e6$var$switchers.forEach((switcher)=>switcher.addEventListener('change', $074c641abdae77e6$var$switchTheme));


const $e0a5b8356b7e4be9$var$menu = document.getElementById('menu-panel');
const $e0a5b8356b7e4be9$var$menuClose = document.getElementById('menu-panel-close');
const $e0a5b8356b7e4be9$var$menuOpen = document.getElementById('menu-panel-open');
if ($e0a5b8356b7e4be9$var$menuOpen) $e0a5b8356b7e4be9$var$menuOpen.addEventListener('click', function() {
    if ($e0a5b8356b7e4be9$var$menu) {
        $e0a5b8356b7e4be9$var$menu.classList.add('menuPanel_opened');
        $e0a5b8356b7e4be9$var$menu.closest('.page')?.classList.add('page_menuPanelOpened');
    }
});
if ($e0a5b8356b7e4be9$var$menuClose) $e0a5b8356b7e4be9$var$menuClose.addEventListener('click', function() {
    if ($e0a5b8356b7e4be9$var$menu) {
        $e0a5b8356b7e4be9$var$menu.classList.remove('menuPanel_opened');
        $e0a5b8356b7e4be9$var$menu.closest('.page')?.classList.remove('page_menuPanelOpened');
    }
});


document.addEventListener('DOMContentLoaded', ()=>{
    document.body.querySelectorAll('[data-modal-trigger]').forEach((el)=>{
        const trigger = /** @type {HTMLElement} */ el;
        trigger?.addEventListener('click', (e)=>{
            e.preventDefault();
            const modalId = trigger.dataset.modalTrigger;
            if (modalId?.length) {
                /** @type HTMLElement|null **/ const modal = document.body.querySelector(`.modal[id="${modalId}"]`);
                modal && (modal.style.display = 'block');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    document.body.querySelectorAll('.modal').forEach((el)=>{
        const modal = /** @type {HTMLElement} */ el;
        /** @type HTMLElement|null **/ const closeBtn = modal.querySelector('.modal__closeButton');
        closeBtn?.addEventListener('click', (e)=>{
            e.preventDefault();
            modal.style.display = 'none';
            document.body.style.overflow = 'initial';
        });
    });
});






//# sourceMappingURL=bem-comps-lib.0c3a8c3c.js.map
