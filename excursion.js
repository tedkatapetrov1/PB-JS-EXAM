function solve(input) {
    let people = Number(input[0]);
    let nights = Number(input[1]);
    let cards = Number(input[2]);
    let tickets = Number(input[3]);

    let priceNights = nights * 20;
    let priceCards = cards * 1.60;
    let priceTickets = tickets * 6;
    let totalPerson = priceNights + priceCards + priceTickets;

    let finalSum = (people * totalPerson) * 1.25;

    console.log(finalSum.toFixed(2));
    
}

solve(["131",
"9",
"33",
"46"])
