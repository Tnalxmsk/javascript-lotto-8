import Order from "../../src/entity/Order.js";
import LottoMachine from "../../src/service/LottoMachine.service.js";

describe("로또 발매기 클래스 테스트", () => {
  test("로또 발행 테스트 - 주문 금액 만큼 로또를 발행한다.", () => {
    const order = new Order(3000);
    const lottoMachine = new LottoMachine();
    const ticket = lottoMachine.issue(order);
    expect(ticket.getCount()).toBe(order.count);
  });

  test("발행 테스트 - 주문 금액과 로또 발행 티켓의 총 금액과 일치한다.", () => {
    const order = new Order(3000);
    const lottoMachine = new LottoMachine();
    const ticket = lottoMachine.issue(order);
    expect(ticket.totalPrice()).toBe(order.amount);
  });
});
