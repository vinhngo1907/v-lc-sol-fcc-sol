/**
 * Lập lịch chuyến xe (interval scheduling problem)
 */

function maxSchedules(tasks) {
    tasks.sort((a, b) => a[1] - b[1]);
    let end = -Infinity;
    let count = 0;
    for (const [start, finish] of tasks) {
        if (start >= end) {
            count++;
            end = finish;
        }
    }

    return count;
}

const trips = [
    [1, 3],
    [2, 5],
    [4, 6],
    [6, 7],
    [5, 9]
];

console.log(maxSchedules(trips));