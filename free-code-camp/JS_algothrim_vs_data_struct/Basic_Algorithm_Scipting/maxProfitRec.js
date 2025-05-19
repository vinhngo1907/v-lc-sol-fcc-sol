function maxProfitRec(arr) {
    var resolve = { profit: 0 };
    var actionBuy = true;
    var buy = sell = arr[0];
    var i = 0;
    while (i < arr.length) {
        if (arr[i] < arr[i + 1]) {
            if (actionBuy) buy = arr[i];
            actionBuy = false;
        } else {
            sell = arr[i];
            if ((sell - buy) > resolve.profit) {
                resolve = {
                    buy,
                    sell,
                    profit: sell - buy
                }
            }
            actionBuy = true;
        }

        i++;
    }

    return resolve;
}

var list = [10, 12, 5, 7, 6, 4, 8, 12, 3, 9];
console.log(maxProfitRec(list));