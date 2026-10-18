//Buit-In Methods
let a="Samarth JoShi ";
console.log(a);
console.log(a[0]);
console.log(a.length);
console.log(a.toUpperCase());
console.log(a.toLocaleUpperCase('tr'));
console.log(a.toLowerCase());
console.log(a.includes("Sam"));
console.log(a.charAt(1));
console.log(a.substring(0,6));
console.log(a.startsWith('Sam'));
console.log(a.replace("Sam","Sama"));
console.log(a.trim());
console.log(a.repeat(4));
console.log(a.indexOf('a'));
console.log(a.slice(5));
console.log(typeof(a));
console.log(a.slice(0,6));
console.log(a.search('a'));
console.log(a.split(' '));

//Set Timeout
function Hi(){
    console.log("Hello,Good Morning");
}
function ohh(){
    console.log("How are you Samarth?");
}
setTimeout(Hi,5*1000);
setTimeout(ohh,1*1000);
            //OR
/*setTimeout(function(){
console.log("Hello!,Samarth Joshi");
},3*1000);
setTimeout(function(){
console.log("Hi!,Samarth Joshi");
},2*1000);

// print 1 to 10 with delay of 1s each.

function print(i){
    console.log(i);
}
for(let i=1;i<=10;i++){
setTimeout(()=>print(11-i),i*1000);//prints from 10 to 9 if just i then from 1=>10.
}*/
function print(n){
    let fact=1;
    for(let i=1;i<=n;i++){
    fact=fact*i;
    }
    return fact;
}
function printFactorial(){
for(let i=1;i<=10;i++){
      setTimeout(()=>{console.log(print(i));},i*1000);
}
}
printFactorial();