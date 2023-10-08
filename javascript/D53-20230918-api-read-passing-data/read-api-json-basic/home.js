function handle_load(){
    // function get(a){
    //     console.log(a)
    // }
    $.getJSON('https://dummyjson.com/product/1', function(data){
    {
        //  console.log(data);
        for (i in data){
            // console.log("n",data[i]);
            document.getElementById(i).innerHTML=data[i]
        }


        document.getElementById("id").innerText=data.id;
        document.getElementById("title").innerText=data.title;
        document.getElementById("description").innerText=data.description;
        document.getElementById("price").innerText=data.price;
        document.getElementById("discountPercentage").innerText=data.discountPercentage;
        document.getElementById("rating").innerText=data.rating;
        document.getElementById("stock").innerText=data.stock;
        document.getElementById("brand").innerText=data.brand;
        document.getElementById("category").innerText=data.category;
    }
})
    // console.log($("td"))
    }




   



