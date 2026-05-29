const experiments = [
  { id: '017-threshold-fossil', title: 'threshold fossil', date: '2026-05-29' },
  { id: '016-noise-dialect', title: 'noise dialect', date: '2026-05-28' },
  { id: '015-drift-ledger', title: 'drift ledger', date: '2026-05-27' },
  { id: '014-residence-atlas', title: 'residence atlas', date: '2026-05-26' },
  { id: '013-phase-subpoena', title: 'phase subpoena', date: '2026-05-25' },
  { id: '012-carry-field', title: 'carry field', date: '2026-05-24' },
  { id: '011-return-sieve', title: 'return sieve', date: '2026-05-23' },
  { id: '010-alias-loom', title: 'alias loom', date: '2026-05-22' },
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
  experiments.forEach((exp, index) => {
    const li = document.createElement('li');
    const latestBadge = index === 0 ? '<span class="experiment-badge">latest</span>' : '';
    if (index === 0) li.classList.add('is-latest');
    li.innerHTML = `
      <a href="experiments/${exp.id}.html">
        <span class="experiment-title">${exp.title}${latestBadge}</span>
        <span class="experiment-date">${exp.date}</span>
      </a>
    `;
    list.appendChild(li);
  });
}