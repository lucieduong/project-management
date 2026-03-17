# Reference: UX rules for local business & ecommerce websites

**For the AI:** Use this document when building the Figma Make prompt. Turn the relevant rules into short, actionable design instructions in the prompt. Match the project type (local business and/or ecommerce).

**For you:** You don’t need to read this file. Step 2 tells the AI to use it automatically.

---

# AI UI/UX Agent Guideline: Local Business & Ecommerce Websites

**Purpose:** This document is a research-based checklist and guideline for an AI UI/UX agent designing or evaluating **local business websites** and **ecommerce websites**. All recommendations are extracted from Baymard Institute articles (2024–2026) in the scraped blog corpus.

**Scope:** Use this for design decisions, audits, and copy when generating or reviewing UI/UX for local business sites (e.g., services, stores with physical presence) and ecommerce sites (product catalogs, checkout, self-service).

---

## 1. Local Business Websites

### 1.1 Trust & Findability
- **Footer:** Provide **direct, standalone links** to "Shipping Info" (or "Delivery") and "Return Policy" in the footer. A subgroup of users consistently look in the footer for these; do not hide them behind generic "Help" or "FAQ" only.
- **Keywords:** Use conventional link text (e.g. "Return Policy", "Shipping") so users can scan or use "find on page"; avoid unconventional phrases that don't match what users search for.
- **Return vs Return Policy:** Clearly distinguish "Return an Item" (initiating a return) from "Return Policy" (terms). Cross-link or merge so users who land on the wrong page can switch easily.

### 1.2 Physical Presence & Omnichannel
- **In-store returns:** If the business has a physical location, present **in-store return** as an equal option to mail returns (same visual prominence). Users prefer it for cost, convenience, faster refunds, and easier exchanges.
- **Store pickup:** If offering pickup, surface it in the **same interface** as shipping options (e.g. at checkout), not only on product or cart. Users who change their mind at checkout should not have to go back to cart to switch fulfillment.
- **Location/distance:** When showing in-store return or pickup, consider indicating distance or "nearest store" based on user location (e.g. IP geo-targeting) so users can judge convenience.

### 1.3 Contact & Reassurance
- **Phone number:** If you ask for a phone number, **explain why** (e.g. "For delivery questions only") and/or make the field optional. Unexplained required phone fields increase reluctance and fake data; 14% of users say they would never give a phone number.
- **Security perception:** For lesser-known or local brands, add **visual trust cues** near sensitive inputs (encapsulation of payment fields, clear labels, optional seals). Layout bugs or quirks on key pages can make users doubt security and abandon.

### 1.4 Homepage & Scope
- **Product/service breadth:** Ensure the homepage conveys **breadth** of what the business offers (e.g. 40–50% of main product/service types). First-time visitors infer "what this site has" from the homepage; narrow focus can make them assume other offerings aren't available and leave.
- **Featured links on mobile:** On mobile, if you link to a subcategory or filtered list from the homepage, **include full scope in the link text** (e.g. "Women's New Arrivals" not just "New Arrivals") so users don't think they're seeing the full catalog.

---

## 2. Ecommerce: Homepage & Category Navigation

### 2.1 Homepage
- **Scope on mobile:** For featured scope links on mobile homepages, include **full scope** in the link (category + subcategory/filter), e.g. "Women's New Arrivals", to avoid tunnel vision and misunderstandings.
- **Product breadth:** Showcase a **wide selection** of product types (at least ~40% of types). Use images/thumbnails; don't rely on a carousel alone for breadth—many users won't see all slides.
- **Ads and promotions:** Avoid **overly aggressive or distracting** ads in prime content (especially above the fold). No pop-up banners or overlays as the main way to convey key info. On mobile, avoid ads that shrink the viewport or feel cluttered.
- **Carousels:** If used: 5–7 s per slide (min) for text-light slides; up to ~10 s for text-heavy; **pause on hover**; on mobile, **no autorotation**. Prefer static sections + featured categories where possible.
- **Hit areas:** Make it **clear** whether a visual block is one link or several. On desktop use hover and styling (borders, separators, arrows); on mobile use a single hit area per element and match hit area size to the visible control.

### 2.2 Category Structure
- **Chunking:** Keep categories/subcategories in **manageable chunks** (~10 or fewer options per level). Subdivide when you exceed that; ensure deepest level has at least ~10 products.
- **Current scope:** **Highlight the user's current scope** in the main nav (e.g. different color/weight for the active category). ~95% of sites fail this; without it, orientation and learning the structure are harder.
- **Parent categories:** Make **parent category headers in dropdowns clickable** (e.g. "Shoes") so users can land on a broad category page, not only subcategories.
- **Hover delay:** For hover-based dropdowns, use a **300–500 ms delay** before opening to avoid flicker and accidental opening of sibling categories when moving the cursor.
- **Intermediary category pages:** Put **subcategories as primary content** at the top. Use **clear, representative thumbnails** for subcategories. **Link inspirational imagery** to the exact products or a curated list of those products; don't link to a generic list where featured items are buried.

---

## 3. Ecommerce: Product Lists & Filtering

### 3.1 List Design
- **Variations:** **Combine** color/size/style variations into **one list item** with swatches (or similar) instead of one row per variation. Separate rows for each variation clutter the list and make comparison harder.
- **Thumbnails:** Provide **3+ thumbnails** per product in list/search (2 as minimum). For apparel/accessories, consider 5–15 for full visual evaluation. Allow navigation (e.g. swipe/carousel) without leaving the list.
- **Price per unit:** For products sold in different volumes/quantities, show **price per unit** as well as total price so users can compare.

### 3.2 Filtering
- **Essential filter types:** Always offer these when relevant: **Price**, **User ratings**, **Color**, **Size**, **Brand**.
- **Multiple values:** Allow **multiple selections within the same filter type** (e.g. Blue + Black for Color). Mutually exclusive options force tedious back-and-forth and memorization.
- **Horizontal filter bars:** Use only when filter count is **limited** (e.g. ≤ ~8). Prefer **sidebar filters** when many filter types exist; horizontal bars hide options by default and "All Filters" is often overlooked.
- **Applied filters:** Show an **overview of applied filters** (e.g. above the list) with an easy way to remove (e.g. "Clear all", per-filter remove). On mobile, horizontal scroll or stacked list at top works well.

### 3.3 Sorting
- Offer at least: **Price**, **User rating**, **Best selling**, **Newest**. Many users rely on these to surface relevant items.

---

## 4. Ecommerce: Product Page

### 4.1 Imagery & Media
- **Additional images:** Prefer **thumbnails** (not only dots) for the image gallery when multiple images exist; thumbnail indicators have been shown to support higher conversion.
- **Reviews with images:** Allow users to **navigate across reviewer-submitted images** (e.g. overlay carousel with arrows/swipe) without closing and reopening each review.
- **Social proof:** Where possible, **integrate curated social media images** (e.g. from Instagram) on the product page, with links to shoppable/larger views. Avoid an overload of paid-promotion posts so it feels authentic.

### 4.2 Reviews
- **Review form:** Ask only **highly relevant** questions for the product. Avoid long surveys or off-topic questions (e.g. network performance); simpler forms yield more reviews.
- **Negative reviews:** **Respond to negative reviews** and style staff replies differently from user reviews. This signals care and support and improves perceived quality.
- **Reviewer images:** Support **navigation across all reviewer images** (e.g. one carousel across reviews), not only within a single review.

### 4.3 Shipping & Cost
- **Shipping on product page:** Show **estimated shipping cost** (or "Free shipping" with conditions) on the product page; 43% of sites don't. Don't rely only on banners or header for free shipping—many users miss them.
- **Free shipping placement:** Place "Free shipping" **near the Buy/Add to Cart section**, not only in site-wide banners or headers. State any **conditions** (e.g. "Orders over $75") clearly next to the message; don't hide behind a tiny asterisk. **Dynamically update** (e.g. "Spend $35 more for free shipping") based on cart.
- **Buy section:** Keep the Buy section focused; avoid bloating it with too many upsells, warranties, and secondary CTAs so users can complete the primary action.

### 4.4 Out-of-Stock & Discontinued
- **Temporarily out of stock:** Let users **order** temporarily out-of-stock items and show an **extended delivery date**. Offer a short explanation (e.g. tooltip near Buy). Promote **alternatives** clearly. Don't rely only on "Email when in stock" or "Save to list" (especially if saving requires account creation).
- **Discontinued:** Clearly mark "Discontinued" or "No longer available" and **prominently promote alternatives** (e.g. replacement model) at the top of the page or in place of the Buy section.

---

## 5. Ecommerce: Checkout

### 5.1 Account & Guest
- **Guest checkout:** Offer **Guest checkout** and make it the **most prominent** option on the account step. 19% have abandoned due to not wanting to create an account; if Guest is hard to find, it's as bad as not offering it.
- **Account creation:** **Delay** account creation until **after** the order (e.g. on confirmation step). Inform users at the account step that they can create an account at the end. Avoid forcing password/birthdate fields in the main flow.
- **Passwords:** Use **minimal** password rules (e.g. 6–8 character minimum). Strict rules increase sign-in and reset friction and abandonments; consider passwordless (e.g. magic links, 2FA) where appropriate.

### 5.2 Form Fields & Layout
- **Minimize fields:** **Reduce the number of form fields**; perceived effort matters more than number of steps. Aim for as few as needed (e.g. ideal flows can be as low as ~12 elements total). Average checkouts have far more than necessary.
- **Single name field:** Use one **"Full name"** field instead of separate First/Last; many users type full name in the first field and then correct.
- **Address Line 2:** **Hide** "Address Line 2" behind a link (e.g. "Add Apt, Suite, Floor"); show by default only if needed. Consider **automatic address lookup** to speed completion.
- **Coupon field:** **Hide** coupon/promo code behind a link so users aren't prompted to leave to search for codes. Prefer proactively applying applicable discounts.
- **Billing address:** Default to **"Same as shipping"** and **hide** billing fields until the user opts for a different billing address.
- **Required vs optional:** **Mark both** required and optional fields (e.g. asterisk + "(optional)"). Don't mark only one type; 32% of participants missed required fields when only optional was marked.
- **Optional inputs:** Use the **right control type**: hide uncommon optional fields (e.g. Company, Address Line 2) behind a link; avoid radio/dropdown for purely optional choices when a checkbox (e.g. "Use billing as shipping") is clearer.
- **Phone number:** If required, **explain why** inline (e.g. "For delivery updates" or "Payment verification"). Otherwise make it optional or omit it.

### 5.3 Delivery & Fulfillment
- **Delivery date:** Show **delivery date** (or range), e.g. "Delivery April 4–8", not only "2–3 business days." Users care about "When will I get it?"
- **Order cutoff:** Show **cutoff as a countdown** (e.g. "Order in the next 43 minutes to get it by Tuesday") instead of a static time in one timezone.
- **Fulfillment options:** In the **shipping/fulfillment step**, list **all** options (ship, store pickup, local delivery) in one place so users can switch without going back to cart. Frame store pickup as a benefit (e.g. "Free pickup") where relevant.

### 5.4 Cart
- **Quantity:** Use **buttons** or **buttons + text field** for quantity in cart. Avoid plain text field only; it leads to wrong quantities (e.g. "21" instead of "2") and more so on mobile.

### 5.5 Validation & Errors
- **Adaptive errors:** Use **adaptive error messages** that state the exact issue and how to fix it (e.g. "Your card number is incomplete") instead of a single generic "Invalid."
- **Recovery:** Preserve entered data (e.g. card details) after validation errors so users don't re-enter everything.

### 5.6 Trust & Security (Perceived)
- **Payment section:** **Visually encapsulate** the payment/card section (border, background, padding) so it looks distinct from less sensitive fields. Add 1–2 trust elements (e.g. padlock, seal) **inside** that area.
- **Seals:** Any clear visual seal/icon can help; Norton SSL and well-known trust seals (e.g. BBB) perform well. Even a simple "Secure checkout" or padlock helps; avoid cluttering.
- **Layout:** **Fix layout bugs** and quirks on checkout; they erode trust and can make users suspect the site is broken or unsafe.

---

## 6. Ecommerce: Accounts & Self-Service

### 6.1 Account Menu & Dashboard
- **Account menu:** Include direct links to: **Account dashboard**, **Orders**, **Payment methods**, **Loyalty**, **Wishlist**, **Addresses**, **Password**. Don't truncate to 2–3 links; users use the menu as the main anchor for account tasks.
- **Dashboard:** From the account dashboard, provide paths to **all** account features (direct links or grouped sections). Don't force users to hunt only via the menu.

### 6.2 Stored Payment
- **Edit card:** Offer an **"Edit" flow** for stored cards that behaves like editing: show masked number, then one flow to replace with new number (combine delete + add behind one "Edit" action). Don't force "Delete then re-add" with no explanation.

### 6.3 Orders & Tracking
- **Tracking on-site:** **Integrate** order and shipment tracking on **your site** (delivery date, courier, events). Don't send users to the carrier's site as the only way to track; transitions and missing context hurt trust and clarity.
- **Cancellation:** After a cancel request, show a **"Cancellation requested" / "Pending cancellation"** state in order history and detail, and send a **confirmation email**. Avoid leaving the order in a generic "Received" or "Processing" state with no feedback.

### 6.4 Returns
- **In-store returns:** If available, show **in-store return** with the same prominence as mail return in the return flow and in help/FAQ. Use similar styling and placement so users can choose without hunting.
- **Footer:** Provide direct footer links to **Return Policy** and **Shipping Info** (see Local Business).

---

## 7. Mobile-Specific

### 7.1 Navigation & Taxonomy
- **Current scope:** **Highlight current scope** in the main nav when the menu is open (same principle as desktop).
- **View All:** At **each level** of the category tree, offer a **"View all [category]"** option so users can jump to a product list without drilling to the deepest level.
- **Overcategorization:** When product types share most attributes (e.g. refrigerator styles), use **filters** instead of separate top-level categories so users can compare in one list.

### 7.2 Search
- **Autocomplete:** Support **abbreviations and symbols** (e.g. "3pc" = "3-piece", "13 in" = "13 inch") and map them to the same results as full terms.
- **Scope in autocomplete:** When a query can match multiple categories, include **category scope suggestions** in autocomplete (e.g. "[query] in Furniture") so users can narrow before submitting.

### 7.3 Touch & Input
- **Keyboards:** Use the **correct input type** (e.g. `inputmode="decimal"` for card numbers, email type for email, tel for phone) so the right keyboard appears and errors decrease.
- **Autocorrect:** **Disable autocorrect** on fields where it hurts (names, street, city, email); keep it for general text. Use e.g. `autocorrect="off"` where appropriate.
- **Hit areas:** Match **touch target size** to the visible element; ensure links and buttons are easy to tap.

### 7.4 Thumbnails & Product Page
- **List thumbnails:** Provide **3+ thumbnails** per product in lists (same as desktop); support swipe/carousel. For apparel/accessories, consider 5–15.
- **Social visuals:** Consider **social media–sourced images** on the product page for additional visual proof.

---

## 8. Accessibility (EAA / WCAG-Aligned)

- **Non-text content:** Provide **text alternatives** (e.g. meaningful `alt` text) for images and other non-text content; avoid images of text for critical content.
- **Keyboard:** Ensure **full keyboard operability** (focus order, visible focus indicators, skip links). Main nav, filters, and list items must be keyboard-accessible.
- **Contrast & readability:** Meet **contrast** requirements (e.g. 4.5:1 normal text, 3:1 for UI components). Support user-adjustable text spacing (line height, letter/word spacing) where required.
- **Forms & errors:** Use **programmatic labels** and group related fields. **Error messages** must be perceivable and understandable (not only color; use text and structure). Ensure errors are announced to screen readers.
- **Structure:** Use **semantic headings** (e.g. `<h1>`–`<h6>` in order) and **ARIA landmarks** where needed. Provide clear, descriptive **page titles**.

---

## 9. AI Agent Notes (From Baymard 2026)

- **Accuracy of UX advice:** Research indicates that generic LLM-based UX/CRO suggestions have **low documented accuracy** (e.g. 50–75%) and can suggest changes that **harm conversion**. Prefer **rule-based, research-grounded checks** over open-ended "suggest improvements."
- **Small changes, big impact:** Many high-impact fixes are small (e.g. delivery date instead of "2–3 days", placement of "Place Order" button, required vs optional field labeling). Treat "small" UI details as potentially conversion-critical.
- **Validation:** When suggesting changes, tie them to **specific, documented guidelines** (e.g. "mark optional fields" rather than vague "improve form"). Avoid recommending changes that contradict the patterns above.

---

## 10. Quick Reference Checklist

**Local business**
- [ ] Footer: direct "Shipping" and "Return Policy" links
- [ ] In-store return and/or pickup shown with same prominence as mail/ship
- [ ] Phone number explained or optional; trust cues for lesser-known brands
- [ ] Homepage shows breadth of offerings; mobile featured links show full scope

**Homepage & navigation**
- [ ] Current scope highlighted in main nav; parent categories clickable
- [ ] Hover delay on dropdowns; categories in chunks of ~10
- [ ] Intermediary pages: subcategories first, thumbnails, links from inspirational images to products
- [ ] No aggressive ads above the fold; carousel timing and pause rules

**Product list & filtering**
- [ ] Variations combined in one row; 3+ thumbnails; unit price when relevant
- [ ] Filters: Price, Rating, Color, Size, Brand; multi-select per type; applied filters visible
- [ ] Sort: Price, Rating, Best selling, Newest

**Product page**
- [ ] Shipping cost or free-shipping conditions near Buy section
- [ ] Reviews: simple form, respond to negative, navigate reviewer images
- [ ] Out-of-stock: allow order with extended date + alternatives; discontinued: mark + alternatives

**Checkout**
- [ ] Guest checkout most prominent; account creation after order
- [ ] Minimal fields; single name; Address Line 2 and coupon hidden; billing same as shipping
- [ ] Required/optional marked; phone explained or optional
- [ ] Delivery date and cutoff countdown; all fulfillment options in one step
- [ ] Quantity with buttons; adaptive errors; payment section visually encapsulated

**Accounts & self-service**
- [ ] Full account menu and dashboard links; "Edit" for stored cards
- [ ] Tracking on-site; "Cancellation requested" state and email
- [ ] In-store return equally prominent

**Mobile**
- [ ] View All at each nav level; correct keyboards and autocorrect off where needed
- [ ] 3+ thumbnails in lists; category scope in autocomplete

**Accessibility**
- [ ] Alt text, keyboard support, contrast, form labels and error handling, headings/landmarks

---

*Sources: Baymard Institute blog (scraped articles 2024–2026).*
