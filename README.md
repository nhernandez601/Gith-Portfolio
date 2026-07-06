# Noe Hernandez — IT Portfolio Site

A single-page portfolio site: plain HTML, CSS, and vanilla JavaScript. No
frameworks, no build step, no npm packages to maintain. Deploys for free on
GitHub Pages.

## File map

```
index.html            All page content lives here (Home, Skills, Projects, Contact)
css/styles.css         All styling, including the light/dark theme colors
js/main.js             Theme toggle, mobile menu, active-nav highlighting
assets/favicon.svg      Browser tab icon
assets/resume/          Put your resume PDF here (see assets/resume/README.md)
assets/images/          Optional folder for real project screenshots
.nojekyll               Tells GitHub Pages to serve the files as-is
```

## How to edit content

Everything is in `index.html`, split into four commented sections that match
the site's nav: `HERO / ABOUT`, `SKILLS`, `PROJECTS`, `CONTACT / FOOTER`.
Search the file for these comment headers to jump straight to what you want
to change.

- **Change your name, title, or summary:** edit the `<section id="home">` block.
- **Add/remove a skill:** find the matching `<article class="skill-card">` and
  add or delete a `<li>` inside its `<ul class="skill-list">`.
- **Add a whole new skill group:** copy an entire `<article class="skill-card">`
  block (icon + heading + list) and edit the text.
- **Add a new project:** copy an entire `<article class="project-card">` block
  in the `<section id="projects">` and edit the text inside. Each card follows
  the same four-part structure: Problem, What I built, Tools, Outcome.
- **Reorder projects:** cut and paste the whole `<article class="project-card">`
  block to where you want it.
- **Update links (resume, LinkedIn, GitHub, email, "view sanitized code"):**
  these appear as plain `href="..."` attributes with an HTML comment above
  each one flagging it as editable.

You do not need to touch `css/styles.css` or `js/main.js` to update content —
those only control appearance and behavior.

### Resume file

The download buttons point to `assets/resume/Noe-Hernandez-Resume.pdf`. That
file is **not** included yet — see `assets/resume/README.md` for the exact
steps to add your own.

### Colors / theme

All colors are CSS variables at the top of `css/styles.css` under
`:root { ... }` (light theme) and `:root[data-theme="dark"] { ... }` (dark
theme). Change a variable once and it updates everywhere it's used.

## Deploying to GitHub Pages (one-time setup)

1. Make sure your changes are committed and pushed to the `main` branch of
   this repository (see commands below).
2. On GitHub, open the repository in your browser.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
6. GitHub will give you a URL that looks like
   `https://<your-username>.github.io/<repo-name>/` — that's your live site.
   The first deploy can take a minute or two.

You only need to do this once. After that, every push to `main` updates the
live site automatically within a minute or two.

## Updating the site after the first deploy

From a terminal (or PowerShell) in this project folder:

```powershell
git add .
git commit -m "Update project details"
git push
```

That's it — no build step, no `npm install`, nothing else to run. GitHub
Pages picks up the new commit and republishes the site automatically.

## Previewing changes locally before pushing

You can just double-click `index.html` to open it in a browser, but some
browsers restrict local file access in ways that can affect things like the
theme toggle. A more reliable local preview, if you have Python installed:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Press `Ctrl+C` in the
terminal to stop the server when you're done.

## Content checklist before sharing the site with recruiters

A few things in this draft are realistic **placeholder** values — replace
them with your real numbers/links before treating the site as final:

- [ ] Add your real resume PDF (`assets/resume/Noe-Hernandez-Resume.pdf`)
- [ ] Confirm/update the GitHub username used in the header, hero, contact,
      and each project's "View sanitized code" link
- [ ] Replace the "Screenshot placeholder" boxes in each project card with
      real screenshots or short screen recordings
- [ ] Double-check the quantified outcomes in each project (onboarding time,
      ticket volume reductions, card counts, etc.) against your real numbers
- [ ] Fill in the "SharePoint Company Portal" and "Intranet Newsletter"
      project details with your actual scope if it differs from the draft
- [ ] Confirm none of the project text accidentally contains real internal
      hostnames, IP addresses, domain names, or coworker/patient information
      — everything currently in the draft uses generic placeholders
      (e.g. no real domain names or IPs appear anywhere in the site)
