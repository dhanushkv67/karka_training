   
// map function used to modify

// filter function used to fliter content, it is not used to modify

// map is used to make copies of modifications made in list or obj
// filter will not modify but it will filter the content
// foreach will not make copies it will modify in original list or obj

        let bikes=[
            {
              name:"platina",
              showroom_price:66000,
              road_price:75000,
              tax:15,
              milage:75
            },
            {
              name:"duke",
              showroom_price:150000,
              road_price:170000,
              tax:20,
              milage:30
            },
            {
              name:"royal_Enfield",
              showroom_price:200000,
              road_price:230000,
              tax:15,
              milage:35
            },
            {
              name:"dio",
              showroom_price:75000,
              road_price:80000,
              tax:10,
              milage:45
            }
            
            ]
          let bike=bikes.map(val=>{
             if(val.milage>40){
               val["type"]="economy"
               
             }
            else{
              val["type"]="racer"
             
            }
            val["road_price"]=(val.showroom_price)*(val.tax/100)+val.showroom_price
            return val
          })
          console.log(bike)
          
          // map basic
          
          const a=[2,3]
          function add(b){
            return b+2;}
          c=a.map(add)
          // console.log(c)
          
          a.map((ele,ind)=>{
            console.log(ele,ind)
          })
  