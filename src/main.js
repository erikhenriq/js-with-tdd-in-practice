const sum = (num1, num2) => {
    return num1 + num2;
};

const div = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return 'not possible divide by 0'
    }

    return num1 / num2;
};

const sub = (num1, num2) => {
    return num1 - num2;
};

const mult = (num1, num2) => {
    return num1 * num2;
};

export  {
    sum, sub, mult, div
}