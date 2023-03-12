// Importer le module HTTP
const http = require('http');

// Configurer le port
const port = 3000;

// Créer le serveur
const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Démarrer le serveur
server.listen(port, function() {
  console.log(`Le serveur écoute sur le port ${port}`);
});
