// reduce function used to add total val in list

const a = [2,4,3,1,6,5];
count = a.reduce((accumulate,current)=>{
    // console.log(accumulate,current)},4)
    return accumulate+current;
})
console.log(count)
