import { RANK } from "../service/const/rank.const.js";
import { INITIAL_COUNT } from "../common/const.js";

/**
 *  @returns {Array<{ rank: string, count: number }>} rank: RANK.FIRST | RANK.SECOND | RANK.THIRD | RANK.FOURTH | RANK.FIFTH | RANK.NONE
 */
export const createResult = () => {
  return Object.values(RANK).map((rank) => ({ rank, count: INITIAL_COUNT }));
};
