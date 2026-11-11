const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const statusEl = document.getElementById('status');

const storageKey = 'rachanne22-visit-count';
let count = Number.parseInt(localStorage.getItem(storageKey) ?? '0', 10);
if (Number.isNaN(count)) count = 0;

function render() {
  countEl.textContent = String(count);
}

incrementBtn.addEventListener('click', () => {
  count += 1;
  localStorage.setItem(storageKey, String(count));
  render();
  statusEl.textContent = `Visit #${count} recorded at ${new Date().toLocaleTimeString()}.`;
});

render();
statusEl.textContent = 'Ready — click the button to verify the app works.';
