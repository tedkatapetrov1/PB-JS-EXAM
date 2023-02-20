function grades(input) {
    let students = Number(input[0]);
    let index = 1;
    let grades = Number(input[index]);
    index++;

    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let avg = 0;

    while (index <= students + 1) {
       
        if (grades >= 2 && grades <= 2.99) {
            avg += grades;
            count2++;
        } else if (grades >= 3 && grades <= 3.99) {
            avg += grades;
            count3++;
        } else if (grades >= 4 && grades <= 4.99) {
            avg += grades;
            count4++;
        } else if (grades >= 5) {
            avg += grades;
            count5++;
        }

        grades = Number(input[index]);
        index++;
    }
    let percent2 = (count2 / students) * 100;
    let percent3 = (count3 / students) * 100;
    let percent4 = (count4 / students) * 100;
    let percent5 = (count5 / students) * 100;
    let totalAvg = avg / students;

    console.log(`Top students: ${percent5.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percent4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percent3.toFixed(2)}%`);
    console.log(`Fail: ${percent2.toFixed(2)}%`);
    console.log(`Average: ${totalAvg.toFixed(2)}`);

}

grades(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])