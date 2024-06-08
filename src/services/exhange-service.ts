import { v4 as uuidv4 } from 'uuid';
import { ExchangeRate, getExchangeRates } from './rate-service';
import { saveTransaction } from '../models/transaction-model';

export const convertAmount = async (amount: number, source: string, targets: string[]): Promise<any> => {
  const rates = await getExchangeRates(source, targets);
  const conversions = rates.map((rate:ExchangeRate)  => ({
    currency: rate.currency,
    amount: (amount * rate.rate).toFixed(2)
  }));
  const transactionId = uuidv4();
  await saveTransaction(transactionId, amount, source, conversions);
  return { transactionId, conversions };
};
