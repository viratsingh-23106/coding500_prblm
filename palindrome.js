var n=121;
var c=n;
var sum=0;
while(n>0){
    let rem=n%10;
    sum=sum*10 + rem;
    n=Math.floor(n/10);

}
if(c==sum){
    console.log("palindrome");
}
else{
    console.log("not");
}