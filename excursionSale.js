function solve(input) {
    let index = 0;
    let seaCount = Number(input[index]);
    index++;
    let mountainCount = Number(input[index]);
    index++;
    let packetName = input[index];
    index++;
    let profit = 0;


    while (packetName !== "Stop") {
        if (packetName === "sea") {
            if (seaCount > 0) {
                profit += 680;
                seaCount = seaCount - 1;
            } else if (seaCount === 0) {
                
            }
        } else if (packetName === "mountain") {
            if (mountainCount > 0) {
                profit += 499;
                mountainCount = mountainCount - 1;
            } else if (mountainCount === 0) {
                
            }
        }

        if (seaCount === 0 && mountainCount === 0) {
            console.log("Good job! Everything is sold.");
            break;
        }

        packetName = input[index];
        index++;
    }
    console.log(`Profit: ${profit} leva.`);
}

solve(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])
