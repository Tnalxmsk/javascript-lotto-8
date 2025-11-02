import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message.const.js";
import { validateEmpty } from "../utils/validation.js";
import { parseIntArray } from "../utils/parse.js";

class InputView {
  static async readAmount() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.AMOUNT);
    validateEmpty(input);
    return input;
  }

  static async readWinningNumbers() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.WINNING_NUMBERS);
    validateEmpty(input);
    return parseIntArray(input);
  }

  static async readBonusNumber() {
    const input = await Console.readLineAsync(MESSAGE.INPUT.BONUS_NUMBER);
    validateEmpty(input);
    return Number(input);
  }
}

export default InputView;
