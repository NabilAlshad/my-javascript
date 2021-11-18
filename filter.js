// const ar = [1, 3, 4, 5, 6, 77, 3, 4, 5, 6];
// const duplicateArray = ar.filter((item, index) => {
//   return ar.indexOf(item) != index;
// });

// console.log(duplicateArray);

// function findDivisible(arr) {
//   //   console.log(arr);
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// findDivisible([3, 4, 5, 56]);

(function fiveCharactersOrFewerOnly(arr) {
  for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index]);
    if (arr[index].split("").length <= 5) {
      console.log(arr[index]);
    }
  }
})(["dog", "wolf", "by", "family", "eaten", "camping"]);

// fiveCharactersOrFewerOnly();
