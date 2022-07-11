var signin = document.querySelector('#signin'),
  signup = document.querySelector('#signup'),
  criar = document.querySelector('#criar'),
  deletar = document.querySelector('#deletar'),
  verTodos = document.querySelector('#verTodos'),
  procurar = document.querySelector('#procurar'),
  logout = document.querySelector('#logout');

var loginControl = 1,
  optionControl;

async function loginController() {
  const token = localStorage.getItem("token");
  if (token != null) {
    //let reply = await fetch('https://peaceful-ridge-61933.herokuapp.com/Users/' + token);
    //let obj = await reply.json();
    //if (obj.status == 200) {
    //localStorage.setItem('token', obj.token);
    document.querySelector('.eventos').innerHTML = "Bem vindo, selecione uma opção";
    document.querySelector('#criar').classList.toggle('displaynone', false);
    document.querySelector('#deletar').classList.toggle('displaynone', false);
    document.querySelector('#verTodos').classList.toggle('displaynone', false);
    document.querySelector('#logout').classList.toggle('displaynone', false);
    document.querySelector('#procurar').classList.toggle('displaynone', false);
    document.querySelector('.inputbox').classList.toggle('displaynone', true);
    document.querySelector('#signin').classList.toggle('displaynone', true);
    document.querySelector('#signup').classList.toggle('displaynone', true);
    document.querySelector('#entrar').classList.toggle('displaynone', true);
    document.querySelector('#enviar').classList.toggle('displaynone', false);
    //}
  } else {
    document.querySelector('#criar').classList.toggle('displaynone', true);
    document.querySelector('#deletar').classList.toggle('displaynone', true);
    document.querySelector('#verTodos').classList.toggle('displaynone', true);
    document.querySelector('#logout').classList.toggle('displaynone', true);
    document.querySelector('#procurar').classList.toggle('displaynone', true);
    document.querySelector('.inputbox').classList.toggle('displaynone', false);
    document.querySelector('#signin').classList.toggle('displaynone', false);
    document.querySelector('#signup').classList.toggle('displaynone', false);
    document.querySelector('#entrar').classList.toggle('displaynone', false);
    document.querySelector('#enviar').classList.toggle('displaynone', true);
  }
}


signin.addEventListener('click', function () {
  loginControl = 1;
  document.querySelector('.eventos').innerHTML = "Entre para ver Eventos!";
  document.querySelector('#user_nome').classList.toggle('displaynone', true);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);
  document.querySelector('#entrar').classList.toggle('displaynone', false);
});

signup.addEventListener('click', function () {
  loginControl = 0;
  document.querySelector('.eventos').innerHTML = "Cadastre-se!";
  document.querySelector('#user_nome').classList.toggle('displaynone', false);
  document.querySelector('#user_senha2').classList.toggle('displaynone', false);
  document.querySelector('#entrar').classList.toggle('displaynone', false);
});

criar.addEventListener('click', function () {
  document.querySelector('.response').innerHTML = '';
  document.querySelector('#erro').innerHTML = '';
  optionControl = 1;
  document.querySelector('.eventos').innerHTML = "Crie um evento";
  document.querySelector('.inputbox').classList.toggle('displaynone', false);
  document.querySelector('#user_nome').classList.toggle('displaynone', false);
  document.querySelector('#user_email').classList.toggle('displaynone', true);
  document.querySelector('#user_senha').classList.toggle('displaynone', true);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);
  document.querySelector('#event_date').classList.toggle('displaynone', false);
  document.querySelector('#event_ini').classList.toggle('displaynone', false);
  document.querySelector('#event_fim').classList.toggle('displaynone', false);
  document.querySelector('#event_des').classList.toggle('displaynone', false);
  document.querySelector('#enviar').classList.toggle('displaynone', false);
  document.querySelector('#limpar').classList.toggle('displaynone', true);
});

deletar.addEventListener('click', function () {
  document.querySelector('.response').innerHTML = '';
  document.querySelector('#erro').innerHTML = '';
  optionControl = 2;
  document.querySelector('.eventos').innerHTML = "Delete um evento";
  document.querySelector('.inputbox').classList.toggle('displaynone', false);
  document.querySelector('#user_nome').classList.toggle('displaynone', false);
  document.querySelector('#user_email').classList.toggle('displaynone', true);
  document.querySelector('#user_senha').classList.toggle('displaynone', true);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);
  document.querySelector('#event_date').classList.toggle('displaynone', false);
  document.querySelector('#event_ini').classList.toggle('displaynone', true);
  document.querySelector('#event_fim').classList.toggle('displaynone', true);
  document.querySelector('#event_des').classList.toggle('displaynone', true);
  document.querySelector('#enviar').classList.toggle('displaynone', false);
  document.querySelector('#limpar').classList.toggle('displaynone', true);
});

procurar.addEventListener('click', function () {
  document.querySelector('.response').innerHTML = '';
  document.querySelector('#erro').innerHTML = '';
  optionControl = 3;
  document.querySelector('.eventos').innerHTML = "Digite o nome do evento";
  document.querySelector('.inputbox').classList.toggle('displaynone', false);
  document.querySelector('#user_nome').classList.toggle('displaynone', false);
  document.querySelector('#user_email').classList.toggle('displaynone', true);
  document.querySelector('#user_senha').classList.toggle('displaynone', true);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);
  document.querySelector('#event_date').classList.toggle('displaynone', true);
  document.querySelector('#event_ini').classList.toggle('displaynone', true);
  document.querySelector('#event_fim').classList.toggle('displaynone', true);
  document.querySelector('#event_des').classList.toggle('displaynone', true);
  document.querySelector('#enviar').classList.toggle('displaynone', false);
  document.querySelector('#limpar').classList.toggle('displaynone', false);
});

verTodos.addEventListener('click', function () {
  document.querySelector('.response').innerHTML = '';
  document.querySelector('#erro').innerHTML = '';
  document.querySelector('.eventos').innerHTML = "Eventos:";
  document.querySelector('.inputbox').classList.toggle('displaynone', true);
  document.querySelector('#user_nome').classList.toggle('displaynone', true);
  document.querySelector('#user_email').classList.toggle('displaynone', true);
  document.querySelector('#user_senha').classList.toggle('displaynone', true);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);
  document.querySelector('#event_date').classList.toggle('displaynone', true);
  document.querySelector('#event_ini').classList.toggle('displaynone', true);
  document.querySelector('#event_fim').classList.toggle('displaynone', true);
  document.querySelector('#event_des').classList.toggle('displaynone', true);
  document.querySelector('#enviar').classList.toggle('displaynone', true);
  document.querySelector('#limpar').classList.toggle('displaynone', false);
});

logout.addEventListener('click', function () {
  document.querySelector('.response').innerHTML = '';
  document.querySelector('.inputbox').classList.toggle('displaynone', false);
  document.querySelector('#user_nome').classList.toggle('displaynone', true);
  document.querySelector('#user_email').classList.toggle('displaynone', false);
  document.querySelector('#user_senha').classList.toggle('displaynone', false);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);
  document.querySelector('#event_date').classList.toggle('displaynone', true);
  document.querySelector('#event_ini').classList.toggle('displaynone', true);
  document.querySelector('#event_fim').classList.toggle('displaynone', true);
  document.querySelector('#event_des').classList.toggle('displaynone', true);
  document.querySelector('#enviar').classList.toggle('displaynone', false);
  document.querySelector('#logout').classList.toggle('displaynone', true);
  document.querySelector('#limpar').classList.toggle('displaynone', true);
  localStorage.removeItem('token');
  loginController();
});