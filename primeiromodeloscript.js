//Ultima versão, consumindo api local de teste do Daniel
document.addEventListener("DOMContentLoaded", function() {
    const apiURL = "http://192.168.101.126:3000/applicant/";

    // Lista de chaves que você deseja exibir
    const keysToShow = ["name", "phone", "addressId", "functionId", "birthDate"];

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('tbody');

            data.forEach(item => {
                const row = tbody.insertRow();

                keysToShow.forEach(key => {
                    const cell = row.insertCell();
                    const text = document.createTextNode(item[key]);
                    cell.appendChild(text);
                });
            });
        })
        .catch(error => {
            console.error("Erro ao buscar dados da API:", error);
        });
});
