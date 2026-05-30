/* =========================================================
   UIS Gallery Beauty — main.js
   - 錨點平滑捲動
   - 店內環境 Lightbox（點擊縮圖看完整未裁切照片）
   ========================================================= */

(function () {
  'use strict';

  // 錨點平滑捲動
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== 漢堡選單（手機/平板 nav 切換） =====
  var headerInner = document.querySelector('.header-inner');
  var siteNav = document.querySelector('.site-nav');
  var headerCta = document.querySelector('.header-cta');
  if (headerInner && siteNav) {
    // 動態插入漢堡按鈕（不需要改 HTML）
    var burgerBtn = document.createElement('button');
    burgerBtn.className = 'nav-burger';
    burgerBtn.setAttribute('aria-label', '開啟選單');
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.innerHTML = '<span></span><span></span><span></span>';
    // 漢堡放在 header 最右側（append 到最後）
    headerInner.appendChild(burgerBtn);

    // 把「加入官方 LINE」按鈕 clone 一份加進 nav 最後（手機版用，與其他選項並列）
    if (headerCta) {
      var navLineLink = headerCta.cloneNode(true);
      navLineLink.classList.remove('header-cta');
      navLineLink.classList.add('nav-line-cta');
      siteNav.appendChild(navLineLink);
    }

    function closeNav() {
      siteNav.classList.remove('open');
      burgerBtn.classList.remove('active');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    }
    function openNav() {
      siteNav.classList.add('open');
      burgerBtn.classList.add('active');
      burgerBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    }
    function toggleNav() {
      siteNav.classList.contains('open') ? closeNav() : openNav();
    }

    burgerBtn.addEventListener('click', toggleNav);

    // 點 nav 內任何連結後自動關閉
    siteNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    // 視窗縮放回桌面尺寸時自動關閉（避免狀態殘留）
    window.addEventListener('resize', function () {
      if (window.innerWidth > 968) closeNav();
    });

    // 按 Esc 關閉
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav.classList.contains('open')) closeNav();
    });
  }

  // ===== Lightbox =====
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('.lightbox-img');
    var lightboxCounter = lightbox.querySelector('.lightbox-counter');
    var galleryImgs = Array.from(
      document.querySelectorAll('.space-gallery .space-item img')
    );
    var currentIndex = 0;

    function setImg(idx) {
      currentIndex = idx;
      lightboxImg.src = galleryImgs[idx].src;
      lightboxImg.alt = galleryImgs[idx].alt || '';
      lightboxCounter.textContent =
        (idx + 1) + ' / ' + galleryImgs.length;
    }

    function openLightbox(idx) {
      setImg(idx);
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
    function next() {
      setImg((currentIndex + 1) % galleryImgs.length);
    }
    function prev() {
      setImg((currentIndex - 1 + galleryImgs.length) % galleryImgs.length);
    }

    // 縮圖點擊開啟
    galleryImgs.forEach(function (img, i) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { openLightbox(i); });
    });

    // 關閉：點背景 / 按關閉鈕 / Esc
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    var closeBtn = lightbox.querySelector('.lightbox-close');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    var prevBtn = lightbox.querySelector('.lightbox-prev');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    // 鍵盤
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });

    // 手機觸控滑動
    var touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
      var diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? prev() : next();
      }
    }, { passive: true });
  }
})();
