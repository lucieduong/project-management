# Best practices: Gitea + Cursor + PM workflow for remote teams

Senior-dev perspective on how to structure repos, folders, and Cursor so a less tech-savvy PM can be effective while you scale across multiple projects.

---

## TL;DR recommendation

| What | Recommendation |
|------|----------------|
| **Repos** | **One repo = project-management (meta).** One **separate repo per codebase** (per client/product). |
| **PM’s “home”** | **project-management** – guidelines, issue templates, Cursor skills/rules, links to projects. |
| **Where code lives** | **Not inside project-management.** Each app/site in its **own repo**; PM opens that folder only when needed. |
| **Cursor skills/rules** | Process/PM skills in **project-management** (and/or user-level). Code-specific rules in **each project repo**. |

---

## 1. Repo strategy: one meta repo + one repo per codebase

### Why not put all code inside project-management?

- **Bloat** – One huge clone, slow pulls, noisy history.
- **Permissions** – You can’t give a contractor “only client X”; it’s all or nothing.
- **CI/CD** – Hard to have “build only when this app changes.”
- **Mental model** – PM and devs think in “projects”; repos should match.

### Recommended layout

```
Gitea (git.lunardigital.net)
├── project-management          ← Meta repo (guidelines, templates, PM Cursor setup)
├── louisiana-hemp-bev          ← Repo for that app’s code only
├── geomar-catering             ← Repo for that project (or “geomar-website”, etc.)
├── gtm-seo-agency-tool         ← Repo for that tool’s code
└── … one repo per deliverable
```

**project-management** contains:

- `guidelines/` – how you work, issue writing, Figma, etc.
- `issues/` – templates, example issues, create-issue prompts
- `.cursor/rules` and `.cursor/skills` – **process- and PM-oriented** (Linear, Notion, Figma, audits, “how we write issues”)
- Optional: `projects/` with **non-code** only – briefs, screenshots, prompts, links to the actual repos (or remove `projects/` and link from Notion/Linear)

**Each project repo** contains only that project’s code and, if needed, project-specific Cursor rules (e.g. “this is a Remix app”).

---

## 2. How the PM should use Cursor and folders

### Default: open project-management

- Day-to-day: **Open the project-management folder in Cursor.**
- They get:
  - All guidelines and issue templates
  - Cursor rules/skills for Linear, Notion, Figma, audits, etc.
  - MCPs (Figma, Linear, Notion) – these are user/workspace level, so they work in any folder
- They do: writing issues, following workflows, pasting prompts from `issues/`, using skills that call Linear/Notion/Figma.

### When a specific project is needed

- **Open that project’s folder in a separate Cursor window** (or clone the repo into e.g. `~/development/louisiana-hemp-bev` and open it).
- They don’t need to open every project every day; only when reviewing, adding context, or working with that codebase.
- You can document: “For Louisiana Hemp work, open the `louisiana-hemp-bev` repo in Cursor.”

So: **one “home” workspace (project-management) + open project repos only when needed.**

---

## 3. Cursor skills and rules: where they live

| Type | Where to put it | Who uses it |
|------|------------------|-------------|
| Process / PM | **project-management** `.cursor/rules` and `.cursor/skills` | PM (and anyone) when they have project-management open |
| Company-wide (Linear, audits, etc.) | **project-management** and/or **user-level** `~/.cursor/skills` | Available in every workspace if you use user-level |
| Project-specific (stack, conventions) | **That project’s repo** `.cursor/rules` | Devs (and PM when they open that repo) |

- **PM stays in project-management most of the time** → they automatically get all process skills and rules.
- If you want the same skills in every repo (e.g. “create Linear issue”), put them in **user-level** skills so the PM doesn’t have to open project-management to use them. Process docs and templates can still live only in project-management.

---

## 4. Gitea setup for a dev manager

- **Organizations** – Create an org (e.g. `lunardigital`) and put repos there so you can manage teams and permissions in one place.
- **Teams** – e.g. “PM”, “Devs”, “Contractor – Client X”. Give PM read (or read+write) on project-management and read on project repos they need; give devs write on the repos they work on.
- **Repo visibility** – project-management can be internal/private; each client project repo can be restricted to the right people.
- **Branches** – Default branch `main`; use branches per feature/fix. You can document a simple flow (e.g. “branch from main → work → push → open MR in Gitea”) in `guidelines/`.

---

## 5. MCPs (Figma, Linear, Notion, etc.)

- MCPs are configured per **user** (or workspace), not per repo. Once the PM has Figma/Linear/Notion/Lighthouse MCPs set up in Cursor, they work in **any** folder they open.
- No need to duplicate MCP config in project-management vs project repos. Just document in project-management how to use them (e.g. in `guidelines/linear/using-linear-in-cursor.md`).

---

## 6. Testing in a project (e.g. Lighthouse + branch diff): one window is enough

**Scenario:** PM wants to (1) compare `main` vs a developer branch in **islandrentalcarts**, and (2) run Lighthouse MCP for page speed on that project. A Cursor **skill** that guides how to run or interpret Lighthouse lives in **project-management**. Can she do it all in the **islandrentalcarts** folder only, or does she need two windows?

### Short answer: **Do it all in one window (the project folder).**

| What | Where it runs | Why one window works |
|------|----------------|----------------------|
| **Git diff (main vs developer)** | Must be in the **project repo** (islandrentalcarts) | The repo and branches exist only there. |
| **Lighthouse MCP** | Works in **any** Cursor window | MCPs are user/workspace level; they're available in every folder. |
| **Skill that guides Lighthouse/audits** | Only available in a workspace if the skill is loaded there | Skills are **workspace-scoped**: the agent in the islandrentalcarts window only sees that repo's `.cursor/` and **user-level** skills. It does **not** see project-management's skills. |

So:

- **Two windows don't fix the skill.** If the PM has project-management in one window and islandrentalcarts in the other, the agent in the **islandrentalcarts** window still doesn't see project-management's skills. Each window only has that folder's context.
- **One window (islandrentalcarts) is the right place for this workflow.** She opens only the **islandrentalcarts** folder. There she can:
  - Run git commands (diff main vs developer branch).
  - Run Lighthouse MCP (it's available in that window).
  - Use the **skill** only if that skill is available in that workspace.

### Making the skill available in the project window

For the PM to use your Lighthouse/audit skill while in islandrentalcarts (or any project), do **one** of the following:

1. **Put the skill in user-level skills** (`~/.cursor/skills/`)  
   Then it's available in **every** workspace (project-management, islandrentalcarts, etc.). One copy, no duplication. Best for "run in any project" skills like Lighthouse or performance audits.

2. **Add a copy (or thin wrapper) of the skill to the project repo**  
   e.g. `islandrentalcarts/.cursor/skills/` or a rule that points to the process. Use when you want the skill only for certain repos.

**Recommendation:** For Lighthouse / page-speed / audit skills that the PM runs per project, put them in **user-level** so she only ever needs to open the **project folder** for testing. No need for two Cursor windows.

### PM workflow for "test islandrentalcarts (diff + Lighthouse)"

1. Open Cursor with **only** the **islandrentalcarts** project folder.
2. Ask the agent to compare `main` and the developer branch (e.g. "show me the diff between main and feature/xyz").
3. Ask the agent to run Lighthouse on the deployed or local URL for that project; the Lighthouse MCP and the skill (if in user-level) are both available in that same window.

---

## 7. Migrating from “everything in project-management”

Right now you have code inside `projects/` (e.g. Louisiana Hemp app). To align with the above:

1. **Create a new repo on Gitea** for that codebase (e.g. `louisiana-hemp-bev`).
2. **Move the code** into a new folder outside project-management, init Git there, add remote, push (or use `git subtree split` / copy files and start a fresh history).
3. **In project-management:** keep only non-code under `projects/louisiana-hemp-bev/` (briefs, screenshots, prompts, links) or remove it and link from Notion/Linear.
4. **Document for PM:** “Louisiana Hemp code lives in repo `louisiana-hemp-bev`; open that folder when you need to work with that code.”

Repeat for each real codebase; leave project-management as the meta repo for process and PM-oriented Cursor setup.

---

## 8. Summary for your PM

- **Primary workspace:** Open **project-management** in Cursor for templates, guidelines, and process skills.
- **When they need a specific project:** Open that project’s repo in another Cursor window (you’ll provide clone URLs and where to put them).
- **Git:** They only need to pull/push project-management (and optionally the project repo if they edit it); you can keep their workflow minimal (e.g. “Pull when I tell you” or “Once a week”).

This keeps the PM effective without requiring them to live inside multiple codebases, while you keep Gitea and Cursor scalable and clear for remote teams.
