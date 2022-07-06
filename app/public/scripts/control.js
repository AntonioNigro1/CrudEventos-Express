let signin = document.querySelector('#signin'),
  signup = document.querySelector('#signup');


var loginControl;

async function loginController() {
  const token = localStorage.getItem("token");
  if (token != null) {
    let reply = await fetch('' + token);
    let obj = await reply.json();
    if (obj.status == 200) {
      localStorage.setItem('token', obj.token);
      document.querySelector('#criar').classList.toggle('displaynone', false);
      document.querySelector('#deletar').classList.toggle('displaynone', false);
      document.querySelector('#ver').classList.toggle('displaynone', false);
      document.querySelector('#logout').classList.toggle('displaynone', false);
      document.querySelector('.signinbox').classList.toggle('displaynone', true);
      document.querySelector('#signin').classList.toggle('displaynone', true);
      document.querySelector('#signup').classList.toggle('displaynone', true);
    }
  } else {
    document.querySelector('#criar').classList.toggle('displaynone', true);
    document.querySelector('#deletar').classList.toggle('displaynone', true);
    document.querySelector('#ver').classList.toggle('displaynone', true);
    document.querySelector('#logout').classList.toggle('displaynone', true);
    document.querySelector('.signinbox').classList.toggle('displaynone', false);
    document.querySelector('#signin').classList.toggle('displaynone', false);
    document.querySelector('#signup').classList.toggle('displaynone', false);
  }
}


signin.addEventListener('click', function () {
  loginControl = 1;
  document.querySelector('.eventos').innerHTML = "Entre para ver Eventos!";
  document.querySelector('#user_nome').classList.toggle('displaynone', true);
  document.querySelector('#user_senha2').classList.toggle('displaynone', true);

});

signup.addEventListener('click', function () {
  loginControl = 0;
  document.querySelector('.eventos').innerHTML = "Cadastre-se!";
  document.querySelector('#user_nome').classList.toggle('displaynone', false);
  document.querySelector('#user_senha2').classList.toggle('displaynone', false);
});