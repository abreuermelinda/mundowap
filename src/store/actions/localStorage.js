export const saveToken = (user) => {
    if(!user.token) return null;
    const token = user.token;
    localStorage.setItem("token", token);  
}

export const cleanToken = () => {
    localStorage.removeItem("token");  
}

export const getToken = () => {
    const token = localStorage.getItem("token");    
    if(!token) return null;
    return `${token}`;
}

export const getHeaders = () => {
    return {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    }
}