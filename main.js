document.addEventListener('DOMContentLoaded', () => {
    const infoBtns = document.querySelectorAll('.product__info-text');
    infoBtns.forEach((infoBtn) => {
      infoBtn.addEventListener('click', () => {
        const product = infoBtn.closest('.product');
        product
          .querySelector('.info__description')
          .classList.add('info__description--show');
      });
    });
  
    const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        closeBtn.parentNode.classList.remove('info__description--show');
      });
    });
  });