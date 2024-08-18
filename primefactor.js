let n=10;
for(let i=1;i<=n;i++){
    if(n%i===0){
        isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j==0){
                isPrime=false;
                break;
             }
            }
        
           if(isPrime&&i>1)
            {
            console.log(i)
            }
    }
}