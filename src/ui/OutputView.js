import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message.const.js";
import { PRIZE, RANK, RANK_RULE } from "../service/const/rank.const.js";

class OutputView {

  /**
   *  @param {Ticket} ticket
   */
  static printPurchaseResult(ticket) {
    this.printLine();
    Console.print(MESSAGE.OUTPUT.PURCHASED_LOTTO(ticket.getCount()));
    for (const myLotto of ticket.lottos) {
      Console.print(MESSAGE.OUTPUT.LOTTO_NUMBERS(myLotto.numbers));
    }
    this.printLine();
  }

  /**
   * @param {Array<{ rank: string, count: number }>} result
   */
  static printWinningResult(result) {
    this.printLine();
    Console.print(MESSAGE.OUTPUT.WINNING_STATISTICS);
    for (const item of [...result].reverse()) {
      const matchCount = RANK_RULE[item.rank];
      const prize = PRIZE[item.rank].toLocaleString();
      const winningCount = item.count.toLocaleString();
      if (item.rank === RANK.NONE) continue;
      if (item.rank === RANK.SECOND) {
        Console.print(MESSAGE.OUTPUT.WINNING_RESULT_HAS_BONUS(matchCount, prize, winningCount));
        continue;
      }
      Console.print(MESSAGE.OUTPUT.WINNING_RESULT(matchCount, prize, winningCount));
    }
  }

  /**
   * @param {number} profitRate
   */
  static printProfitRate(profitRate) {
    Console.print(MESSAGE.OUTPUT.PROFIT_RATE(profitRate.toLocaleString()));
  }

  static printError(message) {
    Console.print(message);
    this.printLine();
  }

  static printLine() {
    Console.print(MESSAGE.OUTPUT.EMPTY_LINE);
  }
}

export default OutputView;
