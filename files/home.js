Template.TEMPLATE_NAME.events({
  "click sendmail": function(e, t) {
    var email = t.find('#email').value.trim();
    var name = t.find('#name').value.trim();
    var msg = t.find('#msg').value;

    if (Meteor.isServer) {
      Email.send({
        from: email,
        to: "pracadasprofissoes@gmail.com",
        subject: "Formulário de Contato: " + name,
        text: msg + 
        "\n\n----------------------------------------------------------\n" +
        "Enviado por " + name + " <" + email + ">\n" +
        new Date().toLocaleString()
      });
    }
  }
});

Template.TEMPLATE_NAME.helpers({
});
