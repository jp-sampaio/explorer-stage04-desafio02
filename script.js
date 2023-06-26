/*
  Nesse desafio você irá criar uma lista de ESTUDANTES e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

  Depois de criada a lista:

    - [ ]  Crie uma function que irá calcular a média das notas de cada aluno;
    - [ ]  Supondo que a média, para esse concurso é 7, verifique SE cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

  Dica: para quebrar uma linha no alert() basta usar um \n na mensagem. 
*/

// 1° passo - Criar a lista de estudante com as chaves recomendadas;
const students = [
  {
    name: "Mateus",
    scoreOne: 8,
    scoreTwo: 7,
    gender: "masculino",
  },
  {
    name: "Lucas",
    scoreOne: 10,
    scoreTwo: 9,
    gender: "masculino",
  },
  {
    name: "Fernanda",
    scoreOne: 7,
    scoreTwo: 6,
    gender: "feminino",
  },
  {
    name: "Marta",
    scoreOne: 7,
    scoreTwo: 7,
    gender: "feminino",
  },
  {
    name: "Paulo",
    scoreOne: 5,
    scoreTwo: 3,
    gender: "masculino",
  },
];

// 2° passo - Criar uma function que irá calcular a média das notas de cada aluno;
function averageStudent(scoreOne, scoreTwo) {
  let average = ((scoreOne + scoreTwo) / 2).toFixed(1);
  return average;
}

// 3° passo - Verifique SE cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela, média igual a 7.
function passOrFail(average, name, gender) {
  let message = average >= 7
      ? `Parabéns ${name}! Você foi aprovad${gender} no concurso!`
      : `Não foi dessa vez ${name}! Tente novamente!`;
  return message;
}

// Passo extra - Verificar o gênero de cada estudante;
function genderStudent (gender) {
  let maleOrFemale = gender === "masculino" ? "o" : "a";
  return maleOrFemale;
}

// 4° passo - Pegar o nome, nota 1 e nota 2 de cada aluno;
for (let student of students) {
  let averageFinal = averageStudent(student.scoreOne, student.scoreTwo);
  let aOrO = genderStudent(student.gender);
  alert(`
    A média d${aOrO} alun${aOrO} ${student.name} é: ${averageFinal}
     ${passOrFail(averageFinal, student.name, aOrO)}
  `);
}