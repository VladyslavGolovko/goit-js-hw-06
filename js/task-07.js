const inputRange = document.getElementById('font-size-control');
const text = document.getElementById('text');

inputRange.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}
