list1 = [1,2,1,3,1]
list2 = [1,-2]
list2.forEach((num,ind)=>{
  if(num<0){
    list2[ind]=0
  }
})
list = list1.map((a,b)=>{
  if(b==list2[0]){
    return list1[2]
  }
  else if(b==list2[1]){
    return list1[1]
  }
  else{
    return a
  }
})
console.log(list)