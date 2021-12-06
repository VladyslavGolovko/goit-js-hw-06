let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.getElementById('value');

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
