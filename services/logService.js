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
            return { status: 400, message: 'All fields are required.' };
        }

        const query = 'INSERT INTO logs (date,activity,minutes) VALUES ($1, $2,$3) RETURNING *';
        const result = await pool.query(query, [date, activity, minutes]);
        return result.rows[0];
    } catch(error){
        console.error('Error adding log:', error);
        return { status: 500, message: 'Internal Server Error' };
    }
}


export const removeLogService = async (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM logs WHERE id = $1 RETURNING *';
    try {
        const result = await pool.query(query, [id]);
        if (result.rowCount === 0) {
            return { status: 404, message: 'Log not found' };
        }
        return { status: 200, message: 'Log deleted successfully', log: result.rows[0] };
    } catch (error) {
        console.error('Error removing log:', error);
        return { status: 500, message: 'Internal Server Error' };
    }
}

export const getLogsByDateService = async (req, res) => {
    const { date } = req.params;
    const query = 'SELECT * FROM logs WHERE date = $1 ORDER BY created_at DESC';
    try {
        const result = await pool.query(query, [date]);
        if (result.rowCount === 0) {
            return { message: 'No logs found for this date' };
        } 
        return result.rows;
        
    } catch (error) {
        console.error('Error fetching logs by date:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}