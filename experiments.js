const experiments = [
  { id: '069-diophantine-lanterns', title: 'diophantine lanterns', date: '2026-07-20' },
  { id: '068-totient-reef', title: 'totient reef', date: '2026-07-19' },
  { id: '067-palimpsest-current', title: 'palimpsest current', date: '2026-07-18' },
  { id: '066-xor-estuary', title: 'xor estuary', date: '2026-07-17' },
  { id: '065-orbit-bruise', title: 'orbit bruise', date: '2026-07-16' },
  { id: '064-substitution-pond', title: 'substitution pond', date: '2026-07-15' },
  { id: '063-convergent-loom', title: 'convergent loom', date: '2026-07-14' },
  { id: '062-spectral-mulch', title: 'spectral mulch', date: '2026-07-13' },
  { id: '061-valuation-wake', title: 'valuation wake', date: '2026-07-12' },
  { id: '060-pisano-fen', title: 'pisano fen', date: '2026-07-11' },
  { id: '059-frobenius-dust', title: 'frobenius dust', date: '2026-07-10' },
  { id: '058-hensel-breath', title: 'hensel breath', date: '2026-07-09' },
  { id: '057-adic-snow', title: 'adic snow', date: '2026-07-08' },
  { id: '056-stern-drift', title: 'stern drift', date: '2026-07-07' },
  { id: '055-crt-drizzle', title: 'crt drizzle', date: '2026-07-06' },
  { id: '054-bezout-mist', title: 'bezout mist', date: '2026-07-05' },
  { id: '053-farey-frost', title: 'farey frost', date: '2026-07-04' },
  { id: '052-collatz-estuary', title: 'collatz estuary', date: '2026-07-03' },
  { id: '051-mobius-loam', title: 'mobius loam', date: '2026-07-02' },
  { id: '050-euclid-bloom', title: 'euclid bloom', date: '2026-07-01' },
  { id: '049-null-trellis', title: 'null trellis', date: '2026-06-30' },
  { id: '048-convergent-hail', title: 'convergent hail', date: '2026-06-29' },
  { id: '047-divisor-wind', title: 'divisor wind', date: '2026-06-28' },
  { id: '046-residue-thermocline', title: 'residue thermocline', date: '2026-06-27' },
  { id: '045-coprime-ash', title: 'coprime ash', date: '2026-06-26' },
  { id: '044-monotone-kiln', title: 'monotone kiln', date: '2026-06-25' },
  { id: '043-markov-brine', title: 'markov brine', date: '2026-06-24' },
  { id: '042-reciprocal-silt', title: 'reciprocal silt', date: '2026-06-23' },
  { id: '041-gcd-moss', title: 'gcd moss', date: '2026-06-22' },
  { id: '040-sum-shadow', title: 'sum shadow', date: '2026-06-21' },
  { id: '039-borrowed-diagonals', title: 'borrowed diagonals', date: '2026-06-20' },
  { id: '038-kernel-tide', title: 'kernel tide', date: '2026-06-19' },
  { id: '037-quotient-choir', title: 'quotient choir', date: '2026-06-18' },
  { id: '036-radius-ledger', title: 'radius ledger', date: '2026-06-17' },
  { id: '035-cofactor-fog', title: 'cofactor fog', date: '2026-06-16' },
  { id: '034-forgetting-prism', title: 'forgetting prism', date: '2026-06-15' },
  { id: '033-lattice-psalm', title: 'lattice psalm', date: '2026-06-14' },
  { id: '032-glyph-current', title: 'glyph current', date: '2026-06-13' },
  { id: '031-eigenweather', title: 'eigenweather', date: '2026-06-12' },
  { id: '030-caesura-well', title: 'caesura well', date: '2026-06-11' },
  { id: '029-sieve-echo', title: 'sieve echo', date: '2026-06-10' },
  { id: '028-stationary-fog', title: 'stationary fog', date: '2026-06-09' },
  { id: '027-convergent-weather', title: 'convergent weather', date: '2026-06-08' },
  { id: '026-totient-murmuration', title: 'totient murmuration', date: '2026-06-07' },
  { id: '025-period-debt', title: 'period debt', date: '2026-06-06' },
  { id: '024-parity-drift', title: 'parity drift', date: '2026-06-05' },
  { id: '023-witness-knots', title: 'witness knots', date: '2026-06-04' },
  { id: '022-fold-census', title: 'fold census', date: '2026-06-03' },
  { id: '021-borrow-constellation', title: 'borrow constellation', date: '2026-06-02' },
  { id: '020-carry-orchard', title: 'carry orchard', date: '2026-06-01' },
  { id: '019-inverse-rain', title: 'inverse rain', date: '2026-05-31' },
  { id: '018-remainder-tide', title: 'remainder tide', date: '2026-05-30' },
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
const archiveNote = document.getElementById('archive-note');
const latestLink = document.getElementById('latest-link');

if (archiveNote && experiments.length > 0) {
  const newest = experiments[0].date;
  const oldest = experiments[experiments.length - 1].date;
  archiveNote.textContent = `${experiments.length} small tests · ${oldest} → ${newest}`;
}

if (latestLink && experiments.length > 0) {
  latestLink.href = `experiments/${experiments[0].id}.html`;
}

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