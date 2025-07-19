import app from './app.js';
import http from 'http';

const PORT = 5050;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
