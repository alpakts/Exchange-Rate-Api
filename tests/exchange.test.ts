import { convertAmount } from '../src/services/exhange-service';

test('should convert amount to target currencies', async () => {
    const result = await convertAmount(100, 'USD', ['EUR', 'GBP']);
    expect(result).toEqual(expect.objectContaining({
      transactionId: expect.any(String),
      conversions: expect.arrayContaining([
        expect.objectContaining({ currency: 'EUR', amount: expect.any(String) }),
        expect.objectContaining({ currency: 'GBP', amount: expect.any(String) })
      ])
    }));
  });