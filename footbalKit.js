function solve(input) {
    let priceShirt = Number(input[0]);
    let neededSum = Number(input[1]);

    let priceShorts = priceShirt * 0.75;
    let priceSockets = priceShorts * 0.20;
    let priceShoes = (priceShirt + priceShorts) * 2;

    let total = (priceShirt + priceShorts + priceSockets + priceShoes) * 0.85;
    

    if (total >= neededSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${total.toFixed(2)} lv.`);
    }else if (total < neededSum) {
        let needed = neededSum - total;
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${needed.toFixed(2)} lv. more.`);
    }
}

solve(["59.99",
    "500",])