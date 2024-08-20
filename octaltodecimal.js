let num=1534;
let ans=0;
let pw=1;
while(num>0){
    let unitdigit=num%10;
    ans=ans+unitdigit*pw;
    pw*=8;
    num=Math.floor(num/10);
}
console.log(ans);