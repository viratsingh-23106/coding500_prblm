let num1=10;
let num2=20;
var i,j;
for(i=num1;i<=num2;i++){
    for(j=2;j<=i;j++){
        if(i%j==0){
            break;
        }
    }
    if(i==j){
        console.log(j);
    }
}