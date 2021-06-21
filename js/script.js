(function () {
  // chopper les elements dans le DOM
  var linkOpen = document.querySelector(".js-navopen");
  var linkClose = document.querySelector(".js-navclose");
  var mobileMenu = document.querySelector(".js-mobilemenu");

  // on met nos deux éléments sur lesquels on doit écouter et agir dans un tableau
  var allLinks = [linkOpen, linkClose];

  // parcourir le tableau
  for (var i = 0; i < allLinks.length; i++) {
    // mettre chaque fois l'élément du tableau dans une variable (plus facile que de taper chaque fois allLinks[i])
    var clickableItem = allLinks[i];

    // écouter les clicks
    clickableItem.addEventListener(
      "click",
      function (event) {
        // supprimer le comportement par défaut de l'événement (ici un lcik sur un lien qui va vers une ancre)
        event.preventDefault();

        // faire un toggle de la classe (si elle est pas là > ajouter / si elle est là > supprimer)
        mobileMenu.classList.toggle("is-shown");
        linkClose.classList.toggle("is-shown");
        linkOpen.classList.toggle("is-shown");
      },
      false
    );
  }
})();
