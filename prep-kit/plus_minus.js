function plusMinus(arr) {
    // Write your code here
    const length = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    
    arr.forEach(e => {
       if (e > 0) {
            positiveCount++;
       } else if (e == 0) {
            zeroCount++;
       } else {
            negativeCount++;
       } 
    });
    
    console.log((positiveCount / length).toFixed(6));
    console.log((negativeCount / length).toFixed(6));
    console.log((zeroCount / length).toFixed(6));
}