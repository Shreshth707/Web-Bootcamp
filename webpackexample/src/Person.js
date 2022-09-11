export default class Person {
    name; // state
    age; // state
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

export const PI = 3.14159;