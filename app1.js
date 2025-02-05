/**************************************************************
 *       FICHIER: translate.js
 **************************************************************/

/**
 * 1) Objet qui contient toutes les traductions FR / EN
 *    correspondant aux attributs data-i18n de ton HTML.
 */
const translations = {
    en: {
      // ===== PAGE & BOUTON LANGUE =====
      "page-title": "Portfolio",
      "btn-toggle-lang": "FR/EN",
  
      // ===== HEADER =====
      "header-title": "Hi, I'm <span>AMAO Chahib.</span> A Developer.",
      "header-paragraph": `I'm a Web and application Developer, I love to create beautiful and functional websites.
      My expertise spans from initial design to final implementation, encompassing the development
      of robust features and ensuring an exceptional user experience.`,
      "header-btn-text": "Download CV",
  
      // ===== ABOUT =====
      "about-title": "About <span>me</span><span class='bg-text'>my stats</span>",
      "about-subtitle": "Information About me",
      "about-text": `I am a web and application developer, passionate about creating beautiful and functional
  websites as well as designing innovative applications that meet the specific needs of my
  clients. With expertise in design, implementation and user experience, my goal is to
  transform ideas into digital excellence through innovation and enthusiasm.
  
  At the same time, I am actively developing my skills in data analysis with the ambition of
  becoming a data science engineer. Specializing in creating data processing systems and
  machine learning models, I aim to master the art of delivering effective, data-driven
  solutions. My goal is to help businesses grow by harnessing the power of data analytics and
  artificial intelligence.
  
  My diverse interests, spanning manga, football, music, and travel, bring richness to my
  daily life. The captivating stories and unique art of mangas, coupled with the emotional
  engagement of football and the varied sounds of music, contribute to my overall enjoyment.
  Additionally, my constant curiosity fuels a passion for travel, turning each journey into a
  fulfilling adventure. These pursuits collectively create a balanced and enriching
  lifestyle, fostering curiosity and personal growth.
  `,
      "about-goals-title": "MY GOALS",
      "about-goals-text": "My mission: To support you in the realization of your digital and analytical projects by combining innovation, performance and excellence.",
      "about-download-btn-text": "Download CV",
  
      // ===== ABOUT STATS =====
      "stats-projects-nb": "6+",
      "stats-projects-txt": "Projects <br/> Completed",
      "stats-years-nb": "1+",
      "stats-years-txt": "Years of <br/> experience",
      "stats-clients-nb": "7+",
      "stats-clients-txt": "Happy <br/> Clients",
      "stats-reviews-nb": "6+",
      "stats-reviews-txt": "Customer <br/> reviews",
  
      // ===== PROFESSIONAL SKILLS =====
      "professional-skills-title": "My Skills Professional",
      "skill-gp-label": "Project Management",
      "skill-gp-percentage": "85%",
      "skill-collab-label": "Collaboration",
      "skill-collab-percentage": "90%",
      "skill-time-label": "Time Management",
      "skill-time-percentage": "80%",
      "skill-agility-label": "Agility and Adaptability",
      "skill-agility-percentage": "90%",
  
      // ===== TECHNICAL SKILLS =====
      "technical-skills-title": "My Skills Technical",
      "skill-html-label": "html5",
      "skill-html-percentage": "80%",
      "skill-css-label": "css3",
      "skill-css-percentage": "65%",
      "skill-js-label": "javascript",
      "skill-js-percentage": "70%",
      "skill-react-label": "ReactJS",
      "skill-react-percentage": "60%",
      "skill-java-label": "Java",
      "skill-java-percentage": "87%",
      "skill-python-label": "Python",
      "skill-python-percentage": "68%",
  
      // ===== TIMELINE =====
      "timeline-title": "My Timeline",
      "timeline-1-duration": "2021 - present",
      "timeline-1-title": "Formation in Computer engineer <span> - DEFITECH</span>",
      "timeline-1-text": `Soon to graduate in computer engineering, my academic journey 
  has provided me with a solid foundation in the field...`,
  
      "timeline-2-duration": "2022",
      "timeline-2-title": "C Programmer <span> - DEFITECH.</span>",
      "timeline-2-text": `During my computer engineering studies, I underwent an in-depth training 
  in the C programming language...`,
  
      "timeline-3-duration": "2022",
      "timeline-3-title": "C++ Programmer <span> - DEFITECH - Open classroom</span>",
      "timeline-3-text": `During my computer engineering studies, I underwent comprehensive 
  training in the C++ programming language...`,
  
      "timeline-4-duration": "2021 - 2023",
      "timeline-4-title": "CCNA Degree <span> - DEFITECH University</span>",
      "timeline-4-text": `During my academic journey, I completed training for the CCNA 
  (Cisco Certified Network Associate) certification...`,
  
      "timeline-5-duration": "October 2021 - June 2024",
      "timeline-5-title": `Graduate in science and technology - Software Engineering
  <span> - DEFITECH Polytechnic Institute</span>`,
      "timeline-5-text": `My background in Software Engineering allowed me to master the 
  fundamentals of programming...`,
  
      "timeline-6-duration": "December 2024 (Ongoing)",
      "timeline-6-title": `Introduction to Data Analytics <span>- IBM – Coursera</span>`,
      "timeline-6-text": `Currently enrolled in the IBM Introduction to Data Analytics course 
  on Coursera...`,
  
      // ===== PORTFOLIO =====
      "portfolio-title": "My <span>Portfolio</span><span class='bg-text'>My Work</span>",
      "portfolio-text": "Here is some of my work that I've done in various programming languages.",
      "portfolio-item-source": "Project Source",
  
      // ===== BLOGS =====
      "blogs-title": "My <span>Blogs</span><span class='bg-text'>My Blogs</span>",
      "blog-1-title": "How to Create Your Own Website",
      "blog-1-text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus...",
      "blog-2-title": "How to Become an Expert in Web Design",
      "blog-2-text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus...",
      "blog-3-title": "Become a Web Designer in 10 Days",
      "blog-3-text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus...",
      "blog-4-title": "Debbuging made easy with Web Inspector",
      "blog-4-text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus...",
      "blog-5-title": "Get started with Web Design and UI Design",
      "blog-5-text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus...",
      "blog-6-title": "This is what you need to know about Web Design",
      "blog-6-text": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus...",
  
      // ===== CONTACT =====
      "contact-title": "Contact <span>Me</span><span class='bg-text'>Contact</span>",
      "contact-subtitle": "Contact me here",
      "contact-text": `Welcome! I am delighted to provide you with a simple and fast way to communicate with me...`,
      "contact-location-label": "Location",
      "contact-location-value": ": Togo, Lomé Togo2000",
      "contact-email-label": "Email",
      "contact-email-value": ": chahibouamao95@gmail.com",
      "contact-education-label": "Education",
      "contact-education-value": ": DEFITECH University",
      "contact-phone-label": "Mobile Number",
      "contact-phone-value": ": +22891053773",
      "contact-language-label": "Languages",
      "contact-language-value": ": French, English",
      "contact-download-btn-text": "Download CV",
      "contact-submit-btn-text": "Send Message",
  
      // ===== PLACEHOLDERS FORM =====
      "contact-form-name": "YOUR NAME",
      "contact-form-email": "YOUR EMAIL",
      "contact-form-subject": "ENTER SUBJECT",
      "contact-form-message": "Message Here..."
    },
  
    fr: {
      // ===== PAGE & BOUTON LANGUE =====
      "page-title": "Portfolio",
      "btn-toggle-lang": "EN/FR",
  
      // ===== HEADER =====
      "header-title": "Salut, je suis <span>AMAO Chahib.</span> Développeur.",
      "header-paragraph": `Je suis développeur web et d'application, j'aime créer des sites Web 
  beaux et fonctionnels. Mon expertise s'étend de la conception initiale à la mise en œuvre finale, 
  incluant le développement de fonctionnalités robustes et garantissant une expérience utilisateur 
  exceptionnelle.`,
      "header-btn-text": "Télécharger CV",
  
      // ===== ABOUT =====
      "about-title": "À propos <span>de moi</span><span class='bg-text'>mes stats</span>",
      "about-subtitle": "Informations sur moi",
      "about-text": `Je suis développeur web et d'applications, passionné par la création de sites 
  web beaux et fonctionnels ainsi que par la conception d'applications innovantes répondant aux 
  besoins spécifiques de mes clients. Grâce à des compétences en design, en implémentation 
  et en expérience utilisateur, mon objectif est de transformer les idées en solutions numériques 
  excellentes, en misant sur l'innovation et l'enthousiasme.
  
  Parallèlement, je développe activement mes compétences en analyse de données avec l'ambition de 
  devenir ingénieur en data science. Spécialisé dans la création de systèmes de traitement de données 
  et de modèles d'apprentissage automatique, je vise à maîtriser l'art de fournir des solutions 
  efficaces et axées sur les données. Mon but est d'aider les entreprises à se développer en exploitant 
  la puissance de l'analyse de données et de l'intelligence artificielle.
  
  Mes centres d'intérêt variés, allant des mangas au football, en passant par la musique et les voyages, 
  apportent de la richesse à mon quotidien. Les histoires captivantes et l'art unique des mangas, 
  l'engagement émotionnel du football et la diversité musicale enrichissent mon expérience. 
  De plus, ma curiosité inlassable alimente ma passion pour les voyages, transformant chaque 
  déplacement en une aventure épanouissante. Ces activités créent un équilibre et favorisent 
  l'épanouissement personnel.
  
  `,
      "about-goals-title": "MES OBJECTIFS",
      "about-goals-text": "Ma mission : Vous accompagner dans la réalisation de vos projets numériques et analytiques en alliant innovation, performance et excellence.",
      "about-download-btn-text": "Télécharger CV",
  
      // ===== ABOUT STATS =====
      "stats-projects-nb": "6+",
      "stats-projects-txt": "Projets <br/> Terminés",
      "stats-years-nb": "1+",
      "stats-years-txt": "Années <br/> d'expérience",
      "stats-clients-nb": "7+",
      "stats-clients-txt": "Clients <br/> Satisfaits",
      "stats-reviews-nb": "6+",
      "stats-reviews-txt": "Avis <br/> Clients",
  
      // ===== PROFESSIONAL SKILLS =====
      "professional-skills-title": "Mes Compétences Professionnelles",
      "skill-gp-label": "Gestion de projet",
      "skill-gp-percentage": "85%",
      "skill-collab-label": "Collaboration",
      "skill-collab-percentage": "90%",
      "skill-time-label": "Gestion du temps",
      "skill-time-percentage": "80%",
      "skill-agility-label": "Agilité et Adaptabilité",
      "skill-agility-percentage": "90%",
  
      // ===== TECHNICAL SKILLS =====
      "technical-skills-title": "Mes Compétences Techniques",
      "skill-html-label": "html5",
      "skill-html-percentage": "80%",
      "skill-css-label": "css3",
      "skill-css-percentage": "65%",
      "skill-js-label": "javascript",
      "skill-js-percentage": "70%",
      "skill-react-label": "ReactJS",
      "skill-react-percentage": "60%",
      "skill-java-label": "Java",
      "skill-java-percentage": "87%",
      "skill-python-label": "Python",
      "skill-python-percentage": "68%",
  
      // ===== TIMELINE =====
      "timeline-title": "Mon Parcours",
      "timeline-1-duration": "2021 - présent",
      "timeline-1-title": "Formation en ingénierie informatique <span> - DEFITECH</span>",
      "timeline-1-text": `Prochainement diplômé en ingénierie informatique, mon parcours 
  universitaire m'a fourni de solides bases dans ce domaine...`,
  
      "timeline-2-duration": "2022",
      "timeline-2-title": "Programmeur C <span> - DEFITECH.</span>",
      "timeline-2-text": `Au cours de mes études en ingénierie informatique, j'ai suivi une 
  formation approfondie en langage C...`,
  
      "timeline-3-duration": "2022",
      "timeline-3-title": "Programmeur C++ <span> - DEFITECH - Open classroom</span>",
      "timeline-3-text": `J'ai également reçu une formation complète en langage C++...`,
  
      "timeline-4-duration": "2021 - 2023",
      "timeline-4-title": "Diplôme CCNA <span> - DEFITECH University</span>",
      "timeline-4-text": `Durant mon parcours académique, j'ai validé le CCNA (Cisco Certified 
  Network Associate)...`,
  
      "timeline-5-duration": "Octobre 2021 - Juin 2024",
      "timeline-5-title": `Diplômé en sciences et technologies - Ingénierie Logicielle 
  <span> - DEFITECH Polytechnic Institute</span>`,
      "timeline-5-text": `Ma spécialisation en ingénierie logicielle m'a permis de maîtriser 
  les fondamentaux de la programmation...`,
  
      "timeline-6-duration": "Décembre 2024 (En cours)",
      "timeline-6-title": `Introduction à l'analyse de données <span>- IBM – Coursera</span>`,
      "timeline-6-text": `Actuellement inscrit au cours "IBM Introduction to Data Analytics" 
  sur Coursera...`,
  
      // ===== PORTFOLIO =====
      "portfolio-title": "Mon <span>Portfolio</span><span class='bg-text'>Mes Travaux</span>",
      "portfolio-text": "Voici quelques-uns de mes travaux réalisés dans différents langages.",
      "portfolio-item-source": "Source du projet",
  
      // ===== BLOGS =====
      "blogs-title": "Mes <span>Blogs</span><span class='bg-text'>Mes Blogs</span>",
      "blog-1-title": "Comment créer votre propre site Web",
      "blog-1-text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus...",
      "blog-2-title": "Comment devenir un expert en Web Design",
      "blog-2-text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus...",
      "blog-3-title": "Devenir Web Designer en 10 jours",
      "blog-3-text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus...",
      "blog-4-title": "Le débogage facile avec Web Inspector",
      "blog-4-text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus...",
      "blog-5-title": "Commencez avec le Web Design et l'UI Design",
      "blog-5-text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus...",
      "blog-6-title": "Ce que vous devez savoir sur le Web Design",
      "blog-6-text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus...",
  
      // ===== CONTACT =====
      "contact-title": "Contactez <span>Moi</span><span class='bg-text'>Contact</span>",
      "contact-subtitle": "Contactez-moi ici",
      "contact-text": `Bienvenue ! Je suis ravi de vous proposer un moyen simple et rapide de me contacter...`,
      "contact-location-label": "Localisation",
      "contact-location-value": ": Togo, Lomé Togo2000",
      "contact-email-label": "Email",
      "contact-email-value": ": chahibouamao95@gmail.com",
      "contact-education-label": "Éducation",
      "contact-education-value": ": DEFITECH University",
      "contact-phone-label": "Numéro de téléphone",
      "contact-phone-value": ": +22891053773",
      "contact-language-label": "Langues",
      "contact-language-value": ": Français, Anglais",
      "contact-download-btn-text": "Télécharger CV",
      "contact-submit-btn-text": "Envoyer un message",
  
      // ===== PLACEHOLDERS FORM =====
      "contact-form-name": "VOTRE NOM",
      "contact-form-email": "VOTRE EMAIL",
      "contact-form-subject": "SUJET",
      "contact-form-message": "Votre message..."
    },
  };
  
  
  /**
   * 2) Langue courante. On peut choisir "en" ou "fr" par défaut.
   */
  let currentLang = "en";
  
  
  /**
   * 3) Fonction qui met à jour tout le contenu de la page
   *    selon la langue choisie (innerHTML & placeholders).
   */
  function updateTexts() {
    // 3.1) Met à jour tous les éléments ayant data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translation = translations[currentLang][key];
      if (translation) {
        el.innerHTML = translation; // Si HTML (ex: <span>)
      }
    });
  
    // 3.2) Met à jour les placeholders
    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach((input) => {
      const phKey = input.getAttribute("data-i18n-placeholder");
      const translation = translations[currentLang][phKey];
      if (translation) {
        input.placeholder = translation;
      }
    });
  
    // 3.3) Met à jour le titre de la page (balise <title>)
    const pageTitle = translations[currentLang]["page-title"];
    if (pageTitle) {
      document.title = pageTitle;
    }
  }
  
  
  /**
   * 4) Fonction pour basculer la langue (en <-> fr)
   */
  function toggleLanguage() {
    currentLang = (currentLang === "en") ? "fr" : "en";
    updateTexts();
  
    // Optionnel: mémoriser la langue dans le localStorage
    // localStorage.setItem("preferredLang", currentLang);
  }
  
  
  /**
   * 5) Initialisation au chargement de la page
   */
  document.addEventListener("DOMContentLoaded", () => {
    // Optionnel: récupérer la langue depuis le localStorage
    // const storedLang = localStorage.getItem("preferredLang");
    // if (storedLang) currentLang = storedLang;
  
    updateTexts(); // Met à jour les textes pour la langue par défaut
  
    // Installation du listener sur le bouton de bascule
    const langBtn = document.getElementById("language-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", toggleLanguage);
    }
  });
  