"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    // Reverse collection_3 since it is sorted in descending order
    let reversedCollection3 = [];
    for (let i = collection_3.length - 1; i >= 0; i--) {
        reversedCollection3.push(collection_3[i]);
    }
    // Merge three sorted arrays
    let mergedArray = [];
    let i = 0, j = 0, k = 0;
    while (i < collection_1.length && j < collection_2.length && k < reversedCollection3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= reversedCollection3[k]) {
            mergedArray.push(collection_1[i++]);
        }
        else if (collection_2[j] <= collection_1[i] && collection_2[j] <= reversedCollection3[k]) {
            mergedArray.push(collection_2[j++]);
        }
        else {
            mergedArray.push(reversedCollection3[k++]);
        }
    }
    // Merge remaining elements
    while (i < collection_1.length && j < collection_2.length) {
        mergedArray.push(collection_1[i] <= collection_2[j] ? collection_1[i++] : collection_2[j++]);
    }
    while (i < collection_1.length && k < reversedCollection3.length) {
        mergedArray.push(collection_1[i] <= reversedCollection3[k] ? collection_1[i++] : reversedCollection3[k++]);
    }
    while (j < collection_2.length && k < reversedCollection3.length) {
        mergedArray.push(collection_2[j] <= reversedCollection3[k] ? collection_2[j++] : reversedCollection3[k++]);
    }
    // Add remaining elements from each array
    while (i < collection_1.length)
        mergedArray.push(collection_1[i++]);
    while (j < collection_2.length)
        mergedArray.push(collection_2[j++]);
    while (k < reversedCollection3.length)
        mergedArray.push(reversedCollection3[k++]);
    return mergedArray;
}
