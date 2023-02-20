function solve(input) {
    let dancers = Number(input[0]);
    let point = Number(input[1]);
    let season = input[2];
    let country = input[3];
    let price = 0;


    if (country === "Bulgaria") {
        price = dancers * point;
    }else if (country === "Abroad") {
        price = (dancers * point) + ((dancers * point) * 0.50);
    }

    switch (country) {
        case "Bulgaria":
            switch (season) {
                case "summer":
                    price *= 0.95;
                    break;
                case "winter":
                    price *= 0.92;
                    break;
            
                default:
                    break;
            }
            break;
        case "Abroad":
            switch (season) {
                case "summer":
                    price *= 0.90;
                    break;
                case "winter":
                    price *= 0.85;
                    break;
            
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
    let charity = price * 0.75;
    let moneyAfter = (price - charity) / dancers;
    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyAfter.toFixed(2)}`);

    
}

solve(["25",
"98",
"winter",
"Bulgaria"])
