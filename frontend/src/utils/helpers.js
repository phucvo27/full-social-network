export const convertListToObject = ( lists, isPost = false )=>{
    const obj = {};

    if(lists.length > 0){
        for(let i = 0; i < lists.length; i++){
            if(isPost){
                obj[lists[i]._id] = lists[i];
            }else{
                obj[lists[i].uid] = lists[i];
            }
        }
        return lists;
    }else{
        return null;
    }
}