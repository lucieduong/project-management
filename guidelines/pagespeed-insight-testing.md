# Lighthouse MCP setup (Mac & Windows)

Use this guide so **developers (Mac)** and **project managers (Windows)** can run Lighthouse audits from Cursor via the Lighthouse MCP. Each person sets this up on their own laptop; the MCP runs locally and does not affect the shared repo.

---

## How it works

- **MCP** = Model Context Protocol. The Lighthouse MCP is a Cursor integration that runs Lighthouse (performance, SEO, accessibility, security) on a URL you provide.
- **Config is per machine.** You add the Lighthouse MCP in your own Cursor settings. Nothing is committed to the repo except this doc.
- **Chrome is required.** The MCP uses Chrome/Chromium to run audits. You must have Chrome installed on your machine (Mac or Windows).

---

## Step 1 — Install Chrome (required)

The Lighthouse MCP looks for Chrome in standard locations. Install one of the following on your machine.

### On Mac

- **Option A (recommended):** [Download Google Chrome](https://www.google.com/chrome/) and install. Typical path:  
  `Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- **Option B:** Install via Homebrew:  
  `brew install --cask google-chrome`

### On Windows

- [Download Google Chrome](https://www.google.com/chrome/) and install. Typical path:  
  `C:\Program Files\Google\Chrome\Application\chrome.exe`  
  (or `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe` on 32‑bit).

If you use **Brave** (Chromium-based) on Mac only, the MCP may not detect it; use Chrome for the MCP.

---

## Step 2 — Enable the Lighthouse MCP in Cursor

1. In Cursor, open **Settings** → **MCP** (or **Cursor Settings** → **Features** → **MCP**).
2. Ensure the **Lighthouse** MCP server is enabled. If you added it via “Add new MCP server,” it may be listed as `lighthouse` or `user-lighthouse`.
3. No project-specific config is required in the repo; MCP config lives in your Cursor user settings.

If the Lighthouse MCP is not installed, add it from the Cursor MCP marketplace or follow Cursor’s docs for adding an MCP server.

---

## Step 3 — Run an audit

In the Cursor chat (in this repo), you or the PM can ask the AI to run a Lighthouse audit, for example:

- *“Run a full Lighthouse audit on https://islandrentalcarts.com/”*
- *“Use the Lighthouse MCP to check performance and SEO for https://staging.islandrentalcarts.com”*

The AI will call the MCP tools (performance, SEO, accessibility, security, Core Web Vitals). Results are returned in the chat.

---

## If you see “No Chrome installations found”

- **Mac:** Install Google Chrome (see Step 1). Restart Cursor after installing so it can detect Chrome.
- **Windows:** Install Google Chrome and ensure it’s in the default install path. Restart Cursor.
- The MCP does not use Brave, Edge, or other Chromium-based browsers unless its config explicitly supports a custom path; Chrome is the safest choice.

---

## Troubleshooting: Mac — "Operation not permitted" or "Unable to connect to Chrome"

When running **Lighthouse via CLI** (`npx lighthouse ...`) or the **Lighthouse MCP** from Cursor on Mac, Chrome may fail with:

- `Operation not permitted` on `.../Google/Chrome/Crashpad` (getxattr/setxattr)
- `connect ECONNREFUSED 127.0.0.1:...` (Chrome didn’t start correctly)

**Cause:** macOS is blocking Chrome (or the process that launches it) from writing to `~/Library/Application Support/Google/Chrome/Crashpad`.

**Fixes (pick one):**

1. **Grant Full Disk Access** — Open **System Settings → Privacy & Security → Full Disk Access**. Add **Cursor** (and/or **Terminal** if you run `npx lighthouse` from Terminal). Quit and reopen Cursor/Terminal, then run the audit again.
2. **Run Lighthouse from Terminal (outside Cursor)** — Open the **Terminal** app, `cd` to your project, and run: `npx lighthouse https://islandrentalcarts.com/ --output=html --output-path=./lighthouse-report --view`. If Terminal also hits the same error, add **Terminal** to Full Disk Access.
3. **Run with full permissions in Cursor** — When asking the AI to run `npx lighthouse`, request that the command run with full (non-sandbox) permissions so Chrome can access its data directory.

Reports are written to `./lighthouse-report.report.html` and `./lighthouse-report.report.json`. Open the HTML file in a browser to view the full report.

---

## PM: Alternative without MCP (no Chrome needed)

If the PM prefers not to install Chrome or use the MCP, they can use **PageSpeed Insights** in the browser and follow the existing guide:

- **[.cursor/PM_PERFORMANCE_AND_PSI_GUIDE.md](.cursor/PM_PERFORMANCE_AND_PSI_GUIDE.md)** — run PSI on live vs staging, compare scores, and create Linear tasks.

That workflow does not require Cursor or the Lighthouse MCP.

---

## Summary

| Role   | Machine | Action |
|--------|---------|--------|
| Dev    | Mac     | Install Chrome → enable Lighthouse MCP in Cursor → ask AI to run audit. |
| PM     | Windows | Install Chrome → enable Lighthouse MCP in Cursor → ask AI to run audit. |
| PM     | Any     | Or use PageSpeed Insights + PM_PERFORMANCE_AND_PSI_GUIDE.md (no MCP). |
