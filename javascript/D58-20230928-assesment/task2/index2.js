
grade(95) 
 



function grade(mark){
    
    if (mark>90 && mark<=100){
    console .log(`${mark} This is S Grade`)
    }
    else if (mark>80 && mark<=90){
        console .log(`${mark} This is A Grade`);
    }
    else if (mark>70 && mark<=80){
        console.log(`${mark} This is B Grade`);
    }
    else if (mark>60 && mark<=70){
        console .log (`${mark} This is C Grade`);
    }
    else if (mark>50 && mark<=60){
        console .log (`${mark} This is D Grade`);
    }
    else if (mark>=40 && mark<=50){
        console.log(`${mark} This is E Grade`);
    }
    else
     console .log (`${mark} Invalid Marks`);
    
     $("#tbody").append(`<tr><td>${mark}</td></tr>`)
    
}

// grade(60)    
// grade(40)    
// grade(30)    
// grade(90)    
// grade(88)    

