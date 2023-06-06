const QTD_ATLETAS = parseInt(prompt("Qual a quantidade de atletas?"));

let nome,
  sexo,
  altura,
  peso,
  somaPeso = 0,
  maiorAltura = 0,
  nomeMaisAlto = "",
  qtdMas = 0,
  qtdFem = 0,
  somaAlturaFem = 0,
  porcentMas = 0,
  alturaMediaFem = 0;

for (let i = 0; i < QTD_ATLETAS; i++) {
  alert(`DIGITE OS DADOS DO ATLETA NÚMERO ${i + 1} A SEGUIR:`);

  nome = prompt("Nome:");

  sexo = prompt("Sexo:");
  while (sexo != "M" && sexo != "F") {
    sexo = prompt("Valor invalido!\nFavor digitar F ou M: ");
  }

  altura = parseFloat(prompt("Altura:"));
  while (altura <= 0) {
    altura = parseFloat(
      prompt("Valor invalido!\nFavor digitar um valor positivo:")
    );
  }

  peso = parseFloat(prompt("Peso:"));
  while (peso <= 0) {
    peso = parseFloat(
      prompt("Valor invalido!\nFavor digitar um valor positivo:")
    );
  }

  somaPeso += peso;

  if (altura > maiorAltura) {
    maiorAltura = altura;
    nomeMaisAlto = nome;
  }

  if (sexo === "F") {
    qtdFem++;
    somaAlturaFem += altura;
  } else {
    qtdMas++;
  }
}

const PESO_MEDIO = somaPeso / QTD_ATLETAS;

if (qtdMas > 0) {
  porcentMas = `Porcentagem de homens: ${((qtdMas / QTD_ATLETAS) * 100).toFixed(
    1
  )} %`;
} else {
  porcentMas = "Não há homens cadastrados";
}

if (qtdFem > 0) {
  alturaMediaFem = `Altura média das mulheres: ${(
    somaAlturaFem / qtdFem
  ).toFixed(2)} m`;
} else {
  alturaMediaFem = "Não há mulheres cadastradas";
}

alert(
  `RELATÓRIO:\nPeso médio dos atletas: ${PESO_MEDIO.toFixed(
    2
  )} kg\nAtleta mais alto: ${nomeMaisAlto}\n${porcentMas}\n${alturaMediaFem}`
);
