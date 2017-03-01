"""
Purpose BaseHTTPServer includes classes that can form the basis of a web server.

To create a custom web server with Python, without requiring any external frame-
works, use BaseHTTPServer as a starting point. It handles the HTTP protocol, so
the only customization needed is the application code for responding to the incoming
requests.

BaseHTTPServer uses classes from SocketServer to create base classes for
making HTTP servers. HTTPServer can be used directly, but the BaseHTTPRe-
questHandler is intended to be extended to handle each protocol method (GET,
POST, etc.)
"""
"""
To add support for an HTTP method in a request-handler class, implement the
method do_METHOD() , replacing METHOD with the name of the HTTP method (e.g.,
do_GET() , do_POST() , etc.). For consistency, the request-handler methods take no
arguments. All the parameters for the request are parsed by BaseHTTPRequestHandler and 
stored as instance attributes of the request instance.

This example request handler illustrates how to return a response to the client and
includes some local attributes that can be useful in building the response.
"""

from BaseHTTPServer import BaseHTTPRequestHandler
import urlparse
class GetHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse.urlparse(self.path)
        message_parts = [ 'CLIENT VALUES:', 
                         'client_address=%s (%s)' % (self.client_address,self.address_string()),
                         'command=%s' % self.command,
                         'path=%s' % self.path,
                         'real path=%s' % parsed_path.path,
                         'query=%s' % parsed_path.query,
                         'request_version=%s' % self.request_version,
                         '',
                         'SERVER VALUES:',
                         'server_version=%s' % self.server_version,
                         'sys_version=%s' % self.sys_version,
                         'protocol_version=%s' % self.protocol_version,
                         '',
                         'HEADERS RECEIVED:',
                         ]
        for name, value in sorted(self.headers.items()):
            message_parts.append('%s=%s' % (name, value.rstrip()))
        message_parts.append('')
        message = '\r\n'.join(message_parts)
        self.send_response(200)
        self.end_headers()
        self.wfile.write(message)
        return

if __name__ == '__main__':
    from BaseHTTPServer import HTTPServer
    server = HTTPServer(('localhost', 8080), GetHandler)
    print 'Starting server, use <Ctrl-C> to stop'
    server.serve_forever()