enviar.addEventListener('click', async function (event_nome, event_date, event_dur) {
  event_nome = document.querySelector('#user_nome');
  event_date = document.querySelector('#event_date');
  event_dur = document.querySelector('#event_dur');

  if (optionControl == 1) {//criar
    const json = await fetch('https://peaceful-ridge-61933.herokuapp.com/Events/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({
        nome: event_nome.value,
        data: event_date.value,
        tempo: event_dur.value
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
        data: event_date.value,
        tempo: event_dur.value
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
      let nome = document.createElement("li");
      nome.innerHTML = obj.data.nome;
      let data = document.createElement("p");
      data.innerHTML = obj.data.data;
      let tempo = document.createElement("p");
      tempo.innerHTML = obj.data.tempo;
      data.appendChild(tempo);
      nome.appendChild(data);
      events.appendChild(nome);
      response.appendChild(events);
    } else {
      document.querySelector('#erro').innerHTML = "404 Event not found";
      document.querySelector('#erro').classList.toggle('displaynone', false);
    }
  }
})

verTodos.addEventListener('click', async function (event_nome, event_date, event_dur) {
  event_nome = document.querySelector('#user_nome');
  event_date = document.querySelector('#event_date');
  event_dur = document.querySelector('#event_dur');

  const reply = await fetch('https://peaceful-ridge-61933.herokuapp.com/Events/showAll');
  let obj = await reply.json();
  console.log(obj);
  if (obj.status == 200) {
    let events = document.createElement("ol");
    for (let i = 0; i < obj.data.length; i++) {
      let nome = document.createElement("li");
      nome.innerHTML = obj.data[i].nome;
      let data = document.createElement("p");
      data.innerHTML = obj.data[i].data;
      let tempo = document.createElement("p");
      tempo.innerHTML = obj.data[i].tempo;
      data.appendChild(tempo);
      nome.appendChild(data);
      events.appendChild(nome);
    }
    response.appendChild(events);
  } else {
    document.querySelector('#erro').innerHTML = "404 no Events found";
    document.querySelector('#erro').classList.toggle('displaynone', false);
  }
});