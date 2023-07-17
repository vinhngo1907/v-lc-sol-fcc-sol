const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(arr) {
    var ctr = arr.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }

    return arr;
}