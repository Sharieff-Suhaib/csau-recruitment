import { getAllLogsService } from '../services/logService.js';
import { addLogService } from '../services/logService.js';
import { removeLogService } from '../services/logService.js';
import { getLogsByDateService } from '../services/logService.js';

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
        const response = await addLogService(req, res);
        res.status(201).json(response);
    } catch (error) {
        console.error('Error adding log:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export const removeLog = async (req, res) => {
    try{
        const response = await removeLogService(req, res);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error removing log:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const getLogsByDate = async (req, res) => {
    try {
        const response = await getLogsByDateService(req,res);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching logs by date:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}