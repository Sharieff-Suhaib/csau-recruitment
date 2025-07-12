import express from 'express';
const router = express.Router();
import { getLogs } from '../controllers/logController.js';
import { addLog } from '../controllers/logController.js';


router.get('/',getLogs);
router.post('/add', addLog);


export const logRoutes = router;