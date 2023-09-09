export interface CriptoCurrencyListTypes {
  symbol: string;
  name: string;
  logo: string;
  id: string;
  quote: {
    USD: {
      price: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
    };
  };
}
