let n=5;
let a=0,b=1;
console.log(a);
console.log(b);
for(let i=2;i<n;i++){
    let c=a+b;
    a=b;
    b=c;
    console.log(c);
}