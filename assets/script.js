var radioEmagrescer = document.getElementById("radio1");
var radioManterPeso = document.getElementById("radio2");
var radioEngordar = document.getElementById("radio3");
var peso = document.getElementById("peso");
var res = document.getElementById("res");

function Calcular() {
    if (radioEmagrescer.checked){
        var calorias = peso.value * 20; 
        res.innerHTML = `Você precisa ingerir <strong>${calorias} kalorias</strong> por dia para emagrecer.`;
    } else if (radioManterPeso.checked) { 
        calorias = peso.value * 30; 
        res.innerHTML = `Você precisa ingerir <strong>${calorias} kalorias </strong> por dia para manter o peso.`;
    } else {
        calorias = peso.value * 35; 
        res.innerHTML = `Você precisa ingerir <strong>${calorias} kalorias </strong> por dia para engordar.`;
    }
}
