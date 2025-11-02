import LottoPurchaseUseCase from "../usecase/LottoPurchaseUseCase.js";
import WinningStatisticsUseCase from "../usecase/WinningStatisticsUseCase.js";
import RegisterWinningLottoUseCase from "../usecase/RegisterWinningLottoUseCase.js";
import InputView from "../ui/InputView.js";
import OutputView from "../ui/OutputView.js";
import WinningLotto from "../entity/WinningLotto.js";
import { withRetry } from "../utils/retry.js";

class LottoAppController {
  constructor() {
    this.purchaseUseCase = new LottoPurchaseUseCase();
    this.registerWinningLottoUseCase = new RegisterWinningLottoUseCase();
    this.winningStatisticsUseCase = new WinningStatisticsUseCase();
  }

  async run() {
    await this.#purchaseFlow();
    await this.#registerWinningFlow();
    this.#statisticsFlow();
  }

  async #purchaseFlow() {
    this.ticket = await withRetry(
      async () => this.#tryPurchase(),
      (error) => OutputView.printError(error.message));
  }

  async #tryPurchase() {
    const amount = await InputView.readAmount();
    const ticket = this.purchaseUseCase.execute(amount);
    OutputView.printPurchaseResult(ticket);
    return ticket;
  }

  async #registerWinningFlow() {
    const winningNumbers = await withRetry(
      () => this.#tryReadWinningNumbers(),
      (error) => OutputView.printError(error.message),
    );

    await withRetry(
      () => this.#tryRegisterBonus(winningNumbers),
      (error) => OutputView.printError(error.message),
    );
  }

  async #tryReadWinningNumbers() {
    const nums = await InputView.readWinningNumbers();
    new WinningLotto(nums);
    return nums;
  }

  async #tryRegisterBonus(winningNumbers) {
    OutputView.printLine();
    const bonusNumber = await InputView.readBonusNumber();
    this.winningLotto = this.registerWinningLottoUseCase.execute(
      winningNumbers,
      bonusNumber,
    );
  }

  #statisticsFlow() {
    const { result, profitRate } = this.winningStatisticsUseCase.execute(this.winningLotto, this.ticket);
    OutputView.printWinningResult(result);
    OutputView.printProfitRate(profitRate);
  }
}

export default LottoAppController;
