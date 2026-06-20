function injectGlobalUI() {
  const container = document.createElement('div');
  container.id = 'royal-global-wrapper';

  const header = document.createElement('header');
  header.className = 'global-header';

  const navContainer = document.createElement('div');
  navContainer.className = 'nav-container';

  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger-toggle';
  hamburger.innerText = '☰';
  hamburger.onclick = toggleSidebar;
  navContainer.appendChild(hamburger);

  const brandLogo = document.createElement('a');
  brandLogo.href = '/';
  brandLogo.className = 'brand-logo';
  const logoImg = document.createElement('img');
  logoImg.src = '/img/logo.png';
  logoImg.alt = 'RoyalBet88';
  brandLogo.appendChild(logoImg);
  navContainer.appendChild(brandLogo);

  const navMenu = document.createElement('nav');
  navMenu.className = 'nav-menu';
  const linkHome = document.createElement('a');
  linkHome.href = '/';
  linkHome.className = 'nav-link';
  linkHome.innerText = 'דף הבית';
  const linkSport = document.createElement('a');
  linkSport.href = '/sport/index.html';
  linkSport.className = 'nav-link';
  linkSport.innerText = 'ספורט';
  const linkCasino = document.createElement('a');
  linkCasino.href = '/casino/index.html';
  linkCasino.className = 'nav-link';
  linkCasino.innerText = 'קזינו';
  navMenu.appendChild(linkHome);
  navMenu.appendChild(linkSport);
  navMenu.appendChild(linkCasino);
  navContainer.appendChild(navMenu);

  const headerActions = document.createElement('div');
  headerActions.className = 'header-actions';

  const hiddenTranslate = document.createElement('div');
  hiddenTranslate.id = 'google_translate_element';
  hiddenTranslate.style.display = 'none';
  headerActions.appendChild(hiddenTranslate);

  const langSelector = document.createElement('div');
  langSelector.className = 'language-selector';

  const langBtn = document.createElement('button');
  langBtn.className = 'lang-btn';
  langBtn.onclick = toggleLangDropdown;
  langBtn.innerHTML = '<span id="current-lang-flag-box"><img id="current-lang-flag" src="/img/flags/he.png" style="width:20px; height:14px; object-fit:cover; display:block;"></span> <span id="current-lang-name">עברית</span>';
  langSelector.appendChild(langBtn);

  const langDropdown = document.createElement('div');
  langDropdown.className = 'lang-dropdown';
  langDropdown.id = 'lang-dropdown';
  const languages = [
    { code: 'he', flag: 'he', name: 'עברית' },
    { code: 'en', flag: 'en', name: 'English' },
    { code: 'es', flag: 'es', name: 'Español' },
    { code: 'ru', flag: 'ru', name: 'Русский' },
    { code: 'ar', flag: 'ar', name: 'العربية' }
  ];

  languages.forEach(function(l) {
    const opt = document.createElement('div');
    opt.className = 'lang-option';
    opt.onclick = function() { triggerAutoTranslation(l.code, l.flag, l.name); };
    opt.innerHTML = '<img src="/img/flags/' + l.flag + '.png" style="width:20px; height:14px; object-fit:cover;"> <span>' + l.name + '</span>';
    langDropdown.appendChild(opt);
  });

  langSelector.appendChild(langDropdown);
  headerActions.appendChild(langSelector);

  const loginBtn = document.createElement('button');
  loginBtn.className = 'btn-login';
  loginBtn.innerText = 'התחברות';
  loginBtn.onclick = openLoginPopup;
  headerActions.appendChild(loginBtn);
  navContainer.appendChild(headerActions);

  header.appendChild(navContainer);
  container.appendChild(header);

  const overlay = document.createElement('div');
  overlay.id = 'sidebar-overlay';
  overlay.className = 'sidebar-overlay';
  overlay.onclick = closeSidebar;
  container.appendChild(overlay);

  const sidebar = document.createElement('div');
  sidebar.id = 'mobile-sidebar';
  sidebar.className = 'mobile-sidebar';
  const sLinkHome = document.createElement('a');
  sLinkHome.href = '/';
  sLinkHome.className = 'sidebar-link';
  sLinkHome.innerText = '🏠 דף הבית';
  const sLinkSport = document.createElement('a');
  sLinkSport.href = '/sport/index.html';
  sLinkSport.className = 'sidebar-link';
  sLinkSport.innerText = '⚽ ספורט';
  const sLinkCasino = document.createElement('a');
  sLinkCasino.href = '/casino/index.html';
  sLinkCasino.className = 'sidebar-link';
  sLinkCasino.innerText = '🎰 קזיنو';
  sidebar.appendChild(sLinkHome);
  sidebar.appendChild(sLinkSport);
  sidebar.appendChild(sLinkCasino);
  container.appendChild(sidebar);

  const widgetOverlay = document.createElement('div');
  widgetOverlay.id = 'player-tools-popup';
  widgetOverlay.className = 'player-widget-overlay';
  widgetOverlay.onclick = closePlayerWidget;

  const widgetBox = document.createElement('div');
  widgetBox.className = 'player-widget-box';
  widgetBox.onclick = function(e) { e.stopPropagation(); };

  const closeWidgetBtn = document.createElement('button');
  closeWidgetBtn.className = 'player-widget-close';
  closeWidgetBtn.innerText = '✕';
  closeWidgetBtn.onclick = closePlayerWidget;
  widgetBox.appendChild(closeWidgetBtn);

  const grid = document.createElement('div');
  grid.className = 'widget-tools-grid';

  const toolData = [
    { text: 'CASHIER', icon: '📥', action: function() { location.href = '/cashier/index.html'; } },
    { text: 'WITHDRAW', icon: '📤', action: function() { location.href = '/cashier/index.html'; } },
    { text: 'WHATSAPP', icon: '💬', action: openWhatsAppSupport },
    { text: 'TELEGRAM', icon: '✈️', action: openTelegramSupport },
    { text: 'INSTAGRAM', icon: '📸', action: function() { window.open('https://instagram.com', '_blank'); } },
    { text: 'TIKTOK', icon: '🎵', action: function() { window.open('https://tiktok.com', '_blank'); } },
    { text: 'FACEBOOK', icon: '📘', action: function() { window.open('https://facebook.com', '_blank'); } },
    { text: 'PROFILE', icon: '⚙️', action: function() { location.href = '/popup/login/index.html'; } },
    { text: 'BONUS', icon: '🎁', action: function() { location.href = '/promotions/index.html'; } }
  ];

  toolData.forEach(function(item) {
    const card = document.createElement('div');
    card.className = 'widget-tool-card';
    card.onclick = item.action;
    const iconDiv = document.createElement('div');
    iconDiv.className = 'widget-tool-icon';
    iconDiv.innerText = item.icon;
    const labelDiv = document.createElement('div');
    labelDiv.className = 'widget-tool-label';
    labelDiv.innerText = item.text;
    card.appendChild(iconDiv);
    card.appendChild(labelDiv);
    grid.appendChild(card);
  });
  widgetBox.appendChild(grid);

  const sidePanel = document.createElement('div');
  sidePanel.className = 'widget-side-panel';
  const panelTitle = document.createElement('h4');
  panelTitle.innerText = 'ROYAL VIP PANEL';
  const liveTag = document.createElement('div');
  liveTag.className = 'widget-live-tag';
  liveTag.innerText = '24/7';
  const supportBtn = document.createElement('button');
  supportBtn.className = 'btn-login';
  supportBtn.style.width = '100%';
  supportBtn.style.padding = '10px';
  supportBtn.style.fontSize = '12px';
  supportBtn.innerText = 'SUPPORT LIVE';
  supportBtn.onclick = openWhatsAppSupport;
  sidePanel.appendChild(panelTitle);
  sidePanel.appendChild(liveTag);
  sidePanel.appendChild(supportBtn);
  widgetBox.appendChild(sidePanel);

  widgetOverlay.appendChild(widgetBox);
  container.appendChild(widgetOverlay);

  document.body.insertAdjacentElement('afterbegin', container);
}
// ==========================================================================
// 3. פונקציות ניווט, שליטה, תרגום ואוטומציה
// ==========================================================================
function triggerAutoTranslation(langCode, flagName, langName) {
  const currentFlagEl = document.getElementById('current-lang-flag');
  const currentNameEl = document.getElementById('current-lang-name');
  if (currentFlagEl) currentFlagEl.src = '/img/flags/' + flagName + '.png';
  if (currentNameEl) currentNameEl.innerText = langName;

  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.remove('show');

  document.body.className = (langCode === 'he' || langCode === 'ar') ? 'rtl' : 'ltr';

  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event('change'));
  }
}

function highlightActiveLinks() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (href === '/' && currentPath === '/index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function toggleLangDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.toggle('show');
}

function toggleSidebar(e) {
  if (e) e.stopPropagation();
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('show');
}

function closeSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

function openLoginPopup() { window.location.href = '/popup/login/index.html'; }

function openPlayerWidget(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  const popup = document.getElementById('player-tools-popup');
  if (popup) popup.classList.add('show');
}

function closePlayerWidget() {
  const popup = document.getElementById('player-tools-popup');
  if (popup) popup.classList.remove('show');
}

function openWhatsAppSupport() {
  window.open('https://wa.me' + encodeURIComponent('שלום, אני מעוניין להפקיד ולקבל פרטים לגבי RoyalBet88'), '_blank');
}

function openTelegramSupport() { window.open('https://t.me', '_blank'); }

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'he',
    includedLanguages: 'he,en,es,ru,ar',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

window.addEventListener('click', function() {
  const dropdown = document.getElementById('lang-dropdown');
  if (dropdown) dropdown.classList.remove('show');
});

// נקודת הריצה המרכזית והיציבה - מונעת כפילויות הרצה והעלמות תפריטים
document.addEventListener('DOMContentLoaded', function() {
  injectGlobalUI();
  highlightActiveLinks();

  const script = document.createElement('script');
  script.src = '//://google.com';
  document.head.appendChild(script);

  document.body.addEventListener('click', function(event) {
    const target = event.target.closest('.odds-btn, .btn-play-game, .card-sport-title, .card-casino-title');
    if (target) openPlayerWidget(event);
  });
});
