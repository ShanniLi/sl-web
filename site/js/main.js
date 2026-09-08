// Footer year
document.getElementById('footer-year').textContent = new Date().getFullYear();

// ── Active nav link on scroll ──────────────────────────────────────────────
(function () {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
})();

// ── Mobile nav toggle ──────────────────────────────────────────────────────
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ── Lightbox ───────────────────────────────────────────────────────────────
(function () {
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  if (!lightbox) return;

  function open(src, alt, caption) {
    lbImg.src = src;
    lbImg.alt = alt;
    lbCaption.textContent = caption || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('is-open');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const src = tile.dataset.src || tile.querySelector('img').src;
      const alt = tile.querySelector('img').alt;
      const caption = tile.dataset.caption || '';
      open(src, alt, caption);
    });
  });

  lbClose.addEventListener('click', close);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
})();

// ── Contact form ─────────────────────────────────────────────────────────────
// Recipient addresses are assembled at runtime from parts so they never appear
// as harvestable text in the HTML source. Swap this mailto flow for a POST to a
// serverless endpoint later without touching the form markup.
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('contact-status');

  const user = ['lshanni13', 'iceliuxj', 'juncao.li'];
  const host = ['gmail', 'com'];
  const recipients = user.map((u) => u + '@' + host.join('.')).join(',');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in your name, email, and a message.';
      status.className = 'contact-status is-error';
      return;
    }

    const subject = `Website message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const href =
      'mailto:' +
      recipients +
      '?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body);

    window.location.href = href;
    status.textContent =
      'Opening your email app to send… if nothing happens, email us directly.';
    status.className = 'contact-status is-ok';
  });
})();
