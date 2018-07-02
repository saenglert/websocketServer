import * as WebSocket from 'ws';
import * as Config from './config.json';

const wss  = new WebSocket.Server({ port: Config.PORT });

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: WebSocket.Data) =>)
});