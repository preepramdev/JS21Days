(() => {
  // เริ่มเขียนโค้ด
  function onScroll() {
    const selectionElems = Array.from(document.querySelectorAll('section'));

    selectionElems.forEach(selectionElem => {
      const imgElem = selectionElem.querySelector('img');
      const textElem = selectionElem.querySelector('.text');

      const revealPosition = imgElem.offsetTop + imgElem.offsetHeight / 10;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= revealPosition) {
        textElem.classList.add('reveal');
      }
    });
  }

  function run() {
    document.addEventListener('scroll', onScroll);
  }

  run();
})();
