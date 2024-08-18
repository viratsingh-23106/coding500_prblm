let num=10;

for(let i=num ;i<=1000;i++){
    let sum=0;
    let n=i;
    let c=n;
    while(n>0){
        rem=n%10;
        sum=sum+rem*rem*rem;
        n= Math.floor(n/10);
    }
    if(sum===c){
        console.log(sum);
    }

}