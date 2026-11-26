from argparse import ArgumentParser
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


LEGACY_ROUTES = {
    "/category/blog": "/blog-archive.html",
    "/author/newvenusclinic-com": "/blog-author.html",
    "/elementor-hf/header": "/",
    "/elementor-hf/footer": "/",
    "/metform-form/new-form-1698499924": "/contact-form.html",
    "/metform-form/new-form-1698748021": "/appointment-request.html",
    "/metform-form/appointment-form": "/appointment-form.html",
    "/blog1": "/complex-stent-extraction-performed-successfully.html",
    "/blog2": "/intracoronary-stent-surgery-dinakaran-tamil.html",
    "/blog3": "/uyirukku-achcuruttalana-stent-ubagaram-mutiyavarai-kattha-marutthuvargal.html",
    "/blog4": "/rare-cardiac-treatment-at-apollo-hospital-telugu.html",
    "/blog5": "/risky-bypass-surgery-gives-new-life-to-76-year-old-hindi.html",
    "/blog6": "/apollo-omr-complex-stent-extraction-achievement-tamil.html",
    "/blog8": "/man-treated-for-cardiac-stent-infection.html",
    "/இதய-நோயாளிக்குஇன்ட்ரா-கர": "/intracoronary-stent-extraction-surgery-tamil.html",
}


class SiteRequestHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        request_url = urlsplit(self.path)
        if request_url.path == "/404.html":
            self.send_error(HTTPStatus.NOT_FOUND)
            return None

        path = unquote(request_url.path).rstrip("/")
        target = LEGACY_ROUTES.get(path)
        slug = path[1:]
        if target is None and slug and slug != "404" and slug.replace("-", "").isalnum():
            if (Path(self.directory) / f"{slug}.html").is_file():
                target = f"/{slug}.html"

        if target is not None:
            if request_url.query:
                target = f"{target}?{request_url.query}"
            self.send_response(HTTPStatus.MOVED_PERMANENTLY)
            self.send_header("Location", target)
            self.send_header("Content-Length", "0")
            self.end_headers()
            return None
        return super().send_head()

    def send_error(self, code, message=None, explain=None):
        if code != HTTPStatus.NOT_FOUND:
            return super().send_error(code, message, explain)

        page = Path(self.directory) / "404.html"
        if not page.is_file():
            return super().send_error(code, message, explain)

        # Resolve relative styles and links from the site root on nested missing URLs.
        body = page.read_bytes().replace(b"<head>", b'<head>\n  <base href="/">', 1)
        self.send_response(code)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)


def main():
    parser = ArgumentParser(description="Serve the clinic site locally.")
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()

    handler = partial(SiteRequestHandler, directory=Path(__file__).resolve().parent)
    with ThreadingHTTPServer(("127.0.0.1", args.port), handler) as server:
        print(f"New Venus Clinic is running at http://127.0.0.1:{server.server_port}/", flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
