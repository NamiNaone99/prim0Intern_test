import { merge } from "../src/merge";

describe("merge function", () => {
    it("should merge three sorted arrays correctly", () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6];
        const collection_3 = [9, 7, 5, 3, 1]; // descending order

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 9]);
    });

    it("should merge empty arrays correctly", () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([]);
    });

    it("should handle single-element arrays", () => {
        const collection_1 = [10];
        const collection_2 = [5];
        const collection_3 = [2];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([2, 5, 10]);
    });

    it("should handle already sorted arrays correctly", () => {
        const collection_1 = [1, 2, 3];
        const collection_2 = [4, 5, 6];
        const collection_3 = [9, 8, 7];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
