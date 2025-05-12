function processData(input) {
    const input_array = input.split("\n");
    const [ num_cases, ...strings ] = input_array;
    let even = [];
    let odd = [];
    
    for (let i = 0; i < num_cases; i++) {
        for (let j = 0; j < strings[i].length; j += 2) {
            even.push(strings[i][j]);
        }
        for (let y = -1; y < strings[i].length; y += 2) {
            odd.push(strings[i][y]);
        }
        console.log(even.join(""), odd.join(""));
        even = [];
        odd = [];
    }
} 