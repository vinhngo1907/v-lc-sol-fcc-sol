function findConsecutiveSeats(seats, count) {
    let consecutive = 0;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            consecutive++;
            if (consecutive === count) {
                return [i - count + 1, i]
            }
        }
    }

    return null;
}

const row = [1, 0, 0, 0, 1, 0, 0]; // 0
console.log(findConsecutiveSeats(row, 3)); // [1, 3]