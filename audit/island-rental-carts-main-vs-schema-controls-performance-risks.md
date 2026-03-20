# Performance risk analysis: `main` vs `schema-controls`

**Repo:** `c:\Users\Lifetechvn\Downloads\island_rental_carts\island-rental-carts`  
**Compared:** `main` … `origin/schema-controls`  
**Note:** The remote branch is named **`schema-controls`** (not `scheme-control`). If you meant a different branch, re-run the diff against that ref.

**Scope of diff (11 files):** Structured data (JSON-LD) controls from Sanity, GROQ query extensions, new `structuredData` schema type, and wiring on home + contact. **No `package.json` / lockfile changes** — no new npm dependencies in this comparison.

---

## Summary

For **PageSpeed Insights / Lighthouse**, this branch is **low risk**: changes are mostly **server-side** (GROQ fields, object building, conditional JSON-LD). There are **no new client bundles**, **no `useEffect` / hydration changes**, and **no new render-blocking JS** introduced by the diff.

The main things to watch are **tiny increases in HTML/Sanity payload** by default, and **operational/CMS choices** (toggles) that can shrink or grow the inlined JSON-LD.

---

## Performance risks by Lighthouse metric

### LCP (Largest Contentful Paint)

| Risk | Severity | Notes |
|------|----------|--------|
| Marginally larger Sanity document for homepage/contact queries | **Very low** | `structuredData { enableFaq, enableReviews, disableItemReviewed, removeFields }` adds a small object to existing `sanityFetch` responses. Unlikely to move LCP meaningfully vs network + image/hero work. |
| Extra server work to build JSON-LD (`applyRemoveFields`, branches) | **Very low** | Runs during SSR/RSC; does not add JS to the client critical path for LCP. |
| JSON-LD `<script type="application/ld+json">` blocks | **Low (usually none)** | These are not executable JS; they add bytes to HTML. Same pattern as `main` (three blocks when FAQ is on). |

**Positive (potential):** If CMS sets `enableFaq: false`, the FAQ JSON-LD `<script>` is omitted → **slightly smaller HTML** than `main` for that configuration.

---

### CLS (Cumulative Layout Shift)

| Risk | Severity | Notes |
|------|----------|--------|
| Layout-affecting UI changes | **None identified** | Diff does not change components that control layout (no new images without dimensions, no new CSS, no conditional rendering of visible DOM in this diff). |
| Conditional FAQ JSON-LD only | **None** | Removing a non-visual `<script>` does not affect layout. |

---

### TBT / main-thread (Total Blocking Time)

| Risk | Severity | Notes |
|------|----------|--------|
| New client JavaScript | **None** | No new imports of heavy libraries; no change to client components in the diff. |
| JSON-LD `JSON.stringify` | **Negligible** | Executes on the server when generating the page, not as long tasks on the user’s main thread. |

---

### “Bundle size” / transfer size (related: Performance, LCP)

| Risk | Severity | Notes |
|------|----------|--------|
| New npm packages | **None** | `git diff main..origin/schema-controls -- package.json package-lock.json` is empty. |
| Larger static assets | **None** | No new images/fonts in this diff. |
| Inlined JSON-LD size | **Low** | Default behavior similar to `main` (3 JSON-LD blocks when FAQ enabled). Editors can **reduce** payload via `enableFaq: false` or `removeFields` (strip top-level keys). |

---

### Network activity

| Risk | Severity | Notes |
|------|----------|--------|
| Extra Sanity/API round-trips | **None added** | Still one homepage `sanityFetch`; contact page still fetches page doc (unchanged pattern). `generateMetadata` + page both fetch on contact — **pre-existing**, not introduced by this branch. |
| Slightly larger GROQ response | **Very low** | One nested `structuredData` object per query that includes it. |

---

## Operational / CMS risks (indirect PSI impact)

- **`removeFields`:** Powerful but easy to misconfigure. Wrong keys don’t directly harm PSI; they affect schema validity/SEO.
- **`enableReviews` / `enableFaq`:** Turning off FAQ removes one JSON-LD script → **smaller HTML** (good for weight; neutral-to-positive for PSI).
- **`disableItemReviewed`:** Only changes JSON-LD shape; **no PSI impact** expected.

---

## Files touched (for traceability)

- `src/components/JsonLd.tsx` — CMS-driven toggles, optional FAQ block, `applyRemoveFields`
- `src/app/page.tsx` — passes `structuredData` from homepage
- `src/app/contact/page.tsx` — passes `structuredData` into `buildLocalBusiness`
- `src/sanity/lib/queries.ts` — GROQ selects `structuredData`
- `src/sanity/schemas/*` + `structuredData.ts` — Studio fields
- `src/types/structuredData.ts` — TypeScript type

---

## Conclusion

**No material negative shift to PSI/Lighthouse is expected** from this branch under typical CMS defaults. The diff is **SEO/schema-focused**, not performance-regressive in bundle or runtime terms. The only sustained “cost” is **slightly more data** in Sanity responses and **marginally larger HTML** unless editors use toggles to slim JSON-LD.

*Generated from `git diff main..origin/schema-controls` on the island-rental-carts repository.*
