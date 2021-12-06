function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const showColorSpan = document.querySelector('.color');

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

const showColor = () => {
  showColorSpan.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', changeColor);
changeColorBtn.addEventListener('click', showColor);
