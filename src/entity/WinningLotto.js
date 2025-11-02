import Lotto from "./Lotto.js";
import { throwError } from "../utils/error.js";
import { LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES } from "./const/error.const.js";
import { LOTTO_COUNT, LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "../common/const.js";

class WinningLotto extends Lotto {
  #bonusNumber;

  constructor(numbers) {
    super(numbers);
  }

  registerBonusNumber(number) {
    this.#validateBonusNumber(number);
    this.#bonusNumber = number;
  }

  /**
   * @param {Lotto} targetLotto
   * @returns {number}
   */
  countMatches(targetLotto) {
    const filteredNumbers = [...this.numbers].filter((number) => targetLotto.numbers.includes(number));
    return filteredNumbers.length;
  }

  /**
   * @param {Lotto} targetLotto
   * @returns {boolean}
   */
  hasBonusNumber(targetLotto) {
    return targetLotto.numbers.includes(this.#bonusNumber);
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }

  #validateBonusNumber(number) {
    const targetNumber = Number(number);
    if (!Number.isInteger(targetNumber)) {
      throwError(LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES.INVALID_NUMBER);
    }

    if (targetNumber < LOTTO_MIN_NUMBER || targetNumber > LOTTO_MAX_NUMBER) {
      throwError(LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES.INVALID_NUMBER);
    }

    if (this.numbers.includes(targetNumber)) {
      throwError(LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES.DUPLICATE);
    }
  }
}

export default WinningLotto;
