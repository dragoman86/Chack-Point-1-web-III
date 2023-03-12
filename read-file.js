// Importer le module fs
const fs = require('fs');

// Lire le contenu du fichier
fs.readFile('hello.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
