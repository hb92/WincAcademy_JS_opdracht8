//Deel1: Checking if a number is big
const checkNumber = function(number) {
    if (number > 100) {
        return "true";
    }
    return "false";
};

const result = checkNumber(101);
console.log(result);
//=fucntion that produces something

//Deel 2: Bouncer at a club

const brenda = function (age, numberCurrent, numberMaximum) {
    if (age < 18) {
        return "This is a club for adults.";
    };
    if (numberCurrent < numberMaximum) {
        return "Come in!";
    };
    return "It's too busy now, come back later.";
};

const check1 = brenda(16, 67, 100);
console.log(check1);

const check2 = brenda(29, 88, 100);
console.log(check2);

const check3 = brenda(29, 101, 100);
console.log(check3);
//=This function produces something

//Deel3: Calculating the avarage

const gemiddelde = function (nr1, nr2, nr3, nr4, nr5) {
    const total =  nr1 + nr2 + nr3 + nr4 + nr5;
    const average =  total / 5;
    return average;
    };

console.log(gemiddelde(20, 15, 30, 10, 11));

//bonus
const gemiddelde2 = function (nr1, nr2, nr3, nr4, nr5) {
    const total =  nr1 + nr2 + nr3 + nr4 + nr5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};

console.log(gemiddelde2(20, 15, 30, 10, 11));
