// פונקציות השליטה בתפריט ההมבורגר הצידי
function toggleSidebar(event) {
  event.stopPropagation();
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }
}

function toggleLangDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

function openLoginPopup() {
  // נתיב דינמי ואבסולוטי שיעבוד מכל דף באתר ללא שגיאות
  window.location.href = "/popup/login/index.html";
}

// סגירת תפריטים בלחיצה חיצונית
window.addEventListener('click', () => {
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.remove('show');
});
