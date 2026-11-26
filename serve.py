from argparse import ArgumentParser
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


class SiteRequestHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        if urlsplit(self.path).path == "/404.html":
            self.send_error(HTTPStatus.NOT_FOUND)
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
