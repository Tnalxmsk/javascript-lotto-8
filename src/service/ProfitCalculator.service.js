import { PRIZE } from "./const/rank.const.js";
import { INITIAL_TOTAL_PRIZE, PERCENT_BASE, PROFIT_RATE_DECIMAL } from "./const/profit.const.js";

class ProfitCalculator {

  /**
   * @param {Array<{ rank: string, count: number }>} result
   * @param {number} purchaseAmount
   */
  static calculate(result, purchaseAmount) {
    const totalPrize = this.calculateTotalPrize(result);
    const profitRate = this.calculateProfitRate(totalPrize, purchaseAmount);
    return { totalPrize, profitRate };
  }

  static calculateTotalPrize(result) {
    let totalPrize = INITIAL_TOTAL_PRIZE;

    result.forEach((item) => {
      totalPrize += PRIZE[item.rank] * item.count;
    });

    return totalPrize;
  }

  static calculateProfitRate(totalPrize, purchaseAmount) {
    const rate = totalPrize / purchaseAmount * PERCENT_BASE;
    return Number(rate.toFixed(PROFIT_RATE_DECIMAL));
  }
}

export default ProfitCalculator;
