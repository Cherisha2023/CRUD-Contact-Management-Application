import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'cherisha.s',
  host: 'localhost',
  database: 'contact_app',
  password: 'Cheri@123',
  port: 5432, // or your DB port
});

export default pool;
