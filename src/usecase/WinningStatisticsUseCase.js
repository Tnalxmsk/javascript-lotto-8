import LottoResultCalculator from "../service/LottoResultCalculator.service.js";
import ProfitCalculator from "../service/ProfitCalculator.service.js";

class WinningStatisticsUseCase {
  /**
   * @param {WinningLotto} winningLotto
   * @param {Ticket} ticket
   * @returns {{ result: Array<{ rank: string, count: number }>, totalPrize: number, profitRate: number }}
   */
  execute(winningLotto, ticket) {
    // 당첨 결과 계산
    const lottoResultCalculator = new LottoResultCalculator();
    const result = lottoResultCalculator.evaluate(winningLotto, ticket);

    // 상금 및 수익률 계산
    const { totalPrize, profitRate } = ProfitCalculator.calculate(result, ticket.totalPrice());

    return { result, totalPrize, profitRate };
  }
}

export default WinningStatisticsUseCase;
