// =============================================
//  Shared utilities — used across all pages
// =============================================

// Toast helper
function showToast(msg, duration = 2800) {
  let t = document.getElementById('globalToast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'globalToast';
    t.className = 'toast-custom';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), duration);
}

// Dark Mode
function initDarkMode() {
  const btn = document.getElementById('darkToggle');
  if (!btn) return;
  const saved = localStorage.getItem('darkMode') === 'true';
  if (saved) document.body.classList.add('dark-mode');
  updateToggleLabel(btn);
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    updateToggleLabel(btn);
  });
}
function updateToggleLabel(btn) {
  btn.textContent = document.body.classList.contains('dark-mode') ? '☀️ وضع فاتح' : '🌙 وضع داكن';
}

// Persist dark mode on page load (called on every page)
(function () {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
})();
