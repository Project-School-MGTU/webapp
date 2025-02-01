export function CriticPoint(data){
    let min = 99999;
    let max = 0;
    data.forEach((element,ind) => {
        if(ind<min){
             min = ind;
        }
        if(ind>max){
             max = ind;
        }
    });
    return {min:min,max:max}
}