

const tokenFinder = () => {
    const token = localStorage.getItem('token');
    return token;
}

<<<<<<< HEAD
export const tokenLoader = () => {
    tokenFinder()
}

=======
>>>>>>> 38196f43d8fffa2094b3580e5371fe2a92d46132

export default tokenFinder;