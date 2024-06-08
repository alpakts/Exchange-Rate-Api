import { Transaction, getTransactionById, getTransactionsByDateRange } from "../models/transaction-model";


export const getTransactionsService = async (id?: string, startDate?: string, endDate?: string): Promise<Transaction[]> => {
    if (id) {
      const transaction = await getTransactionById(id);
      if (!transaction) {
        throw new Error('Transaction not found');
      }
      return [transaction];
    } else if (startDate && endDate) {
      return await getTransactionsByDateRange(new Date(startDate), new Date(endDate));
    } else {
      throw new Error('Either transaction ID or date range must be provided');
    }
  };