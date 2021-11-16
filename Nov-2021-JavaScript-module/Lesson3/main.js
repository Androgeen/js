
let arr = [2,17,13,6,22,31,45,66,100,-18];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//
// }
// let i = 0;
// while (i < arr.length) {
//     document.write(`<p>${arr[i]}</p>`);
//     i++;
// }
// for (let i = 0; i < arr.length; i+=2) {
//     console.log(arr[i])
// }
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2===0){
//         console.log(arr[i])
//     }
// }
// let i = 0;
// while (i < arr.length) {
//     document.write(`<p>${arr[i]}</p>`);
//     i+=2;
// // }
let i = 0;
while (i < arr.length) {
    if(arr[i]%2===0){
        document.write(`<p>${arr[i]}</p>`);
    }
    i++;

}