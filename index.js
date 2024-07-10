const questions = [
  {
    id: '1',
    question:
      'A massa atômica do cobre é 64 u. Determine a quantidade de cobre presente em 25,6 g deste elemento?',
    image: './public/images/fig1.png',
    options: [
      { isCorrect: true, answer: '0,4 mol' },
      { isCorrect: false, answer: '0,04 mol' },
      { isCorrect: false, answer: '4 mol' },
      { isCorrect: false, answer: '2 mol' },
    ],
  },
  {
    id: '2',
    question:
      'Calcule a quantidade de etano em 90 g desta substância. Dados: C = 12u e H = 1u',
    image: './public/images/fig2.png',
    options: [
      { isCorrect: true, answer: '3 mol de etano' },
      { isCorrect: false, answer: '9 mol de etano' },
      { isCorrect: false, answer: '0,3 mol de etano' },
      { isCorrect: false, answer: '30 mol de etano' },
    ],
  },
  {
    id: '3',
    question:
      'Qual é a massa em gramas de 0,8 mol de mercúrio? Dado: Hg = 200 u',
    image: './public/images/fig3.png',
    options: [
      { isCorrect: true, answer: '160 g' },
      { isCorrect: false, answer: '1,6 g' },
      { isCorrect: false, answer: '320 g' },
      { isCorrect: false, answer: '3,2 g' },
    ],
  },
  {
    id: '4',
    question:
      'Determine a massa de ácido cítrico em 0,8 mol desta substância. Dados: C = 12 u, H = 1 u e O = 16 u.',
    image: './public/images/fig4.png',
    options: [
      { isCorrect: true, answer: '153,6 g de ácido cítrico' },
      { isCorrect: false, answer: '134,5 g de ácido cítrico' },
      { isCorrect: false, answer: '96 g de ácido cítrico' },
      { isCorrect: false, answer: '163,2 g de ácido cítrico' },
    ],
  },
  {
    id: '5',
    question:
      'Qual é a quantidade de átomos de alumínio em 684 g de sulfato de alumínio. Dados: Al = 27 u, S = 32 u e O = 16 u.',
    image: './public/images/fig5.png',
    options: [
      { isCorrect: true, answer: '4 mol de Al' },
      { isCorrect: false, answer: '2 mol de Al' },
      { isCorrect: false, answer: '0,1 mol de Al' },
      { isCorrect: false, answer: '0,2 mol de Al' },
    ],
  },
  {
    id: '6',
    question:
      'A cafeína é uma substância presente no café. É um estimulante do sistema nervoso central, aumenta o estado de alerta e a capacidade de concentração. No entanto, o consumo excessivo conduz a efeitos colaterais como taquicardia, insônia e ansiedade. Determine a quantidade de moléculas de cafeína, em mol, em uma amostra que apresenta 5,6 g de nitrogênio. Dados: N = 14 u, C = 12 u, H = 1 u e O = 16 u.',
    image: './public/images/fig6.png',
    options: [
      { isCorrect: true, answer: '0,1 mol de cafeína' },
      { isCorrect: false, answer: '0,2 mol de cafeína' },
      { isCorrect: false, answer: '0,4 mol de cafeína' },
      { isCorrect: false, answer: '2 mol de cafeína' },
    ],
  },
  {
    id: '7',
    question:
      'Cloroquina é um remédio utilizado no tratamento da malária. Supondo que em uma amostra de cloroquina há 16,8 g de nitrogênio. Calcule a quantidade de moléculas nesta amostra. Dados: C = 12 u, N = 14 u, Cl = 35,5 u, H = 1 u e O = 16 u.',
    image: './public/images/fig7.png',
    options: [
      { isCorrect: true, answer: '0,4 mol de cloroquina' },
      { isCorrect: false, answer: '0,2 mol de cloroquina' },
      { isCorrect: false, answer: '0,1 mol de cloroquina' },
      { isCorrect: false, answer: '4 mol de cafeína' },
    ],
  },
  {
    id: '8',
    question:
      'Butano é um gás presente no gás cozinha, juntamente com etano e propano. Qual seria a quantidade de átomos de carbono em 29 g de butano? Dados: C = 12 u e H = 1 u.',
    image: './public/images/fig8.png',
    options: [
      { isCorrect: true, answer: '4,00 mol de C' },
      { isCorrect: false, answer: '0,250 mol de C' },
      { isCorrect: false, answer: '2,00 mol de C' },
      { isCorrect: false, answer: '2,125 mol de C' },
    ],
  },
  {
    id: '9',
    question:
      'Qual é a quantidade de cloro em 2,22 g de cloreto de sódio. Dados: Massa molar do cloreto de sódio 111 g / mol.',
    image: './public/images/fig9.png',
    options: [
      { isCorrect: true, answer: '0,04 mol de Cl' },
      { isCorrect: false, answer: '0,02 mol de Cl' },
      { isCorrect: false, answer: '2,00 mol de Cl' },
      { isCorrect: false, answer: '0,4 mol de Cl' },
    ],
  },
  {
    id: '10',
    question:
      'Cerca de 60% do corpo humano é composto por água. Determine a quantidade de moléculas de água em uma pessoa de 70 Kg. Dados: Massa Molar da água = 18 g / mol, 1 Kg - 1000 g.',
    image: '',
    options: [
      { isCorrect: true, answer: '2333 mol de água' },
      { isCorrect: false, answer: '0,2333 mol de água' },
      { isCorrect: false, answer: '23,33 mol de água' },
      { isCorrect: false, answer: '233,3 mol de água' },
    ],
  },
];

function shuffle(arr) {
  const length = arr.length;
  const newArr = [];
  const storedIdx = [];
  for (let i = 0; i < length; i++) {
    let randomIdx = Math.floor(Math.random() * length);
    while (storedIdx.includes(randomIdx)) {
      randomIdx = Math.floor(Math.random() * length);
    }
    newArr.push(arr[randomIdx]);
    storedIdx.push(randomIdx);
  }
  return newArr;
}

function checkResult(inputs) {
  let selectedInput = false;
  const questionId = inputs[0].id;
  inputs.forEach((input) => {
    if (input.checked === true) {
      selectedInput = input;
    }
  });
  if (selectedInput) {
    if (selectedInput.value === 'true') {
      alert(`Q${questionId} - Parabéns, Você Acertou!`);
    } else {
      alert(`Q${questionId} - Errado. Resolva o exercício novamente.`);
    }
  } else {
    alert(`Você deve selecionar uma resposta para Q${questionId}!`);
  }
}

function createQuestion(obj) {
  let template = document.getElementsByTagName('template')[0];
  let card = template.content.cloneNode('true');
  card.querySelector(
    'p'
  ).innerHTML = `<span><em>${obj.id} - </em></span>${obj.question}`;
  card.querySelector('img').setAttribute('src', obj.image);
  const inputs = card.querySelectorAll('input');
  const labels = card.querySelectorAll('label');
  const shuffledOptions = shuffle(obj.options);
  const button = card.querySelector('button');
  button.addEventListener('click', (event) => {
    checkResult(inputs);
    event.preventDefault();
  });
  for (let i = 0; i < 4; i++) {
    inputs[i].value = shuffledOptions[i].isCorrect;
    inputs[i].id = obj.id;
    labels[i].textContent = shuffledOptions[i].answer;
  }

  let container = document.createElement('div');
  container.setAttribute('class', 'card');
  container.appendChild(card);
  const main = document.querySelector('#main');
  main.append(container);
}

function listAllQuestions() {
  questions.forEach(createQuestion);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

listAllQuestions();
