//strong number are those number whose sum of factorial is equal to value
//145=1!+4!+5!
let num=145;
let sum=0;
let c=num
while(num>0){
    let fact=1;
    let r=num%10;
    for(let i=1;i<=r;i++){
        fact=fact*i;
    }
    sum=sum+fact;
  

    if(sum===c){
        console.log("strong number");
    }
    num=Math.floor(num/10);
}

