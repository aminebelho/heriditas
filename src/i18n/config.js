// Core i18next library.
import i18n from "i18next";                      
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from "react-i18next";

i18n
  // Add React bindings as a plugin.
  .use(initReactI18next)
  // Initialize the i18next instance.
  .init({
    // Config options

    // Specifies the default language (locale) used
    // when a user visits our site for the first time.
    // We use French as the main language here.
    lng: "fr",

    // Fallback locale used when a translation is
    // missing in the active locale. Again, use your
    // preferred locale here. 
    fallbackLng: "fr",

    // Enables useful output in the browser’s
    // dev console.
    debug: true,

    // Normally, we want `escapeValue: true` as it
    // ensures that i18next escapes any code in
    // translation messages, safeguarding against
    // XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn 
    // it off in i18next.
    interpolation: {
      escapeValue: false,
    },

    // Translation messages. Add any languages
    // you want here.
    resources: {
      // French (main language)
      fr: {
        // `translation` is the default namespace.
        // More details about namespaces shortly.
        translation: {
          patriot_studio_mission: "Chez Patriot Studio, notre mission est de faire revivre le passé à travers une expérience immersive et éducative. Nous croyons que le patrimoine historique est un trésor qui mérite d'être préservé et partagé. C'est pourquoi nous avons créé une plateforme qui permet aux utilisateurs de découvrir des sites historiques comme ils ne l'ont jamais vu auparavant. On offre des visites virtuelles interactives de sites historiques de l’Algérie en trois dimensions pour vous permettre de découvrir les merveilles du passé depuis le confort de votre foyer. Que vous soyez un passionné d'histoire, un enseignant en quête de ressources pédagogiques, ou simplement curieux de découvrir le passé, rejoignez-nous et plongez dans l’histoire."
        },
      },
      // English (translation)
      en: {
        translation: {
          patriot_studio_mission: "At Patriot Studio, our mission is to bring the past to life through an immersive and educational experience. We believe that historical heritage is a treasure that deserves to be preserved and shared. That's why we've created a platform that allows users to discover historical sites like they've never seen before. We offer interactive virtual tours of historical sites in Algeria in three dimensions to allow you to explore the wonders of the past from the comfort of your home. Whether you're a history enthusiast, a teacher in search of educational resources, or simply curious to explore the past, join us and dive into history."
        },
      },
    },
  });

export default i18n;
