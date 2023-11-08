document.addEventListener("DOMContentLoaded", function () {
  const keysToShow = ["Nome", "Telefone", "Cidade", "Funcao", "Nascimento"];

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
      const protectedUrl = "https://pontowebintegracaoexterna.secullum.com.br/IntegracaoExterna/Funcionarios";

      // Cabeçalho de autenticação com o Bearer Token
      const headers = {
        "Authorization": `Bearer ${token}`
      };
      return fetch(protectedUrl, { headers });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na solicitação do endpoint protegido");
      }
      return response.json();
    })
    .then(data => {
      const tbody = document.querySelector('tbody');

      // Obter o mês atual
      const currentMonth = date.getMonth() + 1;

      // Filtrar os funcionários que têm aniversário no mês atual
      const aniversariantes = data.filter(item => {
        if (item.Nascimento) {
          const isoDateString = item.Nascimento;
          const dateObj = new Date(isoDateString);
          const mesNascimento = dateObj.getMonth() + 1;
          return mesNascimento == currentMonth;
        }
        return false;
      });
      // Ordenar os aniversariantes pelo dia do mês em ordem crescente
      aniversariantes.sort((a, b) => {
        const dateA = new Date(a.Nascimento);
        const dateB = new Date(b.Nascimento);
        return dateA.getDate() - dateB.getDate();
      });

      // Exibir os funcionários aniversariantes na tabela
      aniversariantes.forEach(item => {
        const row = tbody.insertRow();

        keysToShow.forEach(key => {
          if (key === "Nascimento") {
            if (item.Nascimento) {
              const isoDateString = item.Nascimento;
              const dateObj = new Date(isoDateString);
              item.Nascimento = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;
            } else {
              item.Nascimento = '-';
            }
          }

          if (!item.Demissao) {
            const cell = row.insertCell();
            let text;

            switch (key) {
              case "Cidade":
                text = document.createTextNode(item.Cidade ? item.Cidade.Descricao : "-");
                break;
              case "Funcao":
                text = document.createTextNode(item.Funcao ? item.Funcao.Descricao : "-");
                break;
              case "Telefone":
                text = document.createTextNode(item.Telefone ? item.Telefone : (item.Celular ? item.Celular : '-'));
                break;
              default:
                text = document.createTextNode(item[key] || "-");
                break;
            }

            cell.appendChild(text);
          } else {
            // Lógica para lidar com Demissao
          }
        });
      });
    })

    .catch(error => {
      console.error("Erro ao buscar dados da API:", error);
    });
});