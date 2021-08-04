const moeda={
  USD: {BRL: 5.2252, EUR: 0.8414, USD: 1},
  EUR: {BRL: 6.2162, USD: 1.1864, EUR: 1},
  BRL: {EUR: 0.16, USD: 0.190205, BRL: 1},

}

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=2976487401b616aaf71d

const getValue = (url)=>{
  let request = new XMLHttpRequest();
  request.open("GET",url,false)
  request.send();
  return request.responseText;
}

function converterMoeda(){
  let moedaEntrada = document.querySelector("#moedaentrada").value;
  let moedaSaida = document.querySelector("#moedasaida").value;
  let quantidade = document.querySelector("#quantidade").value; 
  let resultado = document.querySelector("#resultado");
 
  let cambio = getValue(`https://free.currconv.com/api/v7/convert?q=${moedaEntrada}_${moedaSaida}&compact=ultra&apiKey=2976487401b616aaf71d`);
  let taxa = JSON.parse(cambio);

  resultado.value = (parseInt(quantidade)*taxa[`${moedaEntrada}_${moedaSaida}`]).toFixed(2);
}

let button =  document.querySelector("#converter");
button.addEventListener('click',()=>{
  converterMoeda();
})


/*function trocaMoeda(){
let seletor1= document.getElementById("seletor1");
let seletor2=document.getElementById("seletor2");
let aux=seletor1.value;
seletor1.value=seletor2.value;
seletor2.value=aux;
converterMoeda();
}

//let animacaoImg = document.querySelector("img");
 // animacaoImg.addEventListener('click', function() {
  //this.classList.add('girar')
//});

function giraImg(){
  let animacaoImg = document.querySelector("img");
  animacaoImg.classList.add("girar");
  setTimeout(function(){
    animacaoImg.classList.remove("girar");
  },2000);
}
*/


  
