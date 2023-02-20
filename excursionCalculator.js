function solve(input) {
    let people = Number(input[0]);
    let season = input[1];
    let price = 0;


    switch (season) {
        case "spring":
            if (people <= 5) {
                price = people * 50.00;
            }else if (people > 5) {
                price = people * 48.00;
            }
            
            break;
        case "summer":
            if (people <= 5) {
                price = (people * 48.50) * 0.85;
            }else if (people > 5) {
                price = (people * 45.00) * 0.85;
            }
            break;
        case "autumn":
            if (people <= 5) {
                price = people * 60.00;
            }else if (people > 5) {
                price = people * 49.50;
            }
            break;
        case "winter":
            if (people <= 5) {
                price = (people * 86.00) * 1.08;
            }else if (people > 5) {
                price = (people * 85.00) * 1.08;
            }
            break;
    
        default:
            break;
    }
    console.log(`${price.toFixed(2)} leva.`);
}

solve(["20",
"winter"])