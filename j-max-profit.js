//MaxProfit
//Imagine you're buyin and selling stocks throughout the year. Your job is to find the biggest profit you could make buying low and selling high only once.

//Here's what you're given:
//A list of stock prices for each day [7,2,5,3,6,4]

//Here's what you need to find:

//The difference between the cheapest price you could have bought
//the stock and the most expensive price you could have sold it later on



const prices = [7,1,5,3,6,4]
const maxProfit = (prices) => {
    let minPrice = prices[0]
    let maxProfit = 0;

    for(let i = 1; i < prices.length ; i++){
        const currentPrice = prices[i]

 

        minPrice = Math.min(minPrice, currentPrice)

       const potentialProfit = currentPrice - minPrice  //0 ,4 ,2, 5, 3

      maxProfit = Math.max(maxProfit, potentialProfit) //5
    
    }

    

    return maxProfit
} 
const profit = maxProfit(prices)
console.log("maximum profit is: ", profit);
//isiushdosiz


