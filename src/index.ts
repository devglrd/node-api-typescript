import * as debug from 'debug';
import * as http from 'http';

import Server from './server';

const port = 3002;

console.log(`Server listening on port ${port}`);

const server = http.createServer(Server);

server.listen(port);