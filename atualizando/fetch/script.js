//cs é um array de cervejas

const carregarDiv = cs => {

    const div = document.getElementById("cervejasDiv")

    const itensHtml = cs.map(({ name, alcohol, style, ibu }) => `<div>${name} -- ${alcohol}-- ${style} -- ${ibu}</div> `)

    div.innerHTML = `${itensHtml.join("\n")}`

}
async function carregarCervejas() {

    try {

        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3")

        cervejas = await res.json()

        carregarDiv(cervejas)

    } catch (erro) {

        document.getElementById("cervejasDiv").innerHTML = "Fudeu..."

    }

}
async function carregarDivFinancas(bank) {
    const tabela = document.createElement('table');
    const cabecalho = tabela.createTHead();
    const linhaCabecalho = cabecalho.insertRow();
    const cabecalho1 = linhaCabecalho.insertCell();
    const cabecalho2 = linhaCabecalho.insertCell();
    cabecalho1.innerText = 'Número da Conta';
    cabecalho2.innerText = 'Nome do Banco';

    const corpo = tabela.createTBody();
    bank.forEach(({ account_number, bank_name }) => {
        const linha = corpo.insertRow();
        const celula1 = linha.insertCell();
        const celula2 = linha.insertCell();
        celula1.innerText = account_number;
        celula2.innerText = bank_name;
    });

    const div = document.getElementById('financasDiv');
    div.innerHTML = ''; 
    div.appendChild(tabela);
}
async function carregarFinancas() {
    try {
        let res = await fetch('https://random-data-api.com/api/v2/banks?size=10')
        financas = await res.json()
        carregarDivFinancas(financas)
    } catch (erro) {
        document.getElementById('financasDiv').innerHTML = 'Fudeu';
    }
}

 

let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", () => carregarCervejas())

let botaoFinancas = document.getElementById('botaoFinancas')
botaoFinancas.addEventListener('click', () => carregarFinancas())