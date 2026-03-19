---
name: lighthouse-full-audit
description: Runs a full Lighthouse audit (performance, SEO, accessibility, security, Core Web Vitals) for any URL. Tries Lighthouse MCP first, falls back to npx lighthouse CLI. Use when the user asks for a Lighthouse audit, performance audit, or to run Lighthouse on a URL.
---

# Full Lighthouse Audit for Any URL

Run a complete Lighthouse audit on any URL: performance, SEO, accessibility, security, and Core Web Vitals. Prefer MCP when available; fall back to CLI if MCP fails.

---

## 1. Get the URL

Use the URL the user provided (e.g. `https://example.com/`). If none given, ask for it.

---

## 2. Try Lighthouse MCP first

If the **Lighthouse MCP** (e.g. `user-lighthouse`) is available, call these tools in parallel for the URL:

- `get_performance_score` — `url`, `device`: `"mobile"` (and optionally `"desktop"`)
- `get_seo_analysis` — `url`, `device`: `"mobile"`, `includeDetails`: `true`
- `get_accessibility_score` — `url`, `device`: `"mobile"`, `includeDetails`: `true`
- `get_security_audit` — `url`, `device`: `"mobile"`
- `get_core_web_vitals` — `url`, `device`: `"mobile"`, `includeDetails`: `true`

**If all succeed:** Summarize scores and recommendations in the chat. Done.

**If any fail** (e.g. "No Chrome installations found", "performance mark has not been set", "ECONNREFUSED"), proceed to Step 3.

---

## 3. Fallback: run Lighthouse CLI

Run a single full audit with the CLI so the user gets one report (performance, accessibility, best practices, SEO):

```bash
npx lighthouse <URL> --output=html --output=json --output-path=./lighthouse-report --no-enable-error-reporting
```

- Replace `<URL>` with the actual URL (e.g. `https://islandrentalcarts.com/`).
- Run from the project root or current directory. Reports are written next to the path: `./lighthouse-report.report.html` and `./lighthouse-report.report.json`.
- **Mac:** If the command fails with `Operation not permitted` on `.../Chrome/Crashpad` or `Unable to connect to Chrome`, run the same command with **full (non-sandbox) permissions** so Chrome can access its data directory. If it still fails, tell the user to grant **Full Disk Access** to Cursor (or Terminal) in System Settings → Privacy & Security.

---

## 4. Summarize results

After the CLI run (or if MCP succeeded):

1. **Scores:** From the JSON report or MCP responses, report:
   - Performance (0–100)
   - Accessibility (0–100)
   - Best Practices (0–100)
   - SEO (0–100)
   - Security (if from MCP)
2. **Core Web Vitals:** FCP, LCP, TBT, CLS (with units).
3. **Report location:** `./lighthouse-report.report.html` (open in browser). Optionally: `open lighthouse-report.report.html` (Mac) or the equivalent on the user's OS.

Keep the summary concise; link or reference the HTML report for details.

---

## 5. Optional: desktop run

If the user wants desktop as well, run a second CLI pass with:

```bash
npx lighthouse <URL> --preset=desktop --output=html --output=json --output-path=./lighthouse-report-desktop --no-enable-error-reporting
```

Report desktop scores and the path `./lighthouse-report-desktop.report.html`.

---

## Quick reference

| Step | Action                                                                                                                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Use URL from user (or ask).                                                                                                                                                                                            |
| 2    | Call Lighthouse MCP tools (performance, SEO, accessibility, security, Core Web Vitals). If all succeed, summarize and stop.                                                                                            |
| 3    | If MCP fails, run `npx lighthouse <URL> --output=html --output=json --output-path=./lighthouse-report --no-enable-error-reporting`; on Mac permission errors, retry with full permissions or suggest Full Disk Access. |
| 4    | Summarize scores, Core Web Vitals, and report path (`lighthouse-report.report.html`).                                                                                                                                  |
| 5    | If requested, run desktop preset and report desktop report path.                                                                                                                                                       |
