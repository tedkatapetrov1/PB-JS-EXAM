function pinCodes(input) {
    let firstBorder = Number(input[0]);
    let secondBorder = Number(input[1]);
    let thirdBorder = Number(input[2]);


    for (let i = 1; i <= firstBorder; i++) {
        if (i % 2 === 0) {
            for (let j = 2; j <= secondBorder; j++) {
                let isPrime = true;
                for (let currDivisor = 2; currDivisor < j; currDivisor++) {
                    if (j % currDivisor === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    for (let m = 1; m <= thirdBorder; m++) {
                        if (m % 2 === 0) {
                             console.log(`${i} ${j} ${m}`);
                        }
                       
                    }
                }

            }
        }

    }

}

pinCodes([8, 2, 8])