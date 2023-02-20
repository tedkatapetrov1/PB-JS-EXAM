function workout(input) {
    let days = Number(input[0]);
    let km = Number(input[1]);

    let index = 2;
    let percents = Number(input[index]);
    index++;
    let totalKm = 0;

    for (let i = 1; i <= days + 1; i++) {
        totalKm += km;


        percents = (km * percents) / 100;
        km += percents;
        percents = Number(input[index]);
        index++;

    }
    if (totalKm >= 1000) {
        let more = Math.ceil(totalKm - 1000);
        console.log(`You've done a great job running ${more} more kilometers!`);
    } else {
        let left = Math.ceil(1000 - totalKm);
        console.log(`Sorry Mrs. Ivanova, you need to run ${left} more kilometers`);
    }
    
}

workout(["4",
"100",
"30",
"50",
"60",
"80"])

