# Resume file

The site links to a resume file at this exact path:

```
assets/resume/Noe-Hernandez-Resume.pdf
```

To make the "Download Resume" buttons work:

1. Export your resume as a PDF.
2. Rename it exactly to `Noe-Hernandez-Resume.pdf`.
3. Drop it in this folder (`assets/resume/`), replacing nothing (there is no
   placeholder PDF checked in on purpose — a fake one would be confusing to
   download).
4. Commit and push (see the main [README.md](../../README.md) for the exact
   commands).

If you want to use a different file name, update the two `href` attributes in
`index.html` that point to `assets/resume/Noe-Hernandez-Resume.pdf` (one in the
hero section, one in the contact section) to match.
