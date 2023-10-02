function prime(num){

    for(i=2;i<=num;i++){

      let isprime=true

        for(j=2;j<=num;j++){

            if(i!=j){

                if(i%j==0){
                    isprime=false 
                    break
                }
            }
        }
        if(isprime){
            console.log(i)
        }
    }
}
prime(20)
