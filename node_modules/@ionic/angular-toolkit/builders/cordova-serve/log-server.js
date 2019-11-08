"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const util = require("util");
const WebSocket = require("ws");
function isConsoleLogServerMessage(m) {
    return m
        && typeof m.category === 'string'
        && typeof m.type === 'string'
        && m.data && typeof m.data.length === 'number';
}
exports.isConsoleLogServerMessage = isConsoleLogServerMessage;
async function createConsoleLogServer(host, port) {
    const wss = new WebSocket.Server({ host, port });
    wss.on('connection', ws => {
        ws.on('message', data => {
            let msg;
            try {
                data = data.toString();
                msg = JSON.parse(data);
            }
            catch (e) {
                process.stderr.write(`Error parsing JSON message from client: "${data}" ${core_1.terminal.red(e.stack ? e.stack : e)}\n`);
                return;
            }
            if (!isConsoleLogServerMessage(msg)) {
                const m = util.inspect(msg, { colors: true });
                process.stderr.write(`Bad format in client message: ${m}\n`);
                return;
            }
            if (msg.category === 'console') {
                let status;
                if (msg.type === 'info' || msg.type === 'log') {
                    status = core_1.terminal.reset;
                }
                else if (msg.type === 'error') {
                    status = core_1.terminal.red;
                }
                else if (msg.type === 'warn') {
                    status = core_1.terminal.yellow;
                }
                // pretty print objects and arrays (no newlines for arrays)
                msg.data = msg.data.map(d => JSON.stringify(d, undefined, d && d.length ? '' : '  '));
                if (status) {
                    process.stdout.write(`[${status('console.' + msg.type)}]: ${msg.data.join(' ')}\n`);
                }
                else {
                    process.stdout.write(`[console]: ${msg.data.join(' ')}\n`);
                }
            }
        });
        ws.on('error', (err) => {
            if (err && err.code !== 'ECONNRESET') {
                process.stderr.write(`There was an error with the logging stream: ${JSON.stringify(err)}\n`);
            }
        });
    });
    wss.on('error', (err) => {
        process.stderr.write(`There was an error with the logging websocket: ${JSON.stringify(err)}\n`);
    });
    return wss;
}
exports.createConsoleLogServer = createConsoleLogServer;
