//Teste 4

var SP = 67.83643
var RJ = 36.67866
var MG = 29.22988
var ES = 27.1654
var Outros = 19.84953

// Calculando o total mensal da empresa
var total = SP + RJ + MG + ES + Outros

// Calculando o percentual de cada estado e outros
var SP_percentual = (SP / total) * 100
var RJ_percentual = (RJ / total) * 100
var MG_percentual = (MG / total) * 100
var ES_percentual = (ES / total) * 100
var Outros_percentual = (Outros / total) * 100

// Imprimindo o percentual de cada estado e outros
console.log("SP: " + SP_percentual.toFixed(2) + "%")
console.log("RJ: " + RJ_percentual.toFixed(2) + "%")
console.log("MG: " + MG_percentual.toFixed(2) + "%")
console.log("ES: " + ES_percentual.toFixed(2) + "%")
console.log("Outros: " + Outros_percentual.toFixed(2) + "%")
