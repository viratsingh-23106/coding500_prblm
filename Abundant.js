let n=21,sum=0;
for(let i=0;i<n;i++){
    if(n%i===0){
        sum+=i;
    }
}
if(sum>n){
    console.log("abundant number");
}
else{
    console.log("not a abundant number")
}