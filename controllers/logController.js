import { getAllLogsService } from '../services/logService.js';
import { addLogService } from '../services/logService.js';
export const getLogs = async(req,res) => {
    try {
        const response = await getAllLogsService();
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const addLog = async (req, res) => {
    try {
        console.log('Adding log:', req.body);
        const response = await addLogService(req, res);
        res.status(201).json(response);
    } catch (error) {
        console.error('Error adding log:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}