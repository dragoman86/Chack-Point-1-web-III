// Importer le module generate-password
const generatePassword = require('generate-password');

// Créer une fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Longueur du mot de passe
    numbers: true, // Utiliser des chiffres
    symbols: true, // Utiliser des caractères spéciaux
    uppercase: true, // Utiliser des majuscules
    strict: true // Respecter tous les critères précédents
  });
  console.log(password); // Afficher le mot de passe généré
}

// Appeler la fonction pour générer un mot de passe aléatoire
generateRandomPassword();
