const getDivisorsCount = (number) => {
    if (number === undefined || isNaN(number)) {
        return NaN;
    }
    else if (number <= 0 || !Number.isInteger(number)) {
        return alert(`number должен быть целым числом и больше нуля!`);
    } else {
        let divisors;
        for (let i = number; i > 0; i--) {
            if (!(number % i)) {
                divisors = i;
                console.log(divisors);
            }
        }
    }
};
getDivisorsCount();


