// http://jscompress.com

var cadastro=Schools.findOne({createdBy:Meteor.userId()});
var inscricao=Entries.findOne({createdBy:Meteor.userId()});

var cadastrado = $.isEmptyObject(cadastro) == false;
var inscrito = $.isEmptyObject(inscricao) == false;

var turmas_vazias = cadastrado && cadastro.classes.length == 0;

turmas_vazias && $('.turmas_vazias').removeClass('hide');
!cadastrado && $('.nao_cadastrado').removeClass('hide');
cadastrado && !inscrito && $('.cadastrado_nao_inscrito').removeClass('hide');
cadastrado && inscrito && $('.cadastrado_inscrito').removeClass('hide');