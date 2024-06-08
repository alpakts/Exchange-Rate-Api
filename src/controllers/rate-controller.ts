import { Request, Response } from 'express';
import { getExchangeRates } from '../services/rate-service';

export const getRates = async (req: Request, res: Response) => {
  const { source, targets } = req.query;
  if (!source || !targets) {
    return res.status(400).json({ error: 'Source currency and target currencies are required' });
  }
  try {
    const rates = await getExchangeRates(source as string, (targets as string).split(','));
    res.json(rates);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
