function party(input) {
    let price = Number(input[0]);
    let loveListCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let keyholdersCount = Number(input[3]);
    let caricatursCount = Number(input[4]);
    let luckyCartsCount = Number(input[5]);

    let totalProducts = loveListCount + roseCount + keyholdersCount + caricatursCount + luckyCartsCount;



    let totalLovePrice = loveListCount * 0.60;
    let totalRosePrice = roseCount * 7.20;
    let keyPrice = keyholdersCount * 3.60;
    let caricatursPrice = caricatursCount * 18.20;
    let luckyPrice = luckyCartsCount * 22;

    let totalPrice = totalLovePrice + totalRosePrice + keyPrice + caricatursPrice + luckyPrice;

    if (totalProducts >= 25) {
        totalPrice *= 0.65;
    }

    let finalMoney = totalPrice * 0.90;

    if (finalMoney >= price) {
        let left = finalMoney - price;
        console.log(`Yes! ${left.toFixed(2)} lv left.`);
    }else if (price > finalMoney) {
        let needed = price - finalMoney;
        console.log(`Not enough money! ${needed.toFixed(2)} lv needed.`);
        
    }
}

party(["320",
"8",
"2",
"5",
"5",
"1"])
