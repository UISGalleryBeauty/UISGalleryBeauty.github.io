/* =========================================================
   UIS Gallery Beauty — 客製化地圖（Leaflet + 5 個彩色標記）
   ========================================================= */

(function () {
  'use strict';

  var mapEl = document.getElementById('uisMap');
  if (!mapEl || typeof L === 'undefined') return;

  // 五個關鍵地標（座標為估算，使用者上線後若位置不對可微調）
  var points = [
    {
      name: 'UIS 有意思美學',
      sub: '新北概念店',
      lat: 25.0386,
      lng: 121.4460,
      color: '#B89578',   // 玫瑰金（品牌主色）
      main: true          // 主要標記，較大較顯眼
    },
    {
      name: '新莊副都心捷運站',
      sub: '環狀線 Y19',
      lat: 25.0398,
      lng: 121.4452,
      color: '#3D8BFD'   // 藍色（捷運站）
    },
    {
      name: '新莊典華',
      sub: '宴會餐廳',
      lat: 25.0408,
      lng: 121.4426,
      color: '#C77DC2'   // 紫粉色（餐廳/婚宴）
    },
    {
      name: '宏匯廣場',
      sub: '購物中心',
      lat: 25.0426,
      lng: 121.4499,
      color: '#E08A3B'   // 橙色（百貨）
    },
    {
      name: '宏普 AMAX',
      sub: '商辦大樓',
      lat: 25.0392,
      lng: 121.4445,
      color: '#5BA67B'   // 綠色（辦公大樓）
    }
  ];

  // 初始化地圖
  var map = L.map('uisMap', {
    center: [25.0405, 121.4460],
    zoom: 16,
    zoomControl: true,
    scrollWheelZoom: false   // 避免使用者滾動頁面時誤觸發地圖縮放
  });

  // CartoDB Positron tile — 淡灰色地圖風格，符合品牌米白調性
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // 加 5 個彩色 markers
  points.forEach(function (p) {
    var sizeClass = p.main ? ' uis-marker-main' : '';
    var pinSize = p.main ? 26 : 16;

    var icon = L.divIcon({
      className: 'uis-marker' + sizeClass,
      html:
        '<div class="uis-marker-pin" style="background:' + p.color + ';"></div>' +
        '<div class="uis-marker-label" style="border-color:' + p.color + ';">' +
          '<strong>' + p.name + '</strong>' +
          '<span>' + p.sub + '</span>' +
        '</div>',
      iconSize: [pinSize, pinSize],
      iconAnchor: [pinSize / 2, pinSize / 2]
    });

    var marker = L.marker([p.lat, p.lng], { icon: icon, riseOnHover: true }).addTo(map);

    if (p.main) {
      marker.bindPopup(
        '<strong style="font-size:14px;color:#8E6B4C;">' + p.name + '</strong><br>' +
        '<span style="font-size:12px;color:#7C736B;">新北市新莊區中信街 176 號 8 樓之 9</span><br>' +
        '<a href="https://maps.app.goo.gl/e3yg8ofaXATafeQRA" target="_blank" rel="noopener" style="color:#B89578;font-size:12px;">在 Google 地圖開啟 →</a>'
      ).openPopup();
    }
  });

  // 點地圖任意處可以開始操作（解開 scroll wheel zoom）
  map.on('click', function () {
    if (!map.scrollWheelZoom.enabled()) {
      map.scrollWheelZoom.enable();
    }
  });
  // 滑鼠離開地圖時自動鎖回 scroll wheel
  mapEl.addEventListener('mouseleave', function () {
    map.scrollWheelZoom.disable();
  });
})();
