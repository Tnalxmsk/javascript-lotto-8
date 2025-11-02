import { Random } from "@woowacourse/mission-utils";
import Lotto from "../entity/Lotto.js";
import { INITIAL_COUNT, LOTTO_COUNT, LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "../common/const.js";
import Ticket from "../entity/Ticket.js";

class LottoMachine {

  /**
   * @param {Order} order
   */
  issue(order) {
    const lottos = [];

    for (let i = INITIAL_COUNT; i < order.count; i++) {
      const lotto = this.#makeLotto();
      lottos.push(lotto);
    }

    return new Ticket(lottos);
  }

  #makeLotto() {
    const numbers = Random.pickUniqueNumbersInRange(LOTTO_MIN_NUMBER, LOTTO_MAX_NUMBER, LOTTO_COUNT).sort((a, b) => a - b);
    return new Lotto(numbers);
  }
}

export default LottoMachine;
