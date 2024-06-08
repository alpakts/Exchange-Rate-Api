import { Router } from 'express';
import { getTransactions } from '../controllers/transaction-controller';
import { exchange } from '../controllers/exchange-controller';
import { getRates } from '../controllers/rate-controller';

const router = Router();

router.get('/rates', getRates);
router.post('/exchange', exchange);
router.get('/transactions', getTransactions);

export default router;
