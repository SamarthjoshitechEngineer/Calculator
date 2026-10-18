const a=4;
console.log(typeof(a));
//console.log(sizeof(a));
//a=8; both are not allowed.
console.log(a);
var b=9;
console.log(b);
let arr=[4,6,9,14,145];
console.log(arr);
console.log(arr[2]);
arr.unshift(6);
console.log(arr);
arr.shift(14);
console.log(arr);
arr.push(18);
console.log(arr);
arr.pop();
console.log(arr);
arr[0]=14;
console.log(arr);
console.log(arr.length);
for(let i=0;i<arr.length;i++){
arr[i]*=2;
}
console.log(arr);
let brr=[[3,6,9],[5,78,10]];
console.log(brr)
let crr=[4,"Samarth","hello",9.6,true]
console.log(crr);
for(let ele of crr){
    console.log(ele);
}
let Srr=[2,4,6,8];
//This is by using for Of loop
for (let ele of Srr) {
   ele*=2;
    console.log(ele);
}
//console.log(Srr);
//This is by for Each loop
//Srr.forEach((ele) => {
//console.log(ele*2);
//});

if(undefined){
    //0 /null/NaN/undefined means false,rest all numbers,text are true values.
    console.log("Hello!,Samarth Joshi");
}
else
    console.log("I am Here!beacuse of you");
let S="Samarth Joshi";
for(const ele of S){
console.log(ele);
}///We can't use forEach loop
console.log(S.toLocaleUpperCase('tr'));
