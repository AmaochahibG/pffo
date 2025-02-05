(function () {
    // Gestion des contrôles de navigation
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function () {
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
      });
    });
    // Gestion du thème
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  })();


  
  document.addEventListener("DOMContentLoaded", function () {
    // Gestion des messages d'alerte via les paramètres d'URL
    const params = new URLSearchParams(window.location.search);
    if (params.has("success")) {
      alert("✅ Votre message a été envoyé avec succès !");
      history.replaceState(null, "", window.location.pathname);
    } else if (params.has("error")) {
      if (params.get("error") === "missing_fields") {
        alert("⚠️ Veuillez remplir tous les champs du formulaire.");
      } else if (params.get("error") === "invalid_email") {
        alert("⚠️ Veuillez entrer une adresse email valide.");
      } else if (params.get("error") === "short_message") {
        alert("⚠️ Votre message est trop court !");
      } else if (params.get("error") === "db_error") {
        alert("❌ Erreur avec la base de données.");
      }
      history.replaceState(null, "", window.location.pathname);
    }
});