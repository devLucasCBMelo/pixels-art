const parent = document.querySelector('body');

const newh1 = document.createElement('h1');
newh1.id = 'title';
newh1.innerHTML = 'Paleta de Cores';
parent.appendChild(newh1);

const palletColors = document.createElement('section');
parent.appendChild(palletColors);

const collorsList = document.createElement('ul');
collorsList.id = 'color-palette';
palletColors.appendChild(collorsList);

const firstColor = document.createElement('li');
firstColor.innerHTML = '';
firstColor.classList.add('color');
firstColor.classList.add('firstBox');
firstColor.style.backgroundColor = 'red';
collorsList.appendChild(firstColor);

const secondColor = document.createElement('li');
secondColor.innerHTML = '';
secondColor.classList.add('color');
secondColor.classList.add('secondBox');
secondColor.style.backgroundColor = 'orange';
collorsList.appendChild(secondColor);

const thirdColor = document.createElement('li');
thirdColor.innerHTML = '';
thirdColor.classList.add('color');
thirdColor.classList.add('thirdBox');
thirdColor.style.backgroundColor = 'green';
collorsList.appendChild(thirdColor);

const fourthColor = document.createElement('li');
fourthColor.innerHTML = '';
fourthColor.classList.add('color');
fourthColor.classList.add('fourthBox');
fourthColor.style.backgroundColor = 'blue';
collorsList.appendChild(fourthColor);

// requisito 2 - pixel board;

const pixelBoardSection = document.createElement('div');
parent.appendChild(pixelBoardSection);

const boardList = document.createElement('ul');
boardList.id = 'pixel-board';
pixelBoardSection.appendChild(boardList);

for (let index = 0; index < 25; index += 1) {
  const pixelBoard = document.createElement('li');
  pixelBoard.classList.add('pixel');
  boardList.appendChild(pixelBoard);
}

// requisito 3 - selecionar uma cor;

const getColor = document.getElementsByClassName('color');
for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', (event) => {
    const colorSelected = document.querySelector('.selected');
    if (colorSelected) {
      colorSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

// Requisito 4 - preencher o pixel com a cor selecionada;

const getPixel = document.getElementsByClassName('pixel');
for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', (event) => {
    const colorSelected = document.querySelector('.selected');
    if (colorSelected) {
      event.target.className = 'pixel';
      event.target.style.backgroundColor = `${colorSelected.style.backgroundColor}`;
    }
  });
}

// Requisito 5 - criar botão que pinta tudo de branco;

const createButton = document.createElement('button');
createButton.innerHTML = 'Limpar';
createButton.id = 'clear-board';
palletColors.appendChild(createButton);

const getButton = document.getElementById('clear-board');
getButton.addEventListener('click', () => {
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].className = 'pixel';
    getPixel[index].style.backgroundColor = 'white';
  }
  storageColor();
});

// Requisito 6 - criar um botão que gera cores aleatórias;

const createRandomButton = document.createElement('button');
createRandomButton.innerHTML = 'Cores aleatórias';
createRandomButton.id = 'button-random-color';
palletColors.appendChild(createRandomButton);

const getRandomButton = document.getElementById('button-random-color');

getRandomButton.addEventListener('click', () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  firstColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  const red2 = Math.floor(Math.random() * 256);
  const green2 = Math.floor(Math.random() * 256);
  const blue2 = Math.floor(Math.random() * 256);

  secondColor.style.backgroundColor = `rgb(${red2}, ${green2}, ${blue2})`;

  const red3 = Math.floor(Math.random() * 256);
  const green3 = Math.floor(Math.random() * 256);
  const blue3 = Math.floor(Math.random() * 256);

  thirdColor.style.backgroundColor = `rgb(${red3}, ${green3}, ${blue3})`;

  const red4 = Math.floor(Math.random() * 256);
  const green4 = Math.floor(Math.random() * 256);
  const blue4 = Math.floor(Math.random() * 256);

  fourthColor.style.backgroundColor = `rgb(${red4}, ${green4}, ${blue4})`;
});

// Requisito 7 - Salvar os dados e recuperar o desenho;

const storageColor = () => {
  const storageList = [];
  for (let index = 0; index < getPixel.length; index += 1) {
    storageList.push(getPixel[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(storageList));
};

for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', () => {
    storageColor();
  });
}

window.onload = () => {
  const recoveryColors = JSON.parse(localStorage.getItem('pixelBoard'));
  if (recoveryColors && recoveryColors.length === getPixel.length) {
    for (let index = 0; index < getPixel.length; index += 1) {
      getPixel[index].style.backgroundColor = recoveryColors[index];
    }
  }
};
