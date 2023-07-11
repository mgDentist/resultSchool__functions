const getSumOfNumbers = (number, type = 'odd') => {
    if (typeof (number) !== 'number') {
        return NaN;
    }
    if (type === 'odd') {
        let sum = 0;
        for (let i = 0; i <= number; i++) {
            if (i % 2) {
                sum += i;
            }
        }
        return sum;
    } else if (type === 'even') {
        let sum = 0;
        for (let i = 0; i <= number; i++) {
            if (!(i % 2)) {
                sum += i;
            }
        }
        return sum;
    } else {
        let sum = 0;
        for (let i = 0; i<= number; i++) {
            sum += i;
        }
        return sum;
    }
};

console.log(getSumOfNumbers(2, ''));

