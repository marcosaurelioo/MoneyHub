export interface CriptoCurrencyListTypes {
  symbol: string;
  name: string;
  logo: string;
  id: string;
  quote: {
    USD: {
      price: number;
    };
  };
}
