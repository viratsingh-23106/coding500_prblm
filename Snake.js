let cpu=["S","W","G"][cpuI]

const match=(cpu,user)=>{
    if(cpu===user){
        return 0;
    }
    else if(cpu==="S"&&user==="W"){
        return "cpu";
    }
    
    else if(cpu ==="S" && user ==="W"){
        return "user"
    }
    else if(cpu==="G"  &&  user=== "W"){
        return "cpu"
    } 
    else if(cpu==="G"  &&  user=== "S"){
        return "user"
    } 
    else if(cpu==="W"  &&  user=== "G"){
        return "cpu"
    } 
}
let result=match(cpu,user)
console.log(`the winner is : ${result}`)