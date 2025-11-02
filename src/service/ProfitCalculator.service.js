import { PRIZE } from "./const/rank.js";

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
    let totalPrize = 0;

    result.forEach((item) => {
      totalPrize += PRIZE[item.rank] * item.count;
    });

    return totalPrize;
  }

  static calculateProfitRate(totalPrize, purchaseAmount) {
    const rate = totalPrize / purchaseAmount * 100;
    return Number(rate.toFixed(1));
  }
}

export default ProfitCalculator;
