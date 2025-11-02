import Lotto from "./Lotto.js";

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(props, bonusNumber) {
    super(props);
    this.#bonusNumber = bonusNumber;
  }

  /**
   * @param {Lotto} targetLotto
   */
  countMatches(targetLotto) {
    const filteredNumbers = [...this.numbers].filter((number) => targetLotto.numbers.includes(number));
    return filteredNumbers.length;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}

export default WinningLotto;
