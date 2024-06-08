import { getTransactionsService } from '../src/services/transaction-service';
import { saveTransaction, clearTransactions, Transaction } from '../src/models/transaction-model';

beforeAll(async () => {
  await clearTransactions();
  await saveTransaction('test-id', 100, 'USD', [
    { currency: 'EUR', amount: '85.00' },
    { currency: 'GBP', amount: '75.00' }
  ]);
});
test('should fetch transaction by ID', async () => {
  const transactions: Transaction[] = await getTransactionsService('test-id');
  console.log('asdasd',transactions);
  expect(transactions).toEqual(expect.arrayContaining([
    expect.objectContaining({
      id: 'test-id',
      amount: 100,
      source: 'USD',
      conversions: expect.arrayContaining([
        expect.objectContaining({ currency: 'EUR', amount: '85.00' }),
        expect.objectContaining({ currency: 'GBP', amount: '75.00' })
      ]),
        date: expect.any(Date)
    })
  ]));
});

test('should fetch transactions by date range', async () => {
  const transactions: Transaction[] = await getTransactionsService(undefined, '2024-01-01', '2024-12-31');
  console.log(transactions);
  expect(transactions).toEqual(expect.arrayContaining([
    expect.objectContaining({
      id: 'test-id',
      amount: 100,
      source: 'USD',
      conversions: expect.arrayContaining([
        expect.objectContaining({ currency: 'EUR', amount: '85.00' }),
        expect.objectContaining({ currency: 'GBP', amount: '75.00' })
      ])
    })
  ]));
});
