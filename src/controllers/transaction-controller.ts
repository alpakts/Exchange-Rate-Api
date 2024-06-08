import { Request, Response } from 'express';
import { getTransactionsService } from '../services/transaction-service';

export const getTransactions = async (req: Request, res: Response) => {
  const { id, startDate, endDate } = req.query;
  try {
    const transactions = await getTransactionsService(id as string, startDate as string, endDate as string);
    res.json(transactions);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
