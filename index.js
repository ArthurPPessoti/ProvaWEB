document.getElementById('enviar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    var media = (nota1 + nota2) / 2;
    var situacao = (media > 5) ? 'Aprovado' : 'Reprovado';

    var tabela = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var headerRow = thead.insertRow();
    var headers = ["Nome", "Matrícula", "Nota 1", "Nota 2", "Média", "Situação"];
    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = headers[i];
        headerRow.appendChild(headerCell);
    }

    var row = tbody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = nome;
    cell2.innerHTML = matricula;
    cell3.innerHTML = nota1;
    cell4.innerHTML = nota2;
    cell5.innerHTML = media.toFixed(2);
    cell6.innerHTML = situacao;

    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    document.getElementById('tabela-container').appendChild(tabela);
});