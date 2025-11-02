export const MESSAGE = {
  INPUT: {
    AMOUNT: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
    BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
  },
  OUTPUT: {
    PURCHASED_LOTTO: (count) => `${count}개를 구매했습니다.`,
    LOTTO_NUMBERS: (numbers) => `[${numbers.join(", ")}]`,
    WINNING_STATISTICS: "당첨 통계\n---",
    WINNING_RESULT: (matchCount, amount, winningCount) => `${matchCount}개 일치 (${amount}원) - ${winningCount}개`,
    WINNING_RESULT_HAS_BONUS: (matchCount, amount, winningCount) => `${matchCount}개 일치, 보너스 볼 일치 (${amount}원) - ${winningCount}개`,
    PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
  },
};
