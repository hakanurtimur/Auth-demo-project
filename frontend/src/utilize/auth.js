

const tokenFinder = () => {
    const token = localStorage.getItem('token');
    return token;
}

export const tokenLoader = () => {
    tokenFinder()
}


export default tokenFinder;