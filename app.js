const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const solarizeBtn = document.getElementById('solarize');
const body = document.body;

darkBtn.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
});

lightBtn.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
});

solarizeBtn.addEventListener('click', () => {
  if (body.classList.contains('solarize')) {
    body.classList.remove('solarize');
    solarizeBtn.style.cssText = `--bg-color: var(--yellow)`;
    solarizeBtn.textContent = 'solarize';
  } else {
    body.classList.add('solarize');
    solarizeBtn.style.cssText = `--bg-color: white`;
    solarizeBtn.textContent = 'normalize';
  }
});
