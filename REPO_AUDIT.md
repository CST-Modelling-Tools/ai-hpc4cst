# Repository Audit: ai-hpc4cst (Docusaurus Website)

Date: 2026-02-20  
Scope: Website-oriented cleanup audit (conservative, reference-verified)

## 1) Unused Static Assets

Scanned paths:
- `static/`
- `src/img/` (does not exist)
- `docs/**/assets/` (none found)
- Extensions: `.png .jpg .jpeg .svg .webp .gif .pdf`

Reference search scope:
- Markdown image links
- MDX/content references
- React source in `src/`
- CSS `url(...)`
- `useBaseUrl(...)`
- `@site/static/...`
- `docusaurus.config.js`
- `sidebars.js`

| Asset path | Reference count | Suspected unused |
|---|---:|---|
| `static/img/funding/MICIU_AEI.jpg` | 4 | No |
| `static/img/psa/psa-01.webp` | 0 | Yes |
| `static/img/psa/psa-02.webp` | 0 | Yes |
| `static/img/psa/psa-03.webp` | 0 | Yes |
| `static/img/psa/psa-04.webp` | 0 | Yes |
| `static/img/psa/psa-05.webp` | 0 | Yes |
| `static/img/psa/psa-ai-01.webp` | 1 | No |
| `static/img/psa/psa-ai-02.webp` | 0 | Yes |
| `static/img/ai-hpc4cst_logo.png` | 0 | Yes (branding asset; preserved) |
| `static/img/social-card.jpg` | 1 | No |

Notes:
- `static/img/favicon.ico` is referenced in `docusaurus.config.js` but file is missing.
- Branding asset `static/img/ai-hpc4cst_logo.png` was kept intentionally.

## 2) Blog-Related Residue (Website Enforcement)

### Found
- Classic preset `blog` block in `docusaurus.config.js`
- RSS/Atom feed options in blog config
- Local `blog/` folder with sample posts/authors/tags
- `i18n/es/docusaurus-plugin-content-blog/options.json`
- Blog-related i18n strings in `i18n/es/code.json` and `i18n/es/docusaurus-theme-classic/footer.json`

### Usage assessment
- Internal blog route/content existed only because blog plugin was enabled.
- No navbar item linked to internal `/blog`.
- Existing mentions of “blog” in docs/home are external tool blogs, not internal Docusaurus blog content.

### Recommendation
- Disable/remove internal blog plugin content for website behavior.
- Remove RSS/feed config if no internal blog.
- Remove local `blog/` folder if unreferenced (confirmed).

## 3) Redundant Configuration

Reviewed:
- `docusaurus.config.js`
- `sidebars.js`
- `package.json`
- `.github/workflows/deploy.yml`

Findings:
- Redundant for website goal: full internal blog config block (including feed settings).
- No duplicate npm scripts.
- No duplicate workflows (single deploy workflow only).
- No overlapping deploy files found.

## 4) Unused Components / Pages

Scanned:
- `src/components/`
- `src/pages/`
- `src/css/`
- `src/theme/`

Findings:

| Path | Reference count | Removal confidence |
|---|---:|---|
| `src/components/HomepageFeatures/` (empty legacy dir) | 0 | High |
| `src/theme/Footer/Layout/index.js` | 0 from active footer path | High |
| `src/theme/Footer/Links/index.js` | 0 from active footer path | High |
| `src/theme/Footer/Links/Simple/index.js` | internal-only | High |
| `src/theme/Footer/Links/MultiColumn/index.js` | internal-only | High |
| `src/theme/Footer/LinkItem/index.js` | internal-only | High |
| `src/theme/Footer/Copyright/index.js` | 0 from active footer path | High |
| `src/theme/Footer/Logo/index.js` | 0 from active footer path | High |
| `src/theme/Footer/Logo/styles.module.css` | imported only by removed logo file | High |

Notes:
- `src/theme/Footer/index.js` is active and should remain.
- `src/pages/index.js`, `src/pages/index.module.css`, `src/css/custom.css` are active.

## 5) Dependency Audit

`package.json` reviewed manually.

| Package | Used? | Removal confidence |
|---|---|---|
| `@docusaurus/core` | Yes | Keep |
| `@docusaurus/preset-classic` | Yes | Keep |
| `@mdx-js/react` | Yes (Docusaurus MDX runtime/peer) | Keep |
| `clsx` | Yes (`src/pages/index.js`, `src/theme/Footer/index.js`) | Keep |
| `prism-react-renderer` | Yes (`docusaurus.config.js`) | Keep |
| `react` | Yes | Keep |
| `react-dom` | Yes | Keep |
| `@docusaurus/module-type-aliases` (dev) | Yes (Docusaurus dev typing/tooling) | Keep |
| `@docusaurus/types` (dev) | Yes (config typings) | Keep |

No high-confidence dependency removals identified.

---

## Cleanup Actions Applied

1. Disabled internal blog in `docusaurus.config.js` (`blog: false`) and removed RSS/feed behavior.
2. Simplified website navigation in `docusaurus.config.js`:
   - Navbar now prioritizes `Home`, `Documentation`, `Tools`, `GitHub`.
   - Footer links simplified for website usage.
3. Removed internal blog content:
   - Deleted `blog/` directory.
   - Deleted `i18n/es/docusaurus-plugin-content-blog/options.json`.
4. Removed confirmed-unused static assets (non-branding):
   - `static/img/psa/psa-01.webp`
   - `static/img/psa/psa-02.webp`
   - `static/img/psa/psa-03.webp`
   - `static/img/psa/psa-04.webp`
   - `static/img/psa/psa-05.webp`
   - `static/img/psa/psa-ai-02.webp`
5. Removed redundant footer swizzle files not used by active footer override.
6. Removed empty legacy `src/components` template folder.

## Validation

- `npm run build`: **Pass** (re-run after each cleanup group)
- Broken imports: **None detected**
- Broken routes during build: **None detected**
- Homepage rendering: **Build successful; homepage route compiles**
- Site behavior: **Website-first (internal blog removed/disabled)**
