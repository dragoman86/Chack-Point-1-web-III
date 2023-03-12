// Importer le module nodemailer
const nodemailer = require('nodemailer');

// Configurer le transporteur de messagerie
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utiliser le service Gmail
  auth: {
    user: 'myMailPerso@gmail.com', // Votre adresse e-mail
    pass: '********' // Votre mot de passe de connexion
  }
});

// Configurer le message à envoyer
const mailOptions = {
  from: 'muMailPerso@gmail.com', // Votre adresse e-mail
  to: 'DESTINAemail@gmail.com', // Adresse e-mail du destinataire
  subject: 'Test email', // Sujet de l'e-mail
  text: 'Ceci est un e-mail de test envoyé à partir de Node.js.' // Contenu de l'e-mail
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error); // Afficher les erreurs s'il y en a
  } else {
    console.log('Email envoyé: ' + info.response); // Afficher la confirmation de l'envoi
  }
});
