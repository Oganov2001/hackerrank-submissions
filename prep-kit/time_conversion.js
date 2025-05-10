function timeConversion(s) {
    const time = s.substring(0, 8).split(":");
    const meridiem = s.substring(8, 10);
    
    if (meridiem === "PM") {
        let num = Number(time[0]);
        if (time[0] !== "12") {
            num += 12;
        }
        time[0] = num.toString().padStart(2, "0");
    } else {
        if (time[0] === "12") {
            time[0] = "00";
        }
    }
    
    return time.join(":");
}