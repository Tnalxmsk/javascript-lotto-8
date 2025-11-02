import Order from "../src/entity/Order.js";
import order from "../src/entity/Order.js";

describe("로또 클래스 테스트", () => {
  test("구입 금액이 숫자가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Order("a");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 0원이라면 예외가 발생한다.", () => {
    expect(() => {
      new Order(0);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 이상이라면 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Order(2000);
    }).not.toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 단위가 아니라면 예외가 발생한다.", () => {
    expect(() => {
      new Order(1001);
    }).toThrow("[ERROR]");
  });

  test("최대 구입 금액을 초과하면 예외가 발생한다.", () => {
    expect(() => {
      new order(1000001);
    }).toThrow("[ERROR]");
  });

  test("구입 금액 / 로또 금액 만큼 개수를 반환한다.", () => {
    const order = new Order(3000);
    expect(order.count).toBe(3);
  });
});
