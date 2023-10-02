// return boolean value 

const a = [1,2,3,2,4,3];
bool = a.some((val,ind)=>{
    if (val%2==0){
        return val
    }
})
console.log(bool)