// function demo(a: number, b?: number): void {
//   console.log("Function Declaration Style");
// }
// var demo; //undefined
// demo(12);
// var demo = function(a: number): void {
//   console.log("Function Expression");
// };
var demo = function (a) {
    console.log("Arrow function ");
    return 45;
};
console.log(demo(23));
