import { LOTTO_PRICE } from "./const/lotto.const.js";

class Ticket {
  #lottos;

  constructor(lottos) {
    this.#lottos = lottos;
  }

  get lottos() {
    return this.#lottos;
  }

  getAllNumbers() {
    return this.#lottos.map((lotto) => lotto.numbers);
  }

  totalPrice() {
    return this.#lottos.length * LOTTO_PRICE;
  }
}

export default Ticket;
