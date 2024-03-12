function AnimateElementAuScroll(selecteurcss, multiple) {
    document.addEventListener("DOMContentLoaded", function() {
      var elements = multiple ? document.querySelectorAll(selecteurcss) : [document.querySelector(selecteurcss)];
  
      function handleScroll() {
        elements.forEach(function(element) {
          var position = element.getBoundingClientRect();
  
         
                       // Vérifier si l'élément est dans la vue et si l'animation n'a pas encore été déclenchée
          if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add("animate");
          }else {
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
  
function scrollToTopButtonShow() {

  document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopButton = document.getElementById('scrollToTop');
  
    window.addEventListener('scroll', function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 || window.scrollY > 300) { //  300  la position à partir de laquelle le bouton est affiché
            scrollToTopButton.style.display = 'inline-flex';
        } else if(document.body.scrollTop < 300 || document.documentElement.scrollTop < 300 || window.scrollY < 300) {
            scrollToTopButton.style.display = 'none';
        }
    });
  
    scrollToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
       window.scrollTo(0, 0);
    });
  });
  }



function copyToClipboard(id) {
  document.addEventListener('DOMContentLoaded', function () {
    var elementToCopy = document.getElementById(id);
  
    elementToCopy.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Créer un élément temporaire (input) pour copier le numéro de téléphone
        var tempInput = document.createElement('input');
        tempInput.setAttribute('value', elementToCopy.getAttribute('href'));
  
        // Ajouter l'élément temporaire à la DOM
        document.body.appendChild(tempInput);
  
        // Sélectionner et copier le contenu de l'élément temporaire
        tempInput.select();
        document.execCommand('copy');
  
        // Supprimer l'élément temporaire de la DOM
        document.body.removeChild(tempInput);
  
        // Vous pouvez également ajouter une confirmation ou d'autres actions ici
        alert('Copié avec succes dans le presse-papiers : ' + elementToCopy.textContent);
    });
  }); 
}




  export { AnimateElementAuScroll, scrollToTopButtonShow,copyToClipboard };

  // Exemple d'appel de la fonction avec querySelectorAll
  //AnimateElementAuScroll(".Technical-bars .bar .progress-line span", true);