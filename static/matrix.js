// Matrix Rain Effect
// Subtle falling code animation in background

(function() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Characters - mix of binary, code symbols, and katakana
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01{}[]<>/\\|=+-*&^%$#@!?';
  const charArray = chars.split('');

  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = [];

  // Initialize drops
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
  }

  // Draw function
  function draw() {
    // Semi-transparent black for fade effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      // Random character
      const text = charArray[Math.floor(Math.random() * charArray.length)];

      // Vary opacity for depth
      const opacity = Math.random() * 0.5 + 0.5;
      ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;

      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      // Reset drop randomly
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  // Animation loop
  setInterval(draw, 50);

  // Reduce intensity on scroll for performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    canvas.style.opacity = '0.03';
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      canvas.style.opacity = '0.08';
    }, 150);
  });
})();
