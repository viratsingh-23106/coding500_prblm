let num=10;
let ans=0;
let pw=1;
while(num>0){
    let r=num%2;
    ans=ans+r*pw;
    pw*=10;
num=Math.floor(num/2);
}
console.log(ans);