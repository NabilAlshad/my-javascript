const numbers = [2, 3, 4, 5];
const count = [];
// for (const i =0; i<numbers.length;i++)
// {
//     const element =numbers[i];
//     const result =element*element 
//const arrow=(hello,x)=>{
// return hello +x
//     const
// }
const result = numbers.map(element => element * element);
console.log(result);
const bigger = numbers.filter(x => x < 5);
console.log(bigger);
const students = [
    { id: 3, name: 'john' },
    { id: 4, name: 'polu' },
    { id: 5, name: 'ghotu' }

];
const students1 = students.map(s => s.name);
console.log(students1);
const students2 = students.filter(s => s.id > 2);
console.log(students2);
const students3 = students2.find(s => s.id > 3);
console.log(students3);

function hello() {
    console.log('hello');

}
hello();