var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato', function(req, res, next) {
  res.render('contact', {});
});

router.post('/contato', function (req, res) {
  var smtpTrans = nodemailer.createTransport(
    'smtps://pracadasprofissoes%40gmail.com:senhapadrao@smtp.gmail.com'
  );
  //Mail options
  var mailOpts = {
      from: req.body.email,
      to: 'pracadasprofissoes@gmail.com',
      subject: 'Formulário de Contato: ' + req.body.name,
      text: req.body.message + '\n\n' +
        '--------------------------------------------------------------\n' +
        'Enviado por ' + req.body.name + ' <' + req.body.email + '>\n' +
        new Date().toLocaleString()
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
      if (error) {
          res.render('error', {message: error.message, error: error})
      } else {
          res.redirect('/', {messageSent: true});
      }
  });
});


module.exports = router;
