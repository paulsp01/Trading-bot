
// const getMockStockPrices = async () => {
  
//   const mockPrices = [102, 99.96];;
//   return mockPrices;
// };

// module.exports = {
//   getMockStockPrices,
// };

const getMockStockPrices = async () => {
  const mockPrices = [];
  let basePrice = 100; 

  for (let i = 0; i < 10; i++) {
    // Simulate random price fluctuations between -5% and +5%
    const priceChange = basePrice * ((Math.random() * 10 - 5) / 100);
    basePrice += priceChange;
    mockPrices.push(parseFloat(basePrice.toFixed(2))); // Round to 2 decimal places
  }

  return mockPrices; 
};

module.exports = {
  getMockStockPrices,
};
