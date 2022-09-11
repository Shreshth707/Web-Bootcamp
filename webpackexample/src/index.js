// this is always an entry point for webpack
import "./styles.css"; 
import {add,subtract} from './compute';
import Person from './Person';
import {random} from 'lodash';

console.log("Hello World!!!!");

console.log(add(4,5));
console.log(subtract(41,5));

let p1 = new Person("George", 31);

console.log(p1.getName(), p1.getAge());

console.log(random(1,1000));
function* saga() {
    console.log("task1");
    console.log("task2");
    
    yield "first output";
    console.log("task3");
    
    yield 100;
    console.log("task4");
    console.log("task5");
    
    yield {"name": "anitha", age: 21};
}

var iter = saga();
iter.next(); 