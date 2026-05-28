/* =========================================================
   UIS Gallery Beauty — main.js
   骨架版：目前只放錨點平滑捲動 placeholder，
   實際互動（預約表單、圖片 lightbox、scroll-reveal）後續再加。
   ========================================================= */

(function () {
  'use strict';

  // 錨點平滑捲動（已用 CSS scroll-behavior: smooth 處理，這邊保留 hook）
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

  // TODO: scroll-reveal 動畫
  // TODO: 圖片 lightbox
  // TODO: 預約表單驗證
})();
