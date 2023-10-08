function findDays(month){
    thirty = [4,6,9,11]
    if(month>12){
        console.log('invalid month number')
    }
    else if (thirty.includes(month)){
        console.log(('30'))
    }
    else if(month == 2){
        if(new Date().getFullYear()%4==0){
            console.log('28')
        }
        else{
            console.log('29')
        }
    }
    else{
       console.log('31')
    }
}
findDays(2)
