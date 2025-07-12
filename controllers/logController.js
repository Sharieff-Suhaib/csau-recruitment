import { getAllLogs } from '../services/logService.js';

export const getLogs = async(req,res) => {
    try {
        const response = await getAllLogs();
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}