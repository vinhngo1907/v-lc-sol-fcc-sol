/**
 * 
 * @param {*} array 
 * @returns {Array}
 */
function doBubblesort(array) {
    var length = array.length;
    console.time("Start");
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // var temp = array[j + 1];
                // array[j + 1] = array[j];
                // array[j] = temp;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    console.timeEnd("End");
    return array;
}
/**
 * 
 * @param {*} arr 
 * @returns {Array}
 */
function bubbleSort2(arr) {
    console.time('1.改进后冒泡排序耗时');
    var i = arr.length - 1; //初始时,最后位置保持不变
    while (i > 0) {
        var pos = 0; //每趟开始时,无记录交换
        for (var j = 0; j < i; j++)
            if (arr[j] > arr[j + 1]) {
                pos = j; //记录交换的位置
                // var tmp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = tmp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // ES6 的解构来进行元素交换
            }
        i = pos; //为下一趟排序作准备
    }
    console.timeEnd('1.改进后冒泡排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(doBubblesort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

