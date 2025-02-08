document.addEventListener('DOMContentLoaded', function () {
    const elementos = document.querySelectorAll('.elemento');
    const options = {
      threshold: 0.5 // El 50% del elemento debe ser visible para activarse
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);
  
    elementos.forEach(elemento => {
      observer.observe(elemento);
    });
  });
  