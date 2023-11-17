let meteoroTrimestre1 = "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoroTrimestre2 =  "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoroTrimestre3 = "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let meteoroTrimestre4 =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";


let dataAtual = new Date();
let mesAtual = dataAtual.getMonth();


if(mesAtual == 0 || mesAtual == 1 || mesAtual == 2) {
    console.log("As chuvas de meteoros do primeiro trimestre são: \n\n" + meteororimestre1);
}

else if(mesAtual == 3 || mesAtual == 4 || mesAtual == 5) {
    console.log("As chuvas de meteoros do segundo trimestre sâo: \n\n" + meteoroTrimestre2);
}

else if(mesAtual == 6 || mesAtual == 7 || mesAtual == 8) {
    console.log("AS chuves de meteoros do terceiro trimestre sâo: \n\n" + meteoroTrimestre3);
}

else if(mesAtual == 9 || mesAtual == 10 || mesAtual == 11) {
    console.log("As chuvas de meteoros do quarto trimestre sâo: \n\n" + meteoroTrimestre4);
}

else {
    console.log("Nenhuma chuva de meteoros no período informado.");
}