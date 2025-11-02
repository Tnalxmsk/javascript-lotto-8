import WinningLotto from "../entity/WinningLotto.js";

class RegisterWinningLottoUseCase {
  /**
   * @param {Array<number>} winningNumbers
   * @param {number} bonusNumber
   * @returns {WinningLotto}
   * @summary 입력 받은 당첨 로또 숫자와 보너스 번호를 통해 당첨 로또를 발행합니다.
   */
  execute(winningNumbers, bonusNumber) {
    const winningLotto = new WinningLotto(winningNumbers);
    winningLotto.registerBonusNumber(bonusNumber);
    return winningLotto;
  }
}

export default RegisterWinningLottoUseCase;
