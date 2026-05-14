const experiments = [
  // add entries here as experiments are created
  // { id: '001', title: 'experiment name', date: 'YYYY-MM-DD' }
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