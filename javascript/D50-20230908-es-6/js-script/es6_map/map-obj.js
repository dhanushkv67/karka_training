// map is used to make copies of modifications made in list or obj
// filter will not modify but it will filter the content
// foreach will not make copies it will modify in original list or obj

data = [
    {
        name:'dhanu',
        age:24
    },
    {
        name:'dhanu1',
        age:25
    },
    {
        name:'dhanu2',
        age:26
    }
]

res = data.map((val)=>{

    return {[val.name]:val.age}
}
)
console.log(res)