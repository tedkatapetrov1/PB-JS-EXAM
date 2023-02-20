function solve(input) {
    let days = Number(input[0]);
    let leftFood = Number(input[1]);
    let foodFirst = Number(input[2]);
    let foodSecond = Number(input[3]);
    let foodThird = Number(input[4]);
    

    let first = days * foodFirst;
    let second = days * foodSecond;
    let third = days * foodThird;

    let total = first + second + third;

    if (total <= leftFood) {
        let left = leftFood - total;
        console.log(`${Math.floor(left)} kilos of food left.`);
    }else if (total > leftFood) {
        let needed = total - leftFood;
        console.log(`${Math.ceil(needed)} more kilos of food are needed.`);
    }
    
}

solve(["2",
"10",
"1",
"1",
"2"])
