let num1=6,num2=12;
for(let i=num1;i<=num1*num2;i++){
    if(i%num1===0 && i%num2===0){
        console.log(i);
        break;
    }
}