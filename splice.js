const arr = [2, 2, 3, 4, 5, 6, 7, 8];
const remove = arr.splice(2, 4, 66, 788);
console.log(remove);
const jon = arr.join(' ');


console.log(jon);


function counter() {
    let a = 0;
    return function() {
        const increment = a++;
        console.log(increment);
    }

}
const count = counter();
count();
count();
count();
count();
const count1 = counter();
count1();
count1();


function bitwiseAnd(n, n1) {
    const result = n & n1;
    return result;
}
const result = bitwiseAnd(5, 6);
console.log('the result is ' + result);
const user = { id: 1, name: 'nabil' };
const user1 = JSON.stringify(user);
console.log(`${user1} the json string is`);
const userJson = JSON.parse(user1);
console.log(userJson);

const trr = [1, 2, 4, 5];
const trr2 = [2, 3, 44, 5];
const trr3 = trr.concat(trr2);
console.log(`the join is ${trr3}`);