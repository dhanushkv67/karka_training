let a = [1,2,1,6,2,3,4];
a.forEach((data,index)=>{
    if(data%2==0){
        a[index]=0;                 
    }        
})
console.log(a)   