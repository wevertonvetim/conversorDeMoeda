const personalKey = "!!aqui-entra-a-chave-pessoal";

const getValue = (url,moedaEntrada,moedaSaida)=>{

  fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let cambio = data;
    exibeResposta(data,moedaEntrada,moedaSaida)
    return cambio;
    })
  .catch(function(error) {
   return console.log(error);
  });
}

const converterMoeda=()=>{
  let moedaEntrada = document.querySelector("#moedaentrada").value;
  let moedaSaida = document.querySelector("#moedasaida").value;
  getValue(`https://free.currconv.com/api/v7/convert?q=${moedaEntrada}_${moedaSaida}&compact=ultra&apiKey=${personalKey}`,moedaEntrada,moedaSaida);
}

const exibeResposta = (taxa,moedaEntrada,moedaSaida)=>{
  let quantidade = document.querySelector("#quantidade").value; 
  let resultado = document.querySelector("#resultado");
  resultado.value = (parseInt(quantidade)*taxa[`${moedaEntrada}_${moedaSaida}`]).toFixed(2);
}

let button =  document.querySelector("#converter");
button.addEventListener('click',()=>{
  converterMoeda();
})
