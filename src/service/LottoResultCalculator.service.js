import { RANK, RANK_RULE } from "./const/rank.js";

class LottoResultCalculator {

  /**
   *  @param {WinningLotto} winningLotto
   *  @param {Ticket} ticket
   *  @returns {Array<{ rank: string, count: number }>}
   */
  evaluate(winningLotto, ticket) {
    const result = Object
      .values(RANK)
      .map((rank) => ({ rank, count: 0 }));

    for (const myLotto of ticket.lottos) {
      const matchCount = winningLotto.countMatches(myLotto);
      const hasBonus = winningLotto.hasBonusNumber(myLotto);
      const rank = this.judgeRank(matchCount, hasBonus);
      result.find((item) => item.rank === rank).count += 1;
    }

    return result;
  }

  /**
   * @param {number} matchCount
   * @param {boolean} hasBonus
   * @returns {string} RANK.FIRST | RANK.SECOND | RANK.THIRD | RANK.FOURTH | RANK.FIFTH | RANK.NONE
   */
  judgeRank(matchCount, hasBonus) {
    if (matchCount === RANK_RULE.FIRST) return RANK.FIRST;
    if (matchCount === RANK_RULE.SECOND) return hasBonus ? RANK.SECOND : RANK.THIRD;
    if (matchCount === RANK_RULE.FOURTH) return RANK.FOURTH;
    if (matchCount === RANK_RULE.FIFTH) return RANK.FIFTH;
    return RANK.NONE;
  }
}

export default LottoResultCalculator;
