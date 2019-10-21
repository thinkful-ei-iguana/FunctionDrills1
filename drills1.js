function getYearOfBirth(age){
    if (age < 0){
        throw new Error ("Age can not be negative!!");
    }
    
    return 2019 - age;

}

function createGreeting(name, age){
    const yearOf = 2019 - age;
    return `Hi my name is ${name} and I am ${age} years old. I was born on ${yearOf}`;
}
try {

    const newGreeting = createGreeting(name, age);
    return newGreeting;
    

}catch (err){
    console.error('Age cannot be less than 0');
}