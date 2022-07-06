let enviar = document.querySelector('#enviar');

function verificaEmail(emailinput) {
  if (emailinput.value.indexOf("@") == -1 || emailinput.value.indexOf("@") == 0 ||
    emailinput.value.indexOf("@") == emailinput.value.length - 1 || emailinput.value.length < 3) {
    document.querySelector('#erro').innerHTML = "Erro, email invalido";
    document.querySelector('#erro').classList.toggle('displaynone', false);
    return false;
  } else {
    return true;
  }
}

function verificaSenha(pswinput) {
  senha = pswinput.value;

  if (senha.length >= 3) return true;
  else {
    document.querySelector('#erro').innerHTML = "Erro, senha invalido";
    document.querySelector('#erro').classList.toggle('displaynone', false);
    return false;
  }
}

enviar.addEventListener('click', async function (nomeinput, emailinput, pswinput, pswinput2) {
  nomeinput = document.querySelector('#user_nome');
  emailinput = document.querySelector('#user_email');
  pswinput = document.querySelector('#user_senha');
  pswinput2 = document.querySelector('#user_senha2');
  if (loginControl) {//login
    const json = await fetch('/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: emailinput.value,
        senha: pswinput.value
      })
    });
    let data = await json.json();
    if (json.status == 200) {
      localStorage.setItem('token', data.token);
    } else {
      document.querySelector('#erro').innerHTML = "Erro na consulta a API";
      document.querySelector('#erro').classList.toggle('displaynone', false);
    }


  } else {//cadastro
    if (verificaEmail(emailinput) && verificaSenha(pswinput)) {
      const json = await fetch('signup', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({
          nome: nomeinput.value,
          email: emailinput.value,
          senha: pswinput.value,
        })
      });
      if (!json.ok) {
        document.querySelector('#erro').innerHTML = "Erro na consulta a API";
      } else {
        document.querySelector('#erro').innerHTML = "Usuario cadastrado com sucesso";
      }
      document.querySelector('#erro').classList.toggle('displaynone', false);
    }

  }
  loginController();
});

loginController();