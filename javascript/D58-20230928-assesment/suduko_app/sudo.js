    const row = [
        ['','',9,1,8,5,'',3,6],
        [5,6,'',3,7,'',9,'',2],
        [3,'',8,'',6,'',4,5,1],
        [9,8,4,'',3,1,6,'',7],
        [2,'',7,6,'',9,'',1,3],
        [6,'','',8,2,'',5,9,4],
        ['',3,2,4,9,'',1,7,''],
        ['',4,5,2,'',8,3,6,''],
        [1,9,'',7,'',3,'',4,8]   
    ]
    const solution = [
        [4,2,9,1,8,5,7,3,6],
        [5,6,1,3,7,4,9,8,2],
        [3,7,8,9,6,2,4,5,1],
        [9,8,4,5,3,1,6,2,7],    
        [2,5,7,6,4,9,8,1,3],
        [6,1,3,8,2,7,5,9,4],
        [8,3,2,4,9,6,1,7,5],
        [7,4,5,2,1,8,3,6,9],
        [1,9,6,7,5,3,2,4,8]
    ]
    $(document).ready(function(){
        for (let k=0; k < 9; k++) {
            let i = 0;
            $(`#${k + 1} td input`).each(function () {
                if (row[k][i]!='') {
                    $(this).val(row[k][i]);
                } else {
                    $(this).addClass('bg-secondary');
                }
                i++;
            });
        }
            $('button').click(function(){
            for(i=0;i<9;i++){
                let j = 0
                $(`#${i+1} td input`).each(function(){
                row[i][j++] = $(this).val()
                })
            }
            
                let uWon = false
            for(i=0;i<9;i++){

                for (k=0;k<9;k++){
                    if(solution[i][k]==row[i][k]){
                        $('div').addClass('result').text('you won')
                    }
                    else{
                        
                        alert('     \n\tYOU LOSE\t\n\nthe errors are showed in green box')
                        uWon = true
                        break
                    }
                }
                if(uWon){
                    break
                }
            }
            for(e=0;e<9;e++){
            for(er=0;er<9;er++){
                if(solution[e][er]!=row[e][er]){
                    $(`#${e+1} td input`).eq(er).addClass('bg-success')
                }
                else{
                    $(`#${e+1} td input`).eq(er).removeClass('bg-success')
                }
            }
            }
            })
        
    })


