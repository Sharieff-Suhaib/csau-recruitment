import { pool } from '../config/db.js';

export const getAllLogsService = async () => {
    const query = 'SELECT * FROM logs ORDER BY created_at DESC';
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }   
}


export const addLogService = async (req,res) => {
    try{
        const { date,activity,minutes } = req.body;

        if (!date || !activity || minutes == null) {
        return res.status(400).json({ message: 'All fields are required.' });
        }

        const query = 'INSERT INTO logs (date,activity,minutes) VALUES ($1, $2,$3) RETURNING *';
        const result = await pool.query(query, [date, activity, minutes]);
        res.status(201).json(result.rows[0]);
    } catch(error){
        console.error('Error adding log:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const removeLogService = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM logs WHERE id = $1 RETURNING *';
    try {
        const result = await pool.query(query, [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Log not found' });
        }
        res.status(200).json({ message: 'Log deleted successfully', log: result.rows[0] });
    } catch (error) {
        console.error('Error removing log:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}