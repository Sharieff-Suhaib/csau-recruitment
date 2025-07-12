import express from 'express';
const router = express.Router();
import { getLogs } from '../controllers/logController.js';
import { addLog } from '../controllers/logController.js';
import { removeLog } from '../controllers/logController.js';

router.get('/',getLogs);
router.post('/add', addLog);
router.delete('/:id',removeLog);

export const logRoutes = router;