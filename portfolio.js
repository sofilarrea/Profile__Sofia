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


document.addEventListener('DOMContentLoaded', () => {
  const textReintegration = 'CACIQUES';
  const typewriterReintegration = document.getElementById('typewriter-reintegration');
  let charIndexReintegration = 0;

  function typeReintegration() {
    if (charIndexReintegration < textReintegration.length) {
      typewriterReintegration.textContent += textReintegration.charAt(charIndexReintegration);
      charIndexReintegration++;
      setTimeout(typeReintegration, 150);
    }
  }

  setTimeout(typeReintegration, 6000); // empieza después de los otros
});

document.addEventListener('DOMContentLoaded', () => {
  const textVizcaino = 'VIZCAÍNO ABOGADOS';
  const typewriterVizcaino = document.getElementById('typewriter-vizcaino');
  let charIndexVizcaino = 0;

  function typeVizcaino() {
    if (charIndexVizcaino < textVizcaino.length) {
      typewriterVizcaino.textContent += textVizcaino.charAt(charIndexVizcaino);
      charIndexVizcaino++;
      setTimeout(typeVizcaino, 150);
    }
  }

  setTimeout(typeVizcaino, 9000); // empieza después de los otros
});
