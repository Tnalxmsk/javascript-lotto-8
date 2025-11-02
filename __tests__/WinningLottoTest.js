import WinningLotto from "../src/entity/WinningLotto.js";
import Lotto from "../src/entity/Lotto.js";

describe("당첨 로또 클래스 테스트", () => {
  test("내 로또 번화 당첨 로또의 매칭 개수를 반환한다.", () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 8]);
    expect(winningLotto.countMatches(myLotto)).toBe(5);
  });

  test("보너스 넘버를 가지고 있지 않으면 false를 반환한다.", () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 8], 10);
    expect(winningLotto.hasBonusNumber(myLotto)).toBe(false);
  });

  test("보너스 넘버를 가지고 있다면 true를 반환한다.", () => {
    const myLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 8], 1);
    expect(winningLotto.hasBonusNumber(myLotto)).toBe(true);
  })
});
