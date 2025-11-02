export const RANK = {
  FIRST: "FIRST",
  SECOND: "SECOND",
  THIRD: "THIRD",
  FOURTH: "FOURTH",
  FIFTH: "FIFTH",
  NONE: "NONE",
};

export const RANK_RULE = {
  [RANK.FIRST]: 6,
  [RANK.SECOND]: 5,
  [RANK.THIRD]: 5,
  [RANK.FOURTH]: 4,
  [RANK.FIFTH]: 3,
};

export const PRIZE = {
  [RANK.FIRST]: 2_000_000_000,
  [RANK.SECOND]: 30_000_000,
  [RANK.THIRD]: 1_500_000,
  [RANK.FOURTH]: 50_000,
  [RANK.FIFTH]: 5_000,
  [RANK.NONE]: 0,
};
