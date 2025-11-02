import { RANK } from "../../src/service/const/rank.js";
import { createResult } from "../../src/utils/createResult.js";
import ProfitCalculator from "../../src/service/ProfitCalculator.service.js";

describe("로또 수익 계산 클래스 테스트", () => {
  test("당첨이 없으면 총 수익금은 0이다.", () => {
    const lottoResult = createResult();
    const totalPrize = ProfitCalculator.calculateTotalPrize(lottoResult);
    expect(totalPrize).toBe(0);
  });

  test("3개 일치 1개만 존재한다면 수익은 5,000원이다.", () => {
    const lottoResult = createResult();
    lottoResult.find((item) => item.rank === RANK.FIFTH).count = 1;
    const totalPrize = ProfitCalculator.calculateTotalPrize(lottoResult);
    expect(totalPrize).toBe(5_000);
  });

  test("6개 일치와 5개 일치(보너스볼 일치)가 1개씩 존재한다.", () => {
    const lottoResult = createResult();
    lottoResult.find((item) => item.rank === RANK.FIRST).count = 1;
    lottoResult.find((item) => item.rank === RANK.SECOND).count = 1;
    const totalPrize = ProfitCalculator.calculateTotalPrize(lottoResult);
    expect(totalPrize).toBe(2_030_000_000);
  });

  test("5개 일치와 4개 일치가 각각 2개씩 존자한다.", () => {
    const lottoResult = createResult();
    lottoResult.find((item) => item.rank === RANK.THIRD).count = 2;
    lottoResult.find((item) => item.rank === RANK.SECOND).count = 2;
    const totalPrize = ProfitCalculator.calculateTotalPrize(lottoResult);
    expect(totalPrize).toBe(63_000_000);
  });

  test("6개 당첨이 1,000개 일 때 금액은 2조원이다.", () => {
    const lottoResult = createResult();
    lottoResult.find((item) => item.rank === RANK.FIRST).count = 1000;
    const totalPrize = ProfitCalculator.calculateTotalPrize(lottoResult);
    expect(totalPrize).toBe(2_000_000_000_000);
  });

  test("로또 8개 구입 후 3개 일치 1개만 당첨되었을 때의 수익률을 계산한다.", () => {
    const totalPrize = 5000;
    const purchaseAmount = 8000;
    const profitRate = ProfitCalculator.calculateProfitRate(totalPrize, purchaseAmount);
    expect(profitRate).toBe(62.5);
  });
});
