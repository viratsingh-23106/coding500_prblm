let n=1234;
var sum=0;
while(n!=0){
    let rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10);
}
console.log(sum);