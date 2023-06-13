fetch('http://localhost:3000/Sobre')
.then(function(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request error');
  })
  .then(function(data) {
    let nome=data[0].Nome;
    let cargo=data[0].CargoPretendido;
    const h1 = document.createElement("h1");
    const div = document.createElement("div");
    h1.textContent= nome;
    div.textContent=cargo;

    // Encontra o elemento pai onde o trecho será adicionado
    const container = document.getElementById("header");
    // Adiciona o trecho ao elemento pai
    container.appendChild(h1);
    container.appendChild(div);

  })