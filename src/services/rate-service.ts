import axios from 'axios';
export interface ExchangeRate {
    currency: string;
    rate: number;
  }
export const getExchangeRates = async (source: string, targets: string[]): Promise<ExchangeRate[]> => {
  const url = `https://api.exchangerate-api.com/v4/latest/${source}`;
  const response = await axios.get(url);
  const rates = targets.map(target => ({
    currency: target,
    rate: response.data.rates[target]
  }));
  return rates;
};
