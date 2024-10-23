    const form = document.getElementById('form-list');
    const tabelaCorpo = document.getElementById('tabela-corpo');
    let linhas = '';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputProduto = document.getElementById('produto').value;
        const inputQuantidade = document.getElementById('quantidade').value;

        let linha = `<tr>
                        <td>${inputProduto}</td>
                        <td>${inputQuantidade}</td>
                    </tr>`;

        linhas += linha;
        tabelaCorpo.innerHTML = linhas;


        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
    });
