const lightBtn = document.getElementById('light');
const darkBtn = document.getElementById('dark');
const solarizeBtn = document.getElementById('solarize');
const body = document.body;

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solarize');
}

darkBtn.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

lightBtn.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});

solarizeBtn.addEventListener('click', () => {
  if (body.classList.contains('solarize')) {
    body.classList.remove('solarize');
    solarizeBtn.style.cssText = `--bg-solar: var(--yellow)`;
    solarizeBtn.textContent = 'solarize';
    localStorage.removeItem('isSolar');
  } else {
    body.classList.add('solarize');
    solarizeBtn.style.cssText = `--bg-solar: white`;
    localStorage.setItem('isSolar', true);
    solarizeBtn.textContent = 'normalize';
  }
});
