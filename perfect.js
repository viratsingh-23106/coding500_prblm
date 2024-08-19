let n=6;
let sum=0;
for(let i=1;i<n;i++){
    if(n%i===0){
        sum+=i;
    }
    
}
if(sum===n){
    console.log(n +"is a perfect number");
}
else{
console.log(n +"is a not perfect number");
}
    
