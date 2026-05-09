const http = require('http');
let challans = [];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  if (req.method === 'POST' && req.url === '/send') {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      try {
        const c = JSON.parse(body);
        if (!challans.find(x => x.id === c.id)) challans.unshift(c);
        res.writeHead(200); res.end(JSON.stringify({ok:true}));
      } catch(e) { res.writeHead(400); res.end('Error'); }
    });
  } else if (req.method === 'GET' && req.url === '/fetch') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(challans));
  } else { res.writeHead(404); res.end(); }
});

server.listen(3000, () => console.log('ICB Server running on 3000'));
