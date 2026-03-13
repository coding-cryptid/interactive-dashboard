let name="Gianna";

function greet(name) {
    return "Hello, " + name + "!"
}

let person = {
    name:"Gianna",
    age: 19,
    role: "Developer",
    active: true
}

console.log(greet(person.name));
console.log(person);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i=0; i<numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " is even");
    } else {
        console.log(numbers[i] + " is odd");
    }
}