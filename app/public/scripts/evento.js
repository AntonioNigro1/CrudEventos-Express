let response = document.querySelector('.response'),
  limpar = document.querySelector('#limpar');

enviar.addEventListener('click', async function (event_nome, event_date, event_ini, event_fim, event_des) {
  event_nome = document.querySelector('#user_nome');
  event_date = document.querySelector('#event_date');
  event_ini = document.querySelector('#event_ini');
  event_fim = document.querySelector('#event_fim');
  event_des = document.querySelector('#event_des');

  if (optionControl == 1) {//criar
    const json = await fetch('https://peaceful-ridge-61933.herokuapp.com/Events/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({
        nome: event_nome.value,
        data: event_date.value,
        inicio: event_ini.value,
        fim: event_fim.value,
        descricao: event_desc.value
      })

    });
    if (!json.ok) {
      document.querySelector('#erro').innerHTML = "Erro ao criar evento";
    } else {
      document.querySelector('#erro').innerHTML = "Evento criado com sucesso";
    }
    document.querySelector('#erro').classList.toggle('displaynone', false);
  }
  else if (optionControl == 2) {//deletar
    const json = await fetch('https://peaceful-ridge-61933.herokuapp.com/Events/delete', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({
        nome: event_nome.value,
        data: event_date.value
      })

    });
    if (!json.ok) {
      document.querySelector('#erro').innerHTML = "Erro ao deletar evento";
    } else {
      document.querySelector('#erro').innerHTML = "Evento deletado com sucesso";
    }
    document.querySelector('#erro').classList.toggle('displaynone', false);
  }
  else if (optionControl == 3) {//procurar
    const reply = await fetch('https://peaceful-ridge-61933.herokuapp.com/Events/find' + event_nome.value);
    let obj = await reply.json();
    console.log(obj);
    if (obj.status == 200) {
      let events = document.createElement("ol");
      let nome = document.createElement("p");
      nome.innerHTML = "Titulo: " + obj.data.nome;
      let data = document.createElement("p");
      data.innerHTML = "Data: " + obj.data.data;
      let inicio = document.createElement("p");
      tempo.innerHTML = "Inicio: " + obj.data.inicio;
      let fim = document.createElement("p");
      tempo.innerHTML = "Fim: " + obj.data.fim;
      let descricao = document.createElement("p");
      tempo.innerHTML = "Descricao: " + obj.data.descricao;
      fim.appendChild(descricao);
      inicio.appendChild(fim);
      data.appendChild(inicio);
      nome.appendChild(data);
      events.appendChild(nome);
      response.appendChild(events);
    } else {
      document.querySelector('#erro').innerHTML = "404 Event not found";
      document.querySelector('#erro').classList.toggle('displaynone', false);
    }
  }
})

verTodos.addEventListener('click', async function (event_nome, event_date, event_ini, event_fim, event_des) {
  event_nome = document.querySelector('#user_nome');
  event_date = document.querySelector('#event_date');
  event_ini = document.querySelector('#event_ini');
  event_fim = document.querySelector('#event_fim');
  event_des = document.querySelector('#event_des');

  const reply = await fetch('https://peaceful-ridge-61933.herokuapp.com/Events/showAll');
  let obj = await reply.json();
  console.log(obj);
  if (obj.status == 200) {
    let events = document.createElement("ol");
    for (let i = 0; i < obj.data.length; i++) {
      let events = document.createElement("ol");
      let nome = document.createElement("p");
      nome.innerHTML = "Titulo: " + obj.data[i].nome;
      let data = document.createElement("p");
      data.innerHTML = "Data: " + obj.data[i].data;
      let inicio = document.createElement("p");
      tempo.innerHTML = "Inicio: " + obj.data[i].inicio;
      let fim = document.createElement("p");
      tempo.innerHTML = "Fim: " + obj.data[i].fim;
      let descricao = document.createElement("p");
      tempo.innerHTML = "Descricao: " + obj.data[i].descricao;
      fim.appendChild(descricao);
      inicio.appendChild(fim);
      data.appendChild(inicio);
      nome.appendChild(data);
      events.appendChild(nome);
      response.appendChild(events);
    }

  } else {
    document.querySelector('#erro').innerHTML = "404 no Events found";
    document.querySelector('#erro').classList.toggle('displaynone', false);
  }
});

limpar.addEventListener('click', function () {
  response.innerHTML = '';
});