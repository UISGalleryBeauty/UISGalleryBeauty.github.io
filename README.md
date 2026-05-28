# UIS Gallery Beauty｜高端皮膚管理

UIS Gallery Beauty 官方網站原始碼。

🌐 **網站**：https://uisgallerybeauty.github.io
📅 **預約**：採全預約制
🔗 **舊連結（移轉中）**：https://linkbio.co/uisgallery

## 結構

```
UISGalleryBeauty.github.io/
├── index.html              # 首頁（品牌 + 療程總覽 + 預約 CTA）
├── services/               # 療程細項頁（依品項分頁）
│   └── (待補)
├── booking/                # 預約相關頁（流程、注意事項、表單）
│   └── (待補)
├── assets/
│   ├── css/
│   │   └── style.css       # 共用樣式
│   └── js/
│       └── main.js         # 共用腳本
├── images/                 # 圖片資源
├── .gitignore
└── README.md
```

## 開發備忘

- **技術骨架**：純 HTML + CSS + Vanilla JS（無 build step），GitHub Pages user-site 模式
- **動態功能規劃**：表單透過 Formspree 或外掛服務；資料儲存暫定 Notion API（待確認）
- **設計調性**：高端、簡潔、留白；色系待定（沿用 linkbio 主視覺方向 → 待人工確認）

## 部署

- main 分支 push 後 GitHub Pages 自動發布
- 自訂網域（custom domain）：尚未綁定，未來規劃綁 `uisgallerybeauty.com` 之類

## 維護紀錄

- 2026-05-29：初始倉庫建立，骨架就位
