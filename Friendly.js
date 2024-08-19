let num1=6,num2=28;
let sum1=0,sum2=0;
for(let i=1;i<num1;i++){
    if(num1%i===0){
        sum1+=i;
    }
}
for(let i=1;i<num2;i++){
    if(num2%i===0){
        sum2+=i;
    }
}
if(sum1==num1 && sum2==num2){
    console.log("friendly pair");
}
else{
    console.log("not a frriendly pair");
}
