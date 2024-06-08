import { Request, Response } from 'express';
import { convertAmount } from '../services/exhange-service';

export const exchange = async (req: Request, res: Response) => {
  const { amount, source, targets } = req.body;
  if (!amount || !source || !targets) {
    return res.status(400).json({ error: 'Amount, source currency, and target currencies are required' });
  }
  try {
    const result = await convertAmount(amount, source, targets);
    res.json(result);
  } catch (error:any) {
    res.status(400).json({ error: error?.message });
  }
};
