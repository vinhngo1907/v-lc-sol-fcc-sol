function ListNode(val, next){
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function createListNode(nums){
    const result = new ListNode(0);
    let head = result;
    for(let i = 0; i < nums.length; i++){
        head.next = new ListNode(nums[i]);
        head = head.next;
    }
    return result.next;
}