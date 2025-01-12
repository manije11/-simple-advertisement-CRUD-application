// pages/api/add-index.js
import db from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, description,file } = req.body; // داده‌های ارسال شده
        try {
            const [result] = await db.query('INSERT INTO test2 (name, description ,file) VALUES (?,?, ?)',
                [name, description,file]);
            res.status(200).json({ id: result.insertId });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error inserting data' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}