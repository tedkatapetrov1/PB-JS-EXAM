function bestPlayer(input) {
    let i = 0;
    let max = 0;
    let best;
    while (input[i] != "END") {
        let name = input[i];
        let br = Number(input[i + 1]);
        if (br > max) {
            max = br;
            best = name;
        }
        if (max >= 10) break;
        i += 2;
    }

    console.log(`${best} is the best player!`);

    if (max >= 3) {
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${max} goals.`);
    }
}

bestPlayer(["Petrov",
"2",
"Drogba",
"11"])
