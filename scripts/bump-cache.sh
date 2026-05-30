#!/bin/bash
# =========================================================
# bump-cache.sh
# 自動把所有 HTML 內 ?v=xxx 替換成當下時間戳記
# 用途：每次 commit 前跑一次，確保瀏覽器一定 fetch 新版 CSS/JS
# =========================================================

set -e

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

TIMESTAMP=$(date +%Y%m%d%H%M)

# 用 sed 替換所有 HTML 內的 ?v= 版本號
# 匹配 ?v= 後面的英數字（包含 hash 跟時間戳格式）
for f in *.html; do
  [ -f "$f" ] || continue
  sed -i "s|\?v=[a-zA-Z0-9]*|?v=${TIMESTAMP}|g" "$f"
done

echo "✓ Cache version bumped to: ${TIMESTAMP}"
