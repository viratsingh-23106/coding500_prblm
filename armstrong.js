
// armstrong number means 153 = 1*1*1 + 5*5*5 + 3*3*3

var n=153;
var arm=0;
var c =n;
while(n>0){
    let r=n%10;
    arm=r*r*r+arm;
    n= Math.floor(n/10);


}
if(c==arm){
     console.log("armstrong number");
}
else{
    console.log("not");
}