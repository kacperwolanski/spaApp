// Update with the correct path to your file

import { getStartEndIndexes } from "../helpers/getPaginationStartEndIndexes";

describe("getStartEndIndexes", () => {
  test("should calculate start and end indexes correctly", () => {
    //paginationIndex = 1, totalItemsAmount = 10
    expect(getStartEndIndexes(1, 10)).toEqual({ startIndex: 1, endIndex: 5 });

    //paginationIndex = 3, totalItemsAmount = 20
    expect(getStartEndIndexes(3, 20)).toEqual({ startIndex: 11, endIndex: 15 });

    //paginationIndex = 2, totalItemsAmount = 7
    expect(getStartEndIndexes(2, 7)).toEqual({ startIndex: 6, endIndex: 7 });

    //paginationIndex = 4, totalItemsAmount = null
    expect(getStartEndIndexes(4, null)).toEqual({
      startIndex: 16,
      endIndex: 20,
    });
  });

  test("should handle totalItemsAmount less than elementsPerPageAmount", () => {
    //paginationIndex = 1, totalItemsAmount = 3
    expect(getStartEndIndexes(1, 3)).toEqual({ startIndex: 1, endIndex: 3 });
  });

  test("should handle edge case of totalItemsAmount being null", () => {
    //paginationIndex = 1, totalItemsAmount = null
    expect(getStartEndIndexes(1, null)).toEqual({ startIndex: 1, endIndex: 5 });
  });
});
