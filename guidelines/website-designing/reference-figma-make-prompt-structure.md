# Reference: Figma Make prompt structure

**For the AI:** When you output the Figma Make prompt, use this structure. Fill it from the Notion page and the UX rules. Keep sections and bullets; avoid long paragraphs.

**For you:** You don't need to read this file. Step 2 tells the AI to use it automatically.

---

## Output structure (use these sections in order)

```
Create a high-fidelity web mockup for [PROJECT_NAME], a [INDUSTRY] business.

**Target keywords (weave into headings/copy where natural):**  
[TOP_3_KEYWORDS]

**Style:** [STYLE]

**Reference / inspiration:**  
- Competitor 1: [URL] — [what to take]
- Competitor 2: [URL] — [what to take]
[Any other inspiration links]

**Pages/sections to design:**  
[PAGES_NEEDED]

**Brand assets:**  
[BRAND_ASSETS]

**Goal:**  
[GOAL]

**UX requirements (apply per project type — local business / ecommerce):**  
[Short, one-line design instructions from reference-ux-rules-local-business-ecommerce.md, e.g.:  
- Footer: direct links to "Shipping" and "Return Policy"; avoid hiding behind "Help" only.  
- Homepage: convey breadth of offerings (~40–50% of main product/service types).  
- If ecommerce: guest checkout most prominent; delivery date shown; payment section visually encapsulated.  
- Trust: visual trust cues near sensitive inputs; clear labels.  
- Mobile: full scope in link text; adequate hit areas.]

**Constraints:** [if any, e.g. Mobile-first; include sticky header and one clear CTA]

Output a complete, production-ready UI suitable for handoff to a developer. Use clear typography hierarchy, consistent spacing, and appropriate components for the industry.
```

---

## Example (filled)

```
Create a high-fidelity web mockup for Geomar Food Catering, a private school catering business.

**Target keywords (weave into headings/copy where natural):**  
school catering, event catering near me, corporate catering

**Style:** Modern, clean, trustworthy.

**Reference / inspiration:**  
- Competitor 1: https://competitor1.com — Hero with headline + subline; services in 3-column grid; trust badges above footer  
- Competitor 2: https://competitor2.com — Strong "Get a quote" CTA; contact form with optional phone; menu preview cards  

**Pages/sections to design:**  
Home: hero, services, sample menu, contact CTA.

**Brand assets:**  
Logo in project folder; primary green #2D5016, white background, dark gray text.

**Goal:**  
Landing page that builds trust and drives quote requests from schools and event planners.

**UX requirements (local business):**  
- Footer: direct links to "Shipping" (or "Delivery") and "Return Policy"; do not hide only under "Help" or "FAQ".  
- Homepage: convey breadth of offerings (e.g. 40–50% of main service types) so visitors see what the business does.  
- Trust: add visual trust cues near contact/quote forms (encapsulated section, clear labels).  
- Phone: if you include a phone field, explain why (e.g. "For delivery questions") or make it optional.  
- Mobile: featured links with full scope in the link text (e.g. "School catering" not just "Catering"); adequate touch targets.

**Constraints:**  
Mobile-first; include sticky header and one clear "Get a quote" CTA.

Output a complete, production-ready UI suitable for handoff to a developer. Use clear typography hierarchy, consistent spacing, and appropriate components for the industry.
```

---

## Rules for the AI

1. Fill all sections from the Notion page content.  
2. Add a **UX requirements** section by pulling from `reference-ux-rules-local-business-ecommerce.md`: only items that apply to the project type (local business and/or ecommerce). Write each as a **short, one-line** design instruction.  
3. Keep the prompt **structured** (sections, bullets). No long paragraphs—that works best for Figma Make.
