import Order from "../entity/Order.js";
import LottoMachine from "../service/LottoMachine.service.js";

class LottoPurchaseUseCase {
  /**
   * @param {number} amount
   * @returns {Ticket}
   * @summary 입력 받은 금액을 통해 로또 내역이 담긴 티켓을 발행합니다.
   */
  execute(amount) {
    const order = new Order(amount);
    const lottoMachine = new LottoMachine();
    return lottoMachine.issue(order);
  }
}

export default LottoPurchaseUseCase;
