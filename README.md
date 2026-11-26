# New Venus Clinic Website

Static multi-page website for **New Venus Clinic** (Cardiovascular & Multi-Speciality Healthcare, Selaiyur, Chennai).

## Tech Stack
- HTML and CSS with JavaScript for article navigation and contact drafts
- Google Fonts (`Heebo`, `Inter`) with `display=swap`
- WebP + JPEG/PNG image assets

## How to Run Locally
No build step or package installation is required. Start the Python preview server for legacy URL redirects and the custom 404 page.

```bash
python3 serve.py
```

Then open http://127.0.0.1:8000/ in your browser.

## Deployment
Upload the root HTML, CSS, JavaScript, icon, manifest, sitemap and robots files, plus `assets/`. Enable HTTPS and configure `404.html` as the error document. Replicate the redirects in `serve.py` at the host so existing WordPress links continue to work.

Appointment and contact forms open visitor-reviewed WhatsApp or email drafts. Clinic staff confirm appointments. Article comment forms use the original WordPress comment endpoint, which must stay available for new comments.

## Environment Variables
None.

## Ownership
- **Client:** New Venus Clinic (`newvenusclinic2021@gmail.com`)
- **Maintainer:** TechieNutpam Web Team
