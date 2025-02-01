document.body.addEventListener('click', function() {
    // Generate a random color in hex format
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
  });

  /*
let spongebob = document.getElementById('spongebob');
        if (spongebob.style.opacity < 1) {
          let currentOpacity = parseFloat(window.getComputedStyle(spongebob).opacity);
          spongebob.style.opacity = (currentOpacity + 0.1).toFixed(1);  // Increase opacity by 0.1
        }
  */
  