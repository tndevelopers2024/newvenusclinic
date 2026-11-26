# New Venus Clinic Website

Static multi-page website for **New Venus Clinic** (Cardiovascular & Multi-Speciality Healthcare, Selaiyur, Chennai).

## Tech Stack
- **100% Pure HTML5 & CSS3** (zero runtime JavaScript)
- Google Fonts (`Heebo`, `Inter`) with `display=swap`
- WebP + JPEG/PNG image assets

## How to Run Locally
No build step or package installation is required. Start the Python preview server to use the custom 404 page for missing paths:

```bash
python3 serve.py
```

Then open http://127.0.0.1:8000/ in your browser.

## Deployment
Upload all root `.html`, `.css`, `.ico`, `.svg`, `.png`, `.webmanifest`, `robots.txt`, `sitemap.xml`, and `assets/` files to any static web host (Nginx, Apache, Cloudflare Pages, Netlify, Vercel) with HTTPS enabled and `404.html` configured as the error document.

## Environment Variables
None (pure static HTML/CSS site).

## Ownership
- **Client:** New Venus Clinic (`newvenusclinic2021@gmail.com`)
- **Maintainer:** TechieNutpam Web Team
