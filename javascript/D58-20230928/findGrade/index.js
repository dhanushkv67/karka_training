function findGrade(marks){
    if(100>marks && marks>=90){
       grade = 'S Grade'
    }
    else if(90>marks && marks>=80){
       grade = 'A Grade'
    }
    else if(80>marks && marks>=70){
       grade = 'B Grade'
    }
    else if(70>marks && marks>=60){
        grade = 'C Grade'
    }
    else if(60>marks && marks>=50){
        grade = 'D Grade'
    }
    else if(50>marks && marks>=40){
        grade = 'E Grade'
    }
    else if(40>marks && marks>0){
        grade = 'student has failed'
    }
    console.log(grade)
    }
findGrade(90)
