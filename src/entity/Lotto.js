import { LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES } from "./const/error.const.js";
import { LOTTO_COUNT, LOTTO_MAX_NUMBER, LOTTO_MIN_NUMBER } from "./const/lotto.const.js";
import { throwError } from "../utils/error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_COUNT) {
      throwError(LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES.MAX_COUNT);
    }

    if (numbers.some((number) => number < LOTTO_MIN_NUMBER || number > LOTTO_MAX_NUMBER)) {
      throwError(LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES.INVALID_NUMBER);
    }

    if (new Set(numbers).size !== LOTTO_COUNT) {
      throwError(LOTTO_ERROR_MESSAGE, LOTTO_ERROR_TYPES.DUPLICATE);
    }
  }
}

export default Lotto;
