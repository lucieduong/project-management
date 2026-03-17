# Step 2: Get your Figma Make prompt in Cursor

Use Cursor to turn your Notion project page into a single **Figma Make prompt** you can paste into Figma. Do this **after** you’ve finished Step 1 and have your project page URL ready.

---

## Before you start

**Check that Notion is connected in Cursor.**  
In Cursor, make sure the **Notion MCP** (Notion integration) is enabled so the AI can read your project page. If the AI says it can’t access Notion, ask your team to confirm the Notion connection is set up.

---

## What you need

- Your **project page URL** from Step 1 (e.g. `https://www.notion.so/...` or the long ID from the URL).  
- This folder open in Cursor so the AI can use the reference files.

---

## What to do

1. Open **Cursor** and start a new chat (or use the Composer).  
2. **Copy everything inside the box below** (from “I need a single…” to “…no preamble or explanation.”).  
3. **Replace** `PASTE_YOUR_NOTION_PAGE_URL_HERE` with your actual project page URL.  
4. **Paste** the whole thing into Cursor and send.  
5. When the AI replies, **copy only the Figma Make prompt** it gives you (the block of text you can paste into Figma).  
6. Go to **Step 3** and paste that into Figma Make.

---

## Copy from here (replace the URL, then paste into Cursor)

```
I need a single, ready-to-paste Figma Make prompt for a website project.

1) Fetch the Notion page I'm working on: PASTE_YOUR_NOTION_PAGE_URL_HERE
   - Use the Notion MCP (notion-fetch) to get the full content of this page.
   - If you cannot access Notion, tell me to check that the Notion MCP is connected, then stop.

2) From that page, extract:
   - Client/project name, type of business, goal
   - Top 3 keywords (from the Research section)
   - Competitor 1 and 2: URLs and "what to take" for each
   - Design inputs: brand colors, logo, fonts, inspiration links
   - Pages to design
   - Website style (if mentioned; otherwise infer from type of business)

3) Apply the rules from guidelines/website-designing/reference-ux-rules-local-business-ecommerce.md. Turn the relevant rules into short, actionable design instructions for the mockup (e.g. footer links, trust cues, checkout prominence, mobile hit areas). Match the project type (local business and/or ecommerce).

4) Apply the Cursor rule **figma-make-prompt-best-practices** (Figma’s official guidance, sectioning, and SEO). Using the structure in guidelines/website-designing/reference-figma-make-prompt-structure.md, output exactly one Figma Make prompt that includes:
   - Target keywords (weave into headings/copy where natural)
   - Style and reference/inspiration (competitor URLs + takeaways)
   - Pages/sections to design
   - Brand assets
   - Goal
   - UX requirements (the design instructions from the guideline, as short bullets)
   - Any constraints (e.g. mobile-first)

5) Output only the final Figma Make prompt. No preamble, no explanation—just the prompt I can paste into Figma Make.
```

---

## Example (if your project page URL is like this)

If your URL is `https://www.notion.so/31cadf40abf880a1b3a7de98f3109e4f`, the first line inside the box would be:

`1) Fetch the Notion page I'm working on: https://www.notion.so/31cadf40abf880a1b3a7de98f3109e4f`

Replace only that one part; leave the rest of the prompt exactly as written.

---

## Next

After you copy the Figma Make prompt from the AI’s reply, go to [03-paste-in-figma-and-link-to-notion.md](03-paste-in-figma-and-link-to-notion.md).
