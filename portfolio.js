document.addEventListener('DOMContentLoaded', () => {
  const text = 'CROWDFRICA';
  const typewriter = document.getElementById('typewriter');
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      typewriter.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    }
  }

  type();
});


document.addEventListener('DOMContentLoaded', () => {
  const textMarzano = 'FUNDACIÓN MARZANO';
  const typewriterMarzano = document.getElementById('typewriter-marzano');
  let charIndexMarzano = 0;

  function typeMarzano() {
    if (charIndexMarzano < textMarzano.length) {
      typewriterMarzano.textContent += textMarzano.charAt(charIndexMarzano);
      charIndexMarzano++;
      setTimeout(typeMarzano, 150);
    }
  }

  setTimeout(typeMarzano, 3000); // empieza después del primero
});
