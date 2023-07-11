//function declaration
function getName1(name) {
    return `Имя равно ${name}`;
}

let callName1 = getName1('Jorge');
console.log(callName1);

//function expression
const getName2 = function(name) {
    return `Имя равно ${name}`;
};
console.log(getName2('Carlos'));

//arrow function expression
const getName3 = (name) => {
    return `Имя равно ${name}`;
};

let callName3 = getName3;
console.log(callName3('Tito'));