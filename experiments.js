const experiments = [
  { id: '009-free-room', title: 'free room', date: '2026-05-22' },
  { id: '008-lag-atlas', title: 'lag atlas', date: '2026-05-21' },
  { id: '007-shadow-grammar', title: 'shadow grammar', date: '2026-05-20' },
  { id: '006-interval-sieve', title: 'interval sieve', date: '2026-05-19' },
  { id: '005-residue-choir', title: 'residue choir', date: '2026-05-18' },
  { id: '004-prime-weather', title: 'prime weather', date: '2026-05-17' },
  { id: '003-second-neighbor', title: 'second neighbor', date: '2026-05-16' },
  { id: '002-phase-field', title: 'phase field', date: '2026-05-15' },
  { id: '001-entropy-clock', title: 'entropy clock', date: '2026-05-14' }
];

const list = document.getElementById('experiment-list');

if (experiments.length === 0) {
  list.innerHTML = '<li class="empty">nothing here yet — check back tomorrow</li>';
} else {
  experiments.forEach(exp => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="experiments/${exp.id}.html">
        <span class="experiment-title">${exp.title}</span>
        <span class="experiment-date">${exp.date}</span>
      </a>
    `;
    list.appendChild(li);
  });
}