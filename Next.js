//Operators
let a=5,b=4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a&&b);
console.log(a||b);
console.log(a&b);
console.log(a|b);
console.log(a<<b);
console.log(a>>b);
console.log(a==b);
console.log(a===b);
console.log(a!=b);
(a>b)? console.log("Hello"):console.log(Hi);//Ternary operator

//Buit-In Functions
let c=-9.8;
console.log(Math.pow(a,b));
console.log(Math.sqrt(b));
console.log(Math.log10(b));
console.log(Math.cbrt(a+3));
console.log(Math.abs(c));
console.log(Math.floor(c));
console.log(Math.ceil(c));
console.log(Math.sin(b+86));
console.log(Math.exp(a));

//If-Else
if(false){
    //0,null,NaN,undefined,false---All are falsy values.
    console.log("Hello!");
}
else
    console.log("Good Morning!");

//Literals
let nam="Samarth";
let age=17;
let exp=4;
console.log("My age is",age,"My experience is",exp,"My name is",nam);
console.log(`My age is ${age} My experience is ${exp} My name is ${nam}`);
console.log("Samarth \"Joshi");
console.log('Samarth "Joshi');
console.log(`Samarth "Joshi`);
//Objects
let obj={
    'name':"Samarth joshi",
    age:17,
    College:"BMS College Of Engineering",
    Exp:4
};
console.log(obj);
console.log(obj.name);
console.log(obj['name']);
console.log(obj['age']);
console.log(obj.College);
console.log(obj.Exp);
for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;
    console.log(key,obj[key]);  
}

