function solve(input) {
    let kilos = Number(input[0]);
    let type = input[1];
    let distance = Number(input[2]);
    let price = 0;
    let moreMoney = 0;


    switch (type) {
        case "standard":
            if (kilos < 1) {
                price = distance * 0.03;
            } else if (kilos < 10) {
                price = distance * 0.05;
            } else if (kilos < 40) {
                price = distance * 0.10;
            } else if (kilos < 90) {
                price = distance * 0.15;
            } else if (kilos < 150) {
                price = distance * 0.20;
            }
            break;
        case "express":
            if (kilos < 1) {
                moreMoney = ((0.03 * 0.80) * kilos) * distance;
                price = (distance * 0.03) + moreMoney;
            } else if (kilos < 10) {
                moreMoney = ((0.05 * 0.40) * kilos) * distance;
                price = (distance * 0.05) + moreMoney;
            } else if (kilos < 40) {
                moreMoney = ((0.10 * 0.05) * kilos) * distance;
                price = (distance * 0.10) + moreMoney;
            } else if (kilos < 90) {
                moreMoney = ((0.15 * 0.02) * kilos) * distance;
                price = (distance * 0.15) + moreMoney;
            } else if (kilos < 150) {
                moreMoney = ((0.20 * 0.01) * kilos) * distance;
                price = (distance * 0.20) + moreMoney;
            }
            break;

        default:
            break;
    }
    console.log(`The delivery of your shipment with weight of ${kilos.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`);

}

solve(["20", 
"standard",
"349"])

