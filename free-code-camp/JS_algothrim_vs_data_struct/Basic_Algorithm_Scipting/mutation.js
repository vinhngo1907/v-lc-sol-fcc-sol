function mutation(arr) {
    let check = arr[1].split("")
    for (let i of check) {
        let re = new RegExp(i, "i")
        if (re.test(arr[0]) == false) {
            return false
        }
    }
    return true
}

console.log(mutation(["hello", "Hey"]));