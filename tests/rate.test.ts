import { getExchangeRates } from '../src/services/rate-service';

test('should fetch exchange rates', async () => {
  const rates = await getExchangeRates('USD', ['EUR', 'GBP']);
  expect(rates).toEqual(expect.arrayContaining([
    expect.objectContaining({ currency: 'EUR', rate: expect.any(Number) }),
    expect.objectContaining({ currency: 'GBP', rate: expect.any(Number) })
  ]));
});
