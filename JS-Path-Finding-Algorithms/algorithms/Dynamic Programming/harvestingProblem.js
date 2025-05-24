/**
 *  Giải Bài Toán Cắt Cỏ (Thuật Toán Quy Hoạch Động)
 */

function maxCutArea(garden) {
    const dp = Array(garden + 1).fill(0);
    for (let i = 1; i <= garden; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j))
        }
    }

    return dp[garden];
}

console.log(maxCutArea(10))