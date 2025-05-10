function miniMaxSum(arr) {
    const array_length = arr.length;
    let minSum = Number.MAX_VALUE;
    let maxSum = 0;
    let sums = [];
    let temp_sum = 0;
    let ignored_index = 0;
    
    for (let i = 0; i < array_length; i++) {
        ignored_index = i;
        for (let j = 0; j < array_length; j++) {
            if (j === ignored_index) {
                continue;
            } else {
                temp_sum += arr[j];
            }
        }
        sums.push(temp_sum);
        temp_sum = 0;
    }
    
    const sums_length = sums.length;
    for (let i = 0; i < sums_length; i++) {
        if (minSum > sums[i]) {
            minSum = sums[i];
        }
        
        if (maxSum < sums[i]) {
            maxSum = sums[i];
        }
    }
    
    console.log(`${minSum} ${maxSum}`);
}