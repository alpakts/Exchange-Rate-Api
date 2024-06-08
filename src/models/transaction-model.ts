export interface Conversion {
    currency: string;
    amount: string;
  }
  
  export interface Transaction {
    id: string;
    amount: number;
    source: string;
    conversions: Conversion[];
    date: Date;
  }
  
  let transactions: Transaction[] = [];
  
  export const saveTransaction = async (id: string, amount: number, source: string, conversions: Conversion[]): Promise<void> => {
    transactions.push({ id, amount, source, conversions, date: new Date() });
  };
  
  export const getTransactionById = async (id: string): Promise<Transaction | undefined> => {
    return transactions.find(tx => tx.id === id);
  };
  
  export const getTransactionsByDateRange = async (startDate: Date, endDate: Date): Promise<Transaction[]> => {
    return transactions.filter(tx => tx.date >= startDate && tx.date <= endDate);
  };
  
  export const clearTransactions = async (): Promise<void> => {
    transactions = [];
  };
  