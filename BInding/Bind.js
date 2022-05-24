const printPlayerName = function (h) {

    console.log(`${this.name} is the name of player ${h}`);
}

const player = {
    name: "miller",
    age: 34
}
var v1 = "tall";
var v2 = "b",
var v = [v1, v2];

console.log(printPlayerName.bind(player, v));

//the difference between call and bind its bind call takes as a single parameter and bind takes array of parameter