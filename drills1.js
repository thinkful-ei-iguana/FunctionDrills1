
function getYearOfBirth(age){
    if (age < 0){
        throw new Error ('Age can not be negative!!');
    }
    else if (typeof(age) !== "number"){
        throw new Error ('Age must be defined as a number.');
    } 
    else 
    return 2019 - age;

}

function createGreeting(name, age){
    if (typeof(age) === "undefined" || typeof(name) === "undefined"){
        throw new Error ('Arguments not valid')
    }
    const yearOf = getYearOfBirth(age);
    return `Hi my name is ${name} and I am ${age} years old. I was born in ${yearOf}`;
}
let newGreeting;

try {
    newGreeting = createGreeting('Michael', 29);
}catch (err){
    console.error(err);
}
console.log(newGreeting);