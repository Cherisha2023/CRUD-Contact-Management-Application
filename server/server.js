import app from './app.js';
import http from 'http';

// Use dynamic port or fallback to 5050
const PORT = process.env.PORT || 5050;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
