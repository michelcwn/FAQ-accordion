const faqQuestions = document.querySelectorAll(".faq-item__question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    // Trouver l'élément de réponse associé
    const answer = this.nextElementSibling;

    // Trouver l'icône dans la question
    const icon = this.querySelector(".faq-item__icon");

    // Basculer la classe 'hidden' pour afficher/masquer la réponse
    answer.classList.toggle("hidden");

    // Vérifier l'icône actuelle et la changer
    if (icon.getAttribute("src") === "assets/images/icon-plus.svg") {
      icon.setAttribute("src", "assets/images/icon-minus.svg");
    } else {
      icon.setAttribute("src", "assets/images/icon-plus.svg");
    }
  });
});
