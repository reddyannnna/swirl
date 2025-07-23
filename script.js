
function showPage(page) {
  document.getElementById('home').style.display = page==='home'? 'block':'none';
  document.getElementById('about').style.display = page==='about'? 'block':'none';
  window.scrollTo({top:0, behavior:'smooth'});
}


const player = document.getElementById('lofi-player');
const btn = document.getElementById('play-btn');
const vol = document.getElementById('vol-control');

btn.addEventListener('click', () => {
  if (player.paused) { player.play(); btn.textContent = '⏸️'; }
  else { player.pause(); btn.textContent = '▶️'; }
});

vol.addEventListener('input', () => player.volume = vol.value);


player.volume = 0.5;

