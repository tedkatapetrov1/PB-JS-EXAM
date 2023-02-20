function everest(input) {
    let start = 5364;
    let finish = 8848;

    let index = 0;
    let rest = input[index];
    index++;
    let meters = Number(input[index]);
    index++;
    let daysCount = 1;

    while (rest !== "END") {
       
        start += meters;
        
        if (rest === "Yes") {
            daysCount++;
        }
        if (start >= finish) {
            console.log(`Goal reached for ${daysCount} days!`);
            break;
        }
        if (daysCount >= 5) {
            break;
        }

        if (meters >= finish) {
            console.log(`Goal reached for ${daysCount} days!`);
            break;
        }
        rest = input[index];
        index++;
        meters = Number(input[index]);
        index++;
    }
    if (start < finish) {
        console.log("Failed!");
        console.log(`${start}`);
    }
}

everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])
