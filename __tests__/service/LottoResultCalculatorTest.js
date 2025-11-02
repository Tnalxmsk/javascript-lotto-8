import LottoResultCalculator from "../../src/service/LottoResultCalculator.service.js";
import WinningLotto from "../../src/entity/WinningLotto.js";
import Lotto from "../../src/entity/Lotto.js";
import Ticket from "../../src/entity/Ticket.js";
import { RANK } from "../../src/service/const/rank.js";

describe("로또 결과 계산 클래스 테스트", () => {
  test("로또 번호가 5개가 일치하지만 보너스 번호가 존재하지 않아 THIRD 를 반환한다.", () => {
    const lottoResultCalculator = new LottoResultCalculator();
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 8], 10);
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const count = winningLotto.countMatches(lotto);
    const hasBonusNumber = winningLotto.hasBonusNumber(lotto);
    const rank = lottoResultCalculator.judgeRank(count, hasBonusNumber);
    expect(rank).toBe("THIRD");
  });

  test("로또 번호가 5개가 일치하고 보너스 번호가 존재하면 SECOND 를 반환한다.", () => {
    const lottoResultCalculator = new LottoResultCalculator();
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 8], 10);
    const lotto = new Lotto([1, 2, 3, 4, 5, 10]);
    const count = winningLotto.countMatches(lotto);
    const hasBonusNumber = winningLotto.hasBonusNumber(lotto);
    const rank = lottoResultCalculator.judgeRank(count, hasBonusNumber);
    expect(rank).toBe("SECOND");
  });

  test("로또 번호가 모두 일치하면 FIRST를 반화한다.", () => {
    const lottoResultCalculator = new LottoResultCalculator();
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 10);
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const count = winningLotto.countMatches(lotto);
    const hasBonusNumber = winningLotto.hasBonusNumber(lotto);
    const rank = lottoResultCalculator.judgeRank(count, hasBonusNumber);
    expect(rank).toBe("FIRST");
  });

  test("로또 번호 일치 개수가 3개 미만이면 NONE을 반환한다.", () => {
    const lottoResultCalculator = new LottoResultCalculator();
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 10);
    const lotto = new Lotto([12, 13, 14, 15, 16, 17]);
    const count = winningLotto.countMatches(lotto);
    const hasBonusNumber = winningLotto.hasBonusNumber(lotto);
    const rank = lottoResultCalculator.judgeRank(count, hasBonusNumber);
    expect(rank).toBe("NONE");
  });

  test("1등에 당첨 되면 개수를 해당 RANK의 개수를 증가시킨다.", () => {
    const lottoResultCalculator = new LottoResultCalculator();
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 10);
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 15, 36]);
    const ticket = new Ticket([lotto, lotto2]);
    const result = lottoResultCalculator.evaluate(winningLotto, ticket);

    expect(result.find((item) => item.rank === RANK.FIRST).count).toBe(1);
    expect(result.find((item) => item.rank === RANK.SECOND).count).toBe(0);
    expect(result.find((item) => item.rank === RANK.FOURTH).count).toBe(1);
  });
});
