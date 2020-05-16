(() => {
  // เริ่มเขียนโค้ด

  const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a'
  ];

  let index = 0;

  function onKeydown(event) {
    event.key === konamiCode[index] ? index++ : index = 0;
    console.log(event);

    if (konamiCode.length === index) {
      startSnowing();
    }
  }

  function run() {
    document.addEventListener('keydown', onKeydown);
  }

  run();
})();
