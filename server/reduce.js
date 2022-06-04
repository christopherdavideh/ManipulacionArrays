function countRangeData (array_data) {
    const data = array_data.reduce((obj, item)=>{
        
        if (item >= 1 && item < 6) {
            obj["1-5"] +=1;            
        } else if (item >= 6 && item < 9){
            obj["6-8"] += 1;
        } else if (item >= 9 && item < 11){
            obj["9-10"] +=1;
        } else {
            if(obj["fuera_rango"]){
                obj["fuera_rango"] +=1;
            }else{
                obj["fuera_rango"] = 1;
            }
        }
        return obj;
    }, {"1-5": 0, "6-8": 0, "9-10":0});

    return data;
}


const numbers = [1, 2, 3, 3, 4, 5, 2, 1, 1, 3, 4, 5, 6, 7, 5, 5, 4, 7, 8, 9, 8, 7, 5, 4, 5, 8, 9, 10, 11, 23, 25, 9, 10, 45];


const result = countRangeData(numbers);
console.log(result)