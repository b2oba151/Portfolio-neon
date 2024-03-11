function AnimateElementAuScroll(selecteurcss, multiple) {
    document.addEventListener("DOMContentLoaded", function() {
      var elements = multiple ? document.querySelectorAll(selecteurcss) : [document.querySelector(selecteurcss)];
  
      function handleScroll() {
        elements.forEach(function(element) {
          var position = element.getBoundingClientRect();
  
          // Vérifier si l'élément est dans la vue et si l'animation n'a pas encore été déclenchée
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add("animate");
          } else {
            //pour faire un effet toggle
            //element.classList.remove("animate");
          }
        });
      }
  
      // Ajouter le gestionnaire d'événements pour le scroll
      window.addEventListener("scroll", handleScroll);
  
      // Appeler handleScroll une fois au chargement initial de la page
      handleScroll();
    });
  }
  
  export { AnimateElementAuScroll };

  // Exemple d'appel de la fonction avec querySelectorAll
  //AnimateElementAuScroll(".Technical-bars .bar .progress-line span", true);