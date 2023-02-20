function grandpaStavri(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let rakia = Number(input[index]);
    index++;
    let temperatures = Number(input[index]);
    index++;
    let totalSum = 0;
    let totalTemperatures = 0;
    let finalTemp = 0;

    for (let i = 1; i <= days; i++) {

        totalSum += rakia;
        totalTemperatures = temperatures * rakia;
        finalTemp += totalTemperatures;

        totalTemperatures = 0;
        rakia = Number(input[index]);
        index++;
        temperatures = Number(input[index]);
        index++;


    }

    let avgTemp = finalTemp / totalSum;

    console.log(`Liter: ${totalSum.toFixed(2)}`);
    console.log(`Degrees: ${avgTemp.toFixed(2)}`);
    if (avgTemp < 38) {
        console.log("Not good, you should baking!");
    }else if (avgTemp >= 38 && avgTemp <= 42) {
        console.log("Super!");
    }else if (avgTemp > 42) {
        console.log("Dilution with distilled water!");
    }

}

grandpaStavri(["2",
"200",
"43",
"200",
"40"])