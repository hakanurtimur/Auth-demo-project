

const tokenFinder = () => {
    const token = localStorage.getItem('token');
    return token;
}


export default tokenFinder;