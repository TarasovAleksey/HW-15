const persons = [];
let inputData = prompt ('123,aleksey,tarasov,45');
while (inputData.toLowerCase()) {
    const data = inputData.split(',');
    const id = data[0];
    const firstName = data[1];
    const lastName = data[2];
    const age = data[3];

    const person = new Person(id, firstName, lastName, age);
    persons.push(person);

   inputData = prompt ('111,anton,petrov,45');
}

console.log(persons);

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}