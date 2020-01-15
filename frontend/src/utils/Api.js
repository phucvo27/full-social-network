
export const BASE_URL = 'http://localhost:5000/api'

export const Api = async (url, method, isFile = null, data = null)=>{
    if(method === 'get'){
        const res = await fetch(`${BASE_URL}${url}`);
        return res;
    }else{
        const res = await fetch(`${BASE_URL}${url}`,{
            headers: {
                'Content-Type': `${isFile ? '' : 'application/json'}`
            },
            credentials: 'include',
            body: isFile ? data : JSON.stringify(data),
            method: 'POST'
        })

        return res;
    }
    
}