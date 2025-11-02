import { LOTTO_PRICE, LOTTO_PRICE_REMAINDER, MAX_LOTTO_AMOUNT, MIN_LOTTO_AMOUNT } from "./const/lotto.const.js";
import { throwError } from "../utils/error.js";
import { AMOUNT_ERROR_MESSAGE, AMOUNT_ERROR_TYPES } from "./const/error.const.js";

class Order {
  #amount;
  #count;

  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
    this.#count = this.#amount / LOTTO_PRICE;
  }

  get amount() {
    return this.#amount;
  }

  get count() {
    return this.#count;
  }

  #validate(amount) {
    const amountNumber = Number(amount);
    if (Number.isNaN(amountNumber)) {
      throwError(AMOUNT_ERROR_MESSAGE, AMOUNT_ERROR_TYPES.INVALID_AMOUNT);
    }

    if (amountNumber < MIN_LOTTO_AMOUNT || amountNumber > MAX_LOTTO_AMOUNT) {
      throwError(AMOUNT_ERROR_MESSAGE, AMOUNT_ERROR_TYPES.INVALID_AMOUNT_ARANGE);
    }

    if (amountNumber % LOTTO_PRICE !== LOTTO_PRICE_REMAINDER) {
      throwError(AMOUNT_ERROR_MESSAGE, AMOUNT_ERROR_TYPES.INVALID_AMOUNT_FORMAT);
    }
  }
}

export default Order;
