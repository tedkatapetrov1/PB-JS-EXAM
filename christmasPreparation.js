function solve(input) {
    let paperCount = Number(input[0]);
    let rolsCount = Number(input[1]);
    let litresGlueCount = Number(input[2]);
    let discount = Number(input[3]);

    let paperPrice = paperCount * 5.80;
    let rolsPrice = rolsCount * 7.20;
    let gluePrice = litresGlueCount * 1.20;

    let total = paperPrice + rolsPrice + gluePrice;
    let discountFinal = discount / 100;
    let finalPrice = total - (total * discountFinal);

    console.log(finalPrice.toFixed(3));
    

}

solve(["2",
"3",
"2.5",
"25"])