$(document).ready(function(){
    $.get('select.json',(json)=>{
        console.log(json)
        
        json.details.map((val,ind)=>{
            console.log(val,ind)
            $(`#row${ind+1} #name`).text(val.name);
            $(`#row${ind+1} #place`).text(val.place);
            $(`#row${ind+1} #age`).text(val.age)  
        })
    })
})

