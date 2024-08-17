let n=5;
for(i=2;i<n;i++){
    if(n%i==0){
        console.log("not a prime number");
        break;
    }
}
if(i==n){
   console.log("prime number"); 
}