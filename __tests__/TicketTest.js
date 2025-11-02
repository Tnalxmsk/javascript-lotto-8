import Lotto from "../src/entity/Lotto.js";
import Ticket from "../src/entity/Ticket.js";

describe("로또 클래스 테스트", () => {
  test("구매한 로또들의 총 금액을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoBundle = [lotto, lotto2];
    const ticket = new Ticket(lottoBundle);
    expect(ticket.totalPrice()).toBe(2000);
  });

  test("구매한 모든 로또의 주문 번호를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoBundle = [lotto, lotto2];
    const ticket = new Ticket(lottoBundle);
    expect(ticket.getAllNumbers()).toEqual([[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]]);
  });
});
