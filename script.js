/*
fetch("https://autenticador.secullum.com.br/Token?grant_type=password&username=desenvolvimento05.onnetmais@gmail.com&password=D123&client_id=3", {
  method: 'POST',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const token = data.access_token;
    console.log(token);
    
// URL do endpoint protegido
const protectedUrl = "https://pontowebintegracaoexterna.secullum.com.br/IntegracaoExterna/Funcionarios";

// Cabeçalho de autenticação com o Bearer Token
const headers = {
  "Authorization": `Bearer ${token}`
};

// Fazer a solicitação GET ao endpoint protegido
return fetch(protectedUrl, { headers });
})
.then((response) => {
if (response.ok) {
  console.log(response.json());
  return response.json();
} else {
  throw new Error("Erro na solicitação do endpoint protegido");
}
})
.then((data) => {
// Você pode lidar com a resposta do endpoint protegido aqui
})
.catch((error) => {
console.error(error);
})
  .catch(error => {
    console.error(error);
  });
//Funcionando retorno do token
*/

fetch("https://autenticador.secullum.com.br/Token?grant_type=password&username=desenvolvimento05.onnetmais@gmail.com&password=D123&client_id=3", {
  method: 'POST',
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const token = data.access_token;
    console.log(token);
    
    // URL do endpoint protegido
    const protectedUrl = "https://pontowebintegracaoexterna.secullum.com.br/IntegracaoExterna/Funcionarios";

    // Cabeçalho de autenticação com o Bearer Token
    const headers = {
      "Authorization": `Bearer ${token}`
    };

    // Fazer a solicitação GET ao endpoint protegido
    return fetch(protectedUrl, { headers });
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro na solicitação do endpoint protegido");
    }
    return response.json();
  })
  .then(data => {
    // Você pode lidar com a resposta do endpoint protegido aqui
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
