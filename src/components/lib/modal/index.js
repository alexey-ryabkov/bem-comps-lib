document.addEventListener('DOMContentLoaded', () => {
  document.body.querySelectorAll('[data-modal-trigger]').forEach((el) => {
    const trigger = /** @type {HTMLElement} */ (el);

    trigger?.addEventListener('click', (e) => {
      e.preventDefault();

      const modalId = trigger.dataset.modalTrigger;
      if (modalId?.length) {
        /** @type HTMLElement|null **/
        const modal = document.body.querySelector(`.modal[id="${modalId}"]`);
        modal && (modal.style.display = 'block');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  document.body.querySelectorAll('.modal').forEach((el) => {
    const modal = /** @type {HTMLElement} */ (el);

    /** @type HTMLElement|null **/
    const closeBtn = modal.querySelector('.modal__closeButton');

    closeBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'none';
      document.body.style.overflow = 'initial';
    });
  });
});
