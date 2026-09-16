"""Run Soma locally using Python 3; no extra packages required."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser

if __name__ == '__main__':
    root = Path(__file__).resolve().parent / 'dist'
    try:
        server = ThreadingHTTPServer(('127.0.0.1', 8765), partial(SimpleHTTPRequestHandler, directory=str(root)))
    except OSError:
        input('Port 8765 is in use. Close the other Soma server and try again. Press Enter to exit.')
        raise SystemExit(1)
    print('Soma is running at http://127.0.0.1:8765')
    print('Keep this window open while studying. Press Ctrl+C to stop.')
    webbrowser.open('http://127.0.0.1:8765')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
