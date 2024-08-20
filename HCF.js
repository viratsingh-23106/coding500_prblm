let num1=6,num2=12;
let gcd=0;
const hcf= (x,y)=>{
    for(let i=1;i<=x && i<=y;i++ ){
        if(x%i===0 && y%i===0){
            gcd=i;
        }
    }
    return gcd;
}
console.log(hcf(num1,num2));