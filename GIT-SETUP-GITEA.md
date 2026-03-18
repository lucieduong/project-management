# Git + Gitea setup guide (newbie-friendly)

This folder is now a **Git repository**. Here’s what that means and what to do next.

---

## What we already did

1. **`git init`** – Turned this folder into a Git repo (created a hidden `.git` folder).
2. **`git add .`** – Staged all your files (prepared them for a commit).
3. **`git commit -m "..."`** – Saved a snapshot of everything with a message.

So you have one **commit** on the **main** branch, and it’s only on your computer so far.

---

## Next: create the repo on Gitea and push

### Step 1 – Create the repository on Gitea

1. Open: **https://git.lunardigital.net/**
2. Log in if needed.
3. Click **“New repository”** (or **“+”** → **“New repository”**).
4. Fill in:
   - **Repository name:** e.g. `project-management` (or any name you like).
   - **Visibility:** Private or Public – your choice.
   - **Do NOT** check “Initialize repository with a README” (you already have commits locally).
5. Click **“Create repository”**.

Gitea will show you a page with clone URLs. You’ll need the **HTTPS** URL, which will look like:

```text
https://git.lunardigital.net/YOUR_USERNAME/project-management.git
```

Replace `YOUR_USERNAME` with your Gitea username.

---

### Step 2 – Connect your local repo to Gitea and push

In Terminal, from this project folder, run (replace with your real URL and repo name if different):

```bash
cd /Users/edmerino/development/project-management

# Add Gitea as the "remote" (the server where you push/pull)
git remote add origin https://git.lunardigital.net/YOUR_USERNAME/project-management.git

# Push your main branch to Gitea (uploads your commit)
git push -u origin main
```

- **First time:** Gitea will ask for your username and password (or a **Personal Access Token** if you use 2FA or token auth).
- After that, your code will be on **https://git.lunardigital.net/YOUR_USERNAME/project-management**.

---

## Quick Git concepts

| Term        | Meaning |
|------------|--------|
| **Repository (repo)** | The project + its history (your folder + the `.git` folder). |
| **Commit** | A saved snapshot of your files at a point in time. |
| **Branch** | A line of commits. You’re on `main` by default. |
| **Remote** | The server (here: Gitea). `origin` is the usual name. |
| **Push**   | Send your commits from your PC to the remote. |
| **Pull**   | Get new commits from the remote to your PC. |
| **Stage**  | Mark files to be included in the next commit (`git add`). |

---

## Daily workflow (after setup)

1. **Make changes** to your files.
2. **Stage** what you want in the next snapshot:
   ```bash
   git add .                    # stage everything
   # or
   git add path/to/some-file    # stage one file
   ```
3. **Commit** with a short message:
   ```bash
   git commit -m "Describe what you did"
   ```
4. **Push** to Gitea (so it’s backed up / visible to others):
   ```bash
   git push
   ```

To see status and recent commits:

```bash
git status    # what’s changed / staged
git log       # list of commits (q to quit)
```

---

## If Gitea asks for a Personal Access Token

Some Gitea setups require a **token** instead of your normal password:

1. On Gitea: **Settings** → **Applications** → **Generate New Token**.
2. Give it a name (e.g. “laptop”), choose permissions (e.g. “repo”).
3. Copy the token and use it **as the password** when `git push` asks for credentials.

You only need to enter it once; Git can store it for you.

---

## Troubleshooting

- **“remote origin already exists”**  
  You already added the remote. Use:
  ```bash
  git remote set-url origin https://git.lunardigital.net/YOUR_USERNAME/project-management.git
  ```
  then `git push -u origin main` again.

- **“failed to push” / 403**  
  Check your Gitea URL, username, and password/token. Make sure the repo exists on Gitea and you have write access.

- **“branch ‘main’ doesn’t exist”**  
  Some repos use `master`. Try:
  ```bash
  git push -u origin master
  ```
  or create and push `main`:
  ```bash
  git branch -M main
  git push -u origin main
  ```

Once you’ve run the commands in **Step 2** with your real Gitea URL, your project will be on your self‑hosted Gitea and you can use the daily workflow above.
