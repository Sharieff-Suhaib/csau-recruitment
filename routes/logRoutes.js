import express from 'express';
const router = express.Router();
import { getLogs } from '../controllers/logController.js';
import { addLog } from '../controllers/logController.js';
import { removeLog } from '../controllers/logController.js';
import { getLogsByDate } from '../controllers/logController.js';

router.get('/',getLogs);
router.post('/add', addLog);
router.delete('/:id',removeLog);
router.get('/date/:date',getLogsByDate);

export const logRoutes = router;