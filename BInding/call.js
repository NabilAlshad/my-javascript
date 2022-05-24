const printPlayerName = function (h) {

    console.log(`${this.name} is the name of player ${h}`);
}

const player = {
    name: "miller",
    age: 34
}
var height = "tall"

console.log(printPlayerName.call(player, height));

//call is the explicit binding it calls an outer prporty of outside .call first parameter will be the  calling property and rest will be the parameter pass as you want 