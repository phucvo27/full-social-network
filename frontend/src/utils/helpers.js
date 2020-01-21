export const convertArrayToObject = arr =>{
    console.log(arr.length)
    let obj = {};

    if(arr.length > 0){
        for(let i = 0; i < arr.length; i++){
            obj[`${arr[i]._id}`] = arr[i];
        }  
    }
    console.log(obj)
    return obj;
}