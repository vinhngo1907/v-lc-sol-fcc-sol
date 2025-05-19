function bubbleSort(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    const result = [...new Set(a)];
    return result
}

//  Input : [1,4,2,7,2,6,5]
//  Output : [1,2,4,5,6,7]

console.log(bubbleSort([1, 4, 2, 7, 2, 6, 5]))