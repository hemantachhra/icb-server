const http = require('http');

let challans = [];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  // Send challan from staff to server
  if (req.method === 'POST' && req.url === '/send') {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      try {
        const c = JSON.parse(body);
        const idx = challans.findIndex(x => x.no === c.no);
        if (idx > -1) {
          challans[idx] = c; // Update existing
          console.log('Challan updated:', c.no);
        } else {
          challans.unshift(c); // Add new
          console.log('New challan received:', c.no, c.client);
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify({ok:true, total: challans.length}));
      } catch(e) { res.writeHead(400); res.end('Error'); }
    });
  }

  // Fetch all challans for admin
  else if (req.method === 'GET' && req.url === '/fetch') {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(challans));
  }

  // Clear all challans (admin use only)
  else if (req.method === 'GET' && req.url === '/clear') {
    challans = [];
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({ok:true, message:'All challans cleared'}));
  }

  // Health check
  else if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('ICB Server is running. Challans: ' + challans.length);
  }

  else { res.writeHead(404); res.end('Not found'); }
});

server.listen(3000, () => console.log('ICB Server running on port 3000'));
