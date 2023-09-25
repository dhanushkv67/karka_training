function get_fecth(){
  const json_data = fetch('https://dummyjson.com/products')
  .then(res  => res.json())
  .then(json => {return json })
  return json_data
}

function handle_load(){
    get_fecth()
        .then((jsonData) => {

          // console.log(jsonData)
            for(i of jsonData.products){
            let body=document.getElementById("tbody");
            const row = document.createElement('tr');
                        row.innerHTML = 
                          `<td><img src="${i.images[0]}"></td>
                            <td class="title">${i.title}</td>
                            <td>${i.price}</td>
                            <td><button onclick="show_details(${i.id})" class="btn btn-dark">view details</button>`

                        body.appendChild(row);
        }
      }
      )
    }
function show_details(id_num){
  get_fecth()
  .then((jsonData)=>{
    for(i of jsonData.products){
      if (id_num==i.id){
        localStorage.setItem('data',JSON.stringify(i))
        // console.log(JSON.stringify(i))
        window.location.href='/home/dhanu/karka/D53-20230918/passing-data/redirect.html'
      }
    }
})


}

