let n=26;
let c=n;
let sum=0;
while(n>0){
    let r=n%10;
    sum+=r;
   n=Math.floor(n/10);
}
if(c%sum==0){
    console.log("harshad number");
}
else{
    console.log("not harshad number")
}