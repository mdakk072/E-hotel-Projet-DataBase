// Définition du composant racine
const app = Vue.createApp({
    data() {
      return {
        message: 'Vous êtes connecté'
      }
    },
    methods: {
      deconnexion() {
        console.log('Déconnexion');
      }
    },
    
  });
  
  // Montage de l'application
  app.mount('#app');
  