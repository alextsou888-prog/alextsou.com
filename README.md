# alextsou.com

`alextsou.com` 是一個 GitHub-ready 的個人工程作品集，聚焦 Software Quality、Test Automation、Network Validation、Automotive Testing 與 Computer Vision。網站對沒有來源資料的經歷、日期、公司、客戶、成果與聯絡方式一律使用明確的 `TODO`，不會以推測內容代替事實。

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

Experience、Projects 與 Contact 中尚未提供的資料都有可搜尋的 `TODO:` 標記。正式公開個人資料前，請只填入已驗證內容。

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
- 部署與驗證 scripts：`package.json`

發布前可搜尋所有待補資料：

```bash
rg -n "TODO:" app README.md
```
