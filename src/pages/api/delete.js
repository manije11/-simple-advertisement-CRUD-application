// pages/api/delete.js
import db from '../../lib/db';

export default function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        const query = 'DELETE FROM test2 WHERE id = ?';

        db.query(query, [id], (err, result) => {

            if (result) {
                alert('enter data :)')
            } else {
                alert('Error deleting data');
            }

        });
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end('Method ${req.method} Not Allowed');
    }
}