/**
 * 
 * Giả sử ta có mảng grass = [3, 2, 5, 10, 7] đại diện cho giá trị cắt cỏ tại từng ô.
 * Ý tưởng:
 * dp[i] là giá trị tối đa có thể đạt được đến vị trí i.
 *  Tại mỗi vị trí i, ta có 2 lựa chọn:
 *  Không cắt ở ô i: dp[i] = dp[i-1]
 *  Cắt ở ô i: dp[i] = dp[i-2] + grass[i]
 * @param {*} grass 
 */

function maxGrassValue(grass) {

}