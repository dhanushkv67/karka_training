// filter function is not used for modification
// it is used to filter the content using condition
// map is used to make copies of modifications made in list or obj
// filter will not modify but it will filter the content
// foreach will not make copies it will modify in original list or obj

a=[1,2,3,4,5];
edit = a.filter((ele,ind)=>{
    if(ind%2==0){
        return ele;
    }
});
console.log(edit)

