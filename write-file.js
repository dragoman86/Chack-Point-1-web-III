// Importer le module fs
const fs = require('fs');

// Créer un fichier et y écrire des données
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
  if (err) throw err;
  console.log('Le fichier a été créé et le message a été écrit.');
});
