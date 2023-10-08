list1 = [1,2,1,3,1,2]
list2 = [1]
for (i of list2){
  list1 = list1.filter((a)=>{
  if (a!=i){
    return a
  }
})
}
console.log(list1)