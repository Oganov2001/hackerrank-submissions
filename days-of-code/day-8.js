function processData(input) {
    //Enter your code here
    const input_arr = input.split("\n");
    const entries = Number(input_arr[0]);
    let phone_book = new Map();
    
    for (let i = 1; i <= entries; i++) {
        let [key, value] = input_arr[i].split(" ");
        phone_book.set(key, value);
    }
    
    for (let i = entries + 1; i < input_arr.length; i++) {
        const key = input_arr[i]
        if (phone_book.has(key)) {
            console.log(`${key}=${phone_book.get(key)}`);
        } else {
            console.log("Not found");
        }
    }
}