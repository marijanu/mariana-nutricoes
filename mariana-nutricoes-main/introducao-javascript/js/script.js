console.log("O arquivo separado está funcionando");

//----------Daqui para baixo começa o código 

//alteração do título 
//console.log(document);
//cria a variável titulo e armazena o conteudo da classe
let titulo = document.querySelector(".titulo");
//console.log(titulo);
//atribuição de um novo valor na veriável titulo 
titulo.textContent = "Fake Natty Nutrição!";

//alteração da tabela
let paciente = document.querySelector("#primeiro-paciente")

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura")

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
console.log(imc);