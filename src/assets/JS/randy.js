function randy() {
    let list = []
    for(let i = 0; i < 50; i ++) {
        let nums = Math.floor(Math.random() * 501)
        list.push(nums)
    }
    return list
}

// randy()

