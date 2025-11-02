import WinningLotto from "../src/entity/WinningLotto.js";
import Lotto from "../src/entity/Lotto.js";

describe("당첨 로또 클래스 테스트", () => {
  test("내 로또 번화 당첨 로또의 매칭 개수를 반환한다.", () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 8]);
    expect(winningLotto.countMatches(myLotto)).toBe(5);
  });
});
