# alextsou.com

`alextsou.com` 是一個 GitHub-ready 的個人工程作品集，聚焦 Software Quality、Test Automation、Network Validation、Automotive Testing 與 Computer Vision。公開內容只呈現已確認的工程經歷與技術資料。

## 技術架構

- Vinext（Next.js-compatible React runtime on Vite）
- React 19 + TypeScript
- Tailwind CSS 4 toolchain；主要視覺使用 project-local CSS
- Cloudflare Vite Plugin + Wrangler
- Cloudflare Workers Static Assets：`dist/client`
- Cloudflare Worker entry：`dist/server/index.js`

選擇 Workers Static Assets，而不是純 Pages static export，是因為目前 Vinext build 會同時產生 Worker entry 與 content-hashed static assets。Cloudflare 官方對 Next.js 類型專案也優先建議使用 Workers。

## 內容區塊

- Home
- About
- Skills
- Experience
- Projects
- Contact

Experience、Projects 與 Contact 只呈現適合公開的工程內容與聯絡方式。

## 本機開發

需求：Node.js `>=22.13.0`、npm。

```bash
npm install
npm run dev
```

預設網址：`http://localhost:3000/`

## Build 與驗證

```bash
npm run lint
npm run build
npm run verify
```

`npm run verify` 預設檢查 `http://localhost:3000/`，因此執行時需保持 dev server 運作。也可指定其他測試網址：

```bash
SITE_URL=https://your-preview-url.example npm run verify
```

PowerShell：

```powershell
$env:SITE_URL = 'https://your-preview-url.example'
npm run verify
Remove-Item Env:SITE_URL
```

## 訪客統計（Visitor Statistics）

隱私優先的訪問次數統計，使用 Cloudflare D1，不使用任何第三方分析服務。

**不會儲存**：IP 位址、完整 User-Agent、裝置指紋、精確位置、Cookie 識別碼、Email、姓名，或任何個人資料。
資料庫每一列只有 server 產生的 UTC 時間戳記與一個經過清理的 pathname。

因此這個數字是「訪問次數 / Visits」，不是「獨立訪客 / Unique Visitors」。

### 一次訪問的定義

- 第一次造訪：計 1 次
- 30 分鐘內重新整理：不計
- 站內 `#about`、`#contact` 等錨點導覽：不計
- 超過 30 分鐘無活動後回訪：計 1 次

判斷完全在瀏覽器端，只使用 localStorage key `alextsou-visit-last-seen`（一個毫秒時間戳記，不產生任何識別碼，也不會送到 server）。實際寫入的時間一律由 server clock 決定。

### 元件

| 檔案 | 用途 |
| --- | --- |
| `migrations/0001_create_visit_events.sql` | D1 schema：`visit_events(id, visited_at_utc, path)` |
| `app/lib/visitor-stats.ts` | D1 存取、admin token 驗證、輸入驗證、burst 上限 |
| `app/lib/visit-session.ts` | 30 分鐘 session 去重規則（純函式，可測試） |
| `app/lib/taipei-time.ts` | UTC → Asia/Taipei 顯示轉換 |
| `app/api/visit/route.ts` | `POST /api/visit`：寫入一筆訪問，回傳 `{ ok, total }` |
| `app/api/visit/count/route.ts` | `GET /api/visit/count`：只回傳 `{ total }` |
| `app/api/admin/visits/route.ts` | `GET /api/admin/visits`：需要 Bearer token |
| `app/visitor-counter.tsx` | 頁尾的低調計數器 |
| `app/admin/visits/` | 私人統計頁面（不在公開導覽中，`noindex`，robots.txt 已 Disallow） |

`GET /api/visit` 會回 405；公開端點不會輸出任何紀錄明細。未授權存取 `/api/admin/visits` 一律回 401，且回應中沒有任何訪問資料。

Admin token 只透過 `Authorization: Bearer` header 傳送，不接受 query string，也不會被編譯進任何 client bundle。

### 本機開發

```bash
# 1. 套用 local migration（Miniflare D1，位於 .wrangler/state）
npx wrangler d1 migrations apply alextsou-visitor-stats --local

# 2. 建立本機 secret（.dev.vars 已被 .gitignore 忽略，切勿 commit）
cp .dev.vars.example .dev.vars
node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
#    把輸出貼到 .dev.vars 的 VISITOR_STATS_TOKEN=

# 3. 啟動 dev server
npm run dev

# 4. 驗證（需保持 dev server 運作）
npm run test:visitors
SITE_URL=http://localhost:8788/ npm run test:visitors   # 針對 production build
```

`test:visitors` 預設只連到 `http://127.0.0.1:3000/`，並會先執行不發送網路請求的 Target Guard 測試。測試程式會在任何 Request 之前拒絕 `alextsou.com`、`www.alextsou.com`、`alextsou-com.alextsou888.workers.dev` 與其他 `*.alextsou.com` Host，避免 `POST /api/visit` 意外寫入 Production D1。只有明確設定 `ALLOW_PRODUCTION_VISITOR_TEST=1` 才能覆寫此保護；一般開發與驗證不應使用這個覆寫。

以 production build 在本機預覽（含 D1）：

```bash
npm run build
npx wrangler dev --config dist/server/wrangler.json --port 8788 --persist-to .wrangler/state
```

`--persist-to .wrangler/state` 會讓 production build 使用與 `npm run dev` 相同的本機 D1 資料。

清空本機統計資料：

```bash
npx wrangler d1 execute alextsou-visitor-stats --local --command "DELETE FROM visit_events;"
```

### 部署前必要的 Cloudflare 設定

以下指令會變更 Cloudflare production 狀態，尚未執行。

```bash
# 1. 建立 remote D1 database
npx wrangler d1 create alextsou-visitor-stats

# 2. 把上一步輸出的 database_id 填回 wrangler.jsonc，
#    取代 "REPLACE_WITH_ALEXTSOU_VISITOR_STATS_DATABASE_ID"

# 3. 套用 remote migration
npx wrangler d1 migrations apply alextsou-visitor-stats --remote

# 4. 設定 Worker secret（互動式輸入，不要寫進任何檔案或 shell history）
npx wrangler secret put VISITOR_STATS_TOKEN --name alextsou-com

# 5. 重新 build 並部署
npm run build
npm run deploy
```

Worker 名稱維持 `alextsou-com`；本功能只新增一個 D1 binding（`VISITOR_DB`），不變更 Custom Domain、DNS 或部署架構。

若 `VISITOR_STATS_TOKEN` 未設定，`/api/admin/visits` 會回 503 `not_configured`；若 D1 binding 不存在，統計 API 回 503，公開頁面的計數器會自動隱藏，網站其餘功能不受影響。

### 私人統計頁面

`https://alextsou.com/admin/visits`

輸入 `VISITOR_STATS_TOKEN` 後可看到：

- 總訪問次數 / 今日 / 近 7 天 / 近 30 天（以 Asia/Taipei 日界計算）
- 最近訪問紀錄：`#`、日期、時間、路徑，每頁 25 / 50 / 100，新的在前

資料庫一律儲存 UTC；只有顯示層轉換為 Asia/Taipei。

## Cloudflare Workers Builds（建議部署方式）

本專案已包含 `wrangler.jsonc`，並使用 Cloudflare Vite Plugin 產生可部署的 `dist/server/wrangler.json`。該輸出設定會把 Worker entry 與 `dist/client` static assets 一起部署。

Cloudflare Dashboard 設定：

1. 前往 **Workers & Pages**。
2. 選擇 **Create application**。
3. 在 **Import a repository** 旁選擇 **Get started**。
4. 選擇已連線的 GitHub account 與 repository：`alextsou.com`。
5. 設定：
   - Project / Worker name：`alextsou-com`
   - Production branch：`main`
   - Root directory：`/`（留白亦可）
   - Build command：`npm run build`
   - Deploy command：`npm run deploy`
   - Non-production deploy command：`npx wrangler versions upload --config dist/server/wrangler.json`
6. 選擇 **Save and Deploy**。

Build 輸出：

- 部署根目錄：`dist`
- Static assets：`dist/client`
- Worker bundle：`dist/server`
- Wrangler deployment config：`dist/server/wrangler.json`

本機已登入 Wrangler 時，也可以手動部署：

```bash
npm run build
npm run deploy
```

## 連接 `alextsou.com` custom domain

第一次 Worker deployment 成功後：

1. Cloudflare Dashboard → **Workers & Pages** → 選擇 `alextsou-com`。
2. 前往 **Settings → Domains & Routes**（新版介面也可能顯示獨立的 **Domains** tab）。
3. 選擇 **Add → Custom Domain**。
4. 輸入 `alextsou.com`，然後選擇 **Add Custom Domain**。
5. 等待 DNS 與 edge certificate 狀態啟用，再測試 `https://alextsou.com/`。

因為 `alextsou.com` 已由 Cloudflare 管理，Custom Domain 流程會建立所需 DNS record 並簽發 HTTPS certificate。若 apex hostname 目前已有 A、AAAA 或 CNAME 指向其他服務，先確認它不再需要；不要直接覆蓋仍在使用的紀錄。

如要將 `www.alextsou.com` 轉址到 apex domain，請另外建立 Cloudflare Redirect Rule；Custom Domain 只會精確匹配已加入的 hostname。

官方參考：

- [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Workers Builds configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Cloudflare Vite Plugin static assets](https://developers.cloudflare.com/workers/vite-plugin/reference/static-assets/)
- [Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

## GitHub repository（本機 `gh` 不可用時）

本機 Git repository 已準備在 `main` branch。請先在 GitHub 網頁確認不存在不應覆蓋的同名 repository，再建立一個空白 public repository：`alextsou.com`。不要勾選自動新增 README、`.gitignore` 或 License。

建立後，在本專案資料夾執行：

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/alextsou.com.git
git remote -v
git push -u origin main
```

如果 `git remote -v` 顯示非預期 URL，請先停止，不要 push。不要把 GitHub password 或 token 寫進 repository、README 或 remote URL。

## SEO 與安全基礎

- Canonical URL：`https://alextsou.com/`
- Metadata title / description / keywords
- Open Graph / X card：`public/og.png`
- `public/robots.txt`
- `public/sitemap.xml`
- Responsive desktop / tablet / mobile styles
- Keyboard-visible focus 與 skip link
- 基本 security headers 與 immutable asset cache header

## 修改內容

- 主要內容與卡片資料：`app/page.tsx`
- SEO metadata：`app/layout.tsx`
- Responsive styles：`app/globals.css`
- Cloudflare input config：`wrangler.jsonc`
- 訪客統計：`app/lib/visitor-stats.ts`、`app/api/visit/`、`app/api/admin/visits/`、`app/admin/visits/`、`migrations/`
- 部署與驗證 scripts：`package.json`

公開前可使用全文搜尋確認不應公開的名稱或資料未出現在網站來源與輸出中。
