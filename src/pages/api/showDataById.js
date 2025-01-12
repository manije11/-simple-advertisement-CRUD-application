// pages/api/index.js
import pool from '../../lib/db';

export default async function handler(req, res) {
    const id = req.query?.id;
    const [rows] = await pool.query('SELECT name, description,image FROM test2 WHERE id = ?', [id]);
    if (res.status(200)) {
        res.status(200).json(rows[0]);
    } else {
        res.status(404).json({message: 'Item not found'});
    }
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}