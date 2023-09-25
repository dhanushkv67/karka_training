window.onload=function(){
    var jsdata = JSON.parse(localStorage.getItem('data'))
    console.log(jsdata)
    // localStorage.removeItem('data')
    let col_l =  document.getElementById("col-l");
    col_l.innerHTML=`<img src="${jsdata.images[0]}"></img>`
    let col_r = document.getElementById("col-r");
    col_r.innerHTML=
                    `<h1>Brand Name:   ${jsdata.brand}</h1>
                     <h3>Model ${jsdata.title}</h3>
                     <p>${jsdata.description}</p>
                     <div>
                        <span>${jsdata.rating}</span>
                        <span>${jsdata.stock}<span>
                     </div>
                     <div>
                        <span>$${jsdata.price}</span>
                        <span>${jsdata.discountPercentage}</span>
                     </div>`
    
}
