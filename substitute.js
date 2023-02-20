function substitute(input) {
    let k = Number(input[0]); // 0-8
    let l = Number(input[1]); // 9-0
    let m = Number(input[2]); //0 -8
    let n = Number(input[3]); // 9-0
    let count = 0;

    for (let i = k; i <= 8; i++) {
        for (let j = 9; j >= l; j--) {
            for (let b = m; b <= 8; b++) {
                for (let v = 9; v >= n; v--) {
                    if (i % 2 === 0 && b % 2 === 0) {
                        if (j % 2 !== 0 && v % 2 !== 0) {
                            if (i === b && j === v) {
                                console.log("Cannot change the same player.");
                            } else {
                                count++;
                                console.log(`${i}${j} - ${b}${v}`);
                                if (count === 6) {
                                    return;
                                }
                            }

                        }
                    }
                }

            }
        }

    }

}

substitute(["7",
"6",
"8",
"5"])