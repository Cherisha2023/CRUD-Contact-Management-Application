import pool from '../config/db.js';

export const createContact = async (firstName, lastName, email, phone, address) => {
  const query = `
    INSERT INTO contacts (first_name, last_name, email, phone, address)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [firstName, lastName, email, phone, address];
  const { rows } = await pool.query(query, values);
  return rows[0];
};


export const getAllContacts = async () => {
  const { rows } = await pool.query('SELECT * FROM contacts ORDER BY id DESC;');
  return rows;
};

export const getContactById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM contacts WHERE id = $1;', [id]);
  return rows[0];
};

export const updateContact = async (id, firstName, lastName, email, phone, address) => {
  const query = `
    UPDATE contacts 
    SET first_name = $1, last_name = $2, email = $3, phone = $4, address = $5
    WHERE id = $6
    RETURNING *;
  `;
  const values = [firstName, lastName, email, phone, address, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const deleteContact = async (id) => {
  const result = await pool.query('DELETE FROM contacts WHERE id = $1 RETURNING *;', [id]);
  return result.rowCount > 0;
};
