
/**
 * Construct a simple Portfolio class that has 
 * a collection of Stocks and a "Profit" method 
 * that receives 2 dates and returns the profit of the Portfolio between those dates. 
 * Assume each Stock has a "Price" method that receives a date and returns its price.
 * Bonus Track: make the Profit method return the 
 * "annualized return" of the portfolio between the given dates.
 */

 import { StockRegistry } from "./interfaces"
 import { mockupStockPrices } from "./mockups";
  
 
 class Stock {
   prices: StockRegistry[] = mockupStockPrices;
   getPriceByDate(date: Date): number {
     const targetStockByDate = this.prices.find(stock => stock.date === date)
     return targetStockByDate.price
   }
 }
 
 class Portfolio { 
    portfolioStocks: Stock[]

    constructor({stocks=[]}:{stocks: StockRegistry[]}) {
      this.portfolioStocks = stocks.map(stock => (new Stock()))
    }

    getStockPrice(date: Date): number{
      const stock = this.portfolioStocks.find(stock => stock.getPriceByDate(date))
      return stock.getPriceByDate(date)
    }
      
    getProfit(dateFrom: Date, dateTo: Date): number {
      const overallReturn = getOverallReturn
      const annualizedReturn = getAnnualizedReturn
      return annualizedReturn(overallReturn(dateFrom, dateTo))
    }
    
  }
  
  const getAnnualizedReturn = (overallReturn: number): number => {
    const N = this.portfolioStocks.length
    return Math.pow(1 + overallReturn, 1 / N) - 1
  }
  

  const getOverallReturn = (dateFrom: Date, dateTo: Date): number => {
    const stockPriceFrom = this.getStockPrice(dateFrom)
    const stockPriceTo = this.getStockPrice(dateTo)
    return (stockPriceTo - stockPriceFrom) / stockPriceFrom
  }
  
  const portfolio = new Portfolio({stocks: mockupStockPrices});
  const stock = new Stock();

  const stockPrice = stock.getPriceByDate(new Date(2020, 0, 1));
  const portfolioProfit = portfolio.getProfit(new Date(2020, 0, 1), new Date(2020, 0, 2));

  console.log(stockPrice);
  console.log(portfolioProfit);


