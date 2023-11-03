const meuEvento = require('./script.js').meuEvento;

// Ouvir o evento personalizado
meuEvento.on('dadosCarregados', (data) => {
  // Filtrar as informações desejadas
  const nome = data.Nome;
  const telefone = data.Telefone;
  const nascimento = data.Nascimento;
  const cidade = data.Cidade.Descricao;
  const funcao = data.Funcao.Descricao;

  // Exibir as informações no console (ou em outro lugar, conforme necessário)
  console.log('Nome:', nome);
  console.log('Telefone:', telefone);
  console.log('Nascimento:', nascimento);
  console.log('Cidade:', cidade);
  console.log('Funcao:', funcao);
});
